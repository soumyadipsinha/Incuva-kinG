import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import api from '@/services/api';
import { useAuth } from './AuthContext';

export interface CartItem {
  id: string;
  productId?: string;
  title: string;
  price: string | number;
  image: string;
  quantity: number;
  description?: string;
  supplier?: string;
  location?: string;
  specifications?: string[] | any;
  category?: string;
}

interface CartContextValue {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => Promise<void>;
  removeFromCart: (id: string) => Promise<void>;
  updateQuantity: (id: string, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  loading: boolean;
  refreshCart: () => Promise<void>;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [localCart, setLocalCart] = useState<CartItem[]>(() => {
    try {
      const savedCart = localStorage.getItem('incuva_cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  // Load cart from backend when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      refreshCart();
    } else {
      // Use local cart for non-authenticated users
      setCartItems(localCart);
    }
  }, [isAuthenticated]);

  // Save local cart to localStorage
  useEffect(() => {
    if (!isAuthenticated) {
      try {
        localStorage.setItem('incuva_cart', JSON.stringify(cartItems));
      } catch (error) {
        console.error('Failed to save cart to localStorage:', error);
      }
    }
  }, [cartItems, isAuthenticated]);

  const refreshCart = async () => {
    if (!isAuthenticated) {
      setCartItems(localCart);
      return;
    }

    try {
      setLoading(true);
      const response = await api.get('/api/cart');
      const formattedItems = response.data.cartItems.map((item: any) => ({
        ...item,
        price: typeof item.price === 'number' ? item.price.toString() : item.price
      }));
      setCartItems(formattedItems);
    } catch (error: any) {
      console.error('Failed to fetch cart:', error);
      // Fallback to local cart if API fails
      setCartItems(localCart);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (item: Omit<CartItem, 'quantity'>) => {
    if (!isAuthenticated) {
      // Local cart for non-authenticated users
      setLocalCart(prevCart => {
        const existingItem = prevCart.find(cartItem => 
          cartItem.id === item.id || cartItem.productId === item.productId
        );
        
        if (existingItem) {
          const updated = prevCart.map(cartItem =>
            (cartItem.id === item.id || cartItem.productId === item.productId)
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          );
          setCartItems(updated);
          return updated;
        } else {
          const newCart = [...prevCart, { ...item, quantity: 1 }];
          setCartItems(newCart);
          return newCart;
        }
      });
      return;
    }

    try {
      setLoading(true);
      const priceValue = typeof item.price === 'string' 
        ? parseFloat(item.price.replace(/[^\d.]/g, '')) 
        : item.price;

      const response = await api.post('/api/cart', {
        productId: item.productId || item.id,
        quantity: 1,
        // Include product data if product doesn't exist in DB
        title: item.title,
        price: priceValue,
        image: item.image,
        description: item.description,
        category: item.category,
        supplier: item.supplier,
        location: item.location,
        specifications: item.specifications
      });

      // Refresh cart after adding
      await refreshCart();
    } catch (error: any) {
      console.error('Failed to add to cart:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const removeFromCart = async (id: string) => {
    if (!isAuthenticated) {
      // Local cart for non-authenticated users
      const updated = localCart.filter(item => item.id !== id);
      setLocalCart(updated);
      setCartItems(updated);
      return;
    }

    try {
      setLoading(true);
      // Find cart item ID from product ID
      const cartItem = cartItems.find(item => item.id === id || item.productId === id);
      if (!cartItem) return;

      await api.delete(`/api/cart/${cartItem.id}`);
      await refreshCart();
    } catch (error: any) {
      console.error('Failed to remove from cart:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (id: string, quantity: number) => {
    if (quantity <= 0) {
      await removeFromCart(id);
      return;
    }

    if (!isAuthenticated) {
      // Local cart for non-authenticated users
      const updated = localCart.map(item =>
        (item.id === id || item.productId === id) ? { ...item, quantity } : item
      );
      setLocalCart(updated);
      setCartItems(updated);
      return;
    }

    try {
      setLoading(true);
      // Find cart item ID from product ID
      const cartItem = cartItems.find(item => item.id === id || item.productId === id);
      if (!cartItem) return;

      await api.put(`/api/cart/${cartItem.id}`, { quantity });
      await refreshCart();
    } catch (error: any) {
      console.error('Failed to update quantity:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const clearCart = async () => {
    if (!isAuthenticated) {
      // Local cart for non-authenticated users
      setLocalCart([]);
      setCartItems([]);
      return;
    }

    try {
      setLoading(true);
      await api.delete('/api/cart');
      setCartItems([]);
    } catch (error: any) {
      console.error('Failed to clear cart:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      // Extract numeric value from price string or use number directly
      const priceValue = typeof item.price === 'string' 
        ? (parseFloat(item.price.replace(/[^\d.]/g, '')) || 0)
        : (item.price || 0);
      return total + (priceValue * item.quantity);
    }, 0);
  };

  const value = useMemo(() => ({
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
    loading,
    refreshCart
  }), [cartItems, loading, isAuthenticated]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
