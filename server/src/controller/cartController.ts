import { Response } from 'express';
import prisma from '../config/prisma.js';
import { AuthRequest } from '../middleware/auth.js';

// Get user's cart items
export const getCart = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const cartItems = await (prisma as any).cartItem.findMany({
      where: { userId },
      include: {
        product: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    // Transform cart items to match frontend format
    const formattedCartItems = cartItems.map((item: any) => ({
      id: item.id,
      productId: item.productId,
      title: item.product.title,
      price: item.product.price,
      image: item.product.image,
      quantity: item.quantity,
      description: item.product.description,
      supplier: item.product.supplier,
      location: item.product.location,
      specifications: item.product.specifications,
      category: item.product.category
    }));

    res.json({ cartItems: formattedCartItems });
  } catch (error: any) {
    console.error('Get cart error:', error);
    res.status(500).json({ 
      error: 'Internal server error', 
      details: process.env.NODE_ENV === 'development' ? error.message : undefined 
    });
  }
};

// Add item to cart
export const addToCart = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { productId, quantity = 1 } = req.body;

    if (!productId) {
      return res.status(400).json({ error: 'Product ID is required' });
    }

    // Check if product exists
    const product = await (prisma as any).product.findUnique({
      where: { id: productId }
    });

    if (!product) {
      // If product doesn't exist, create it from the request data
      // This allows adding products on-the-fly
      const { title, price, image, description, category, supplier, location, specifications } = req.body;

      if (!title || !price || !image) {
        return res.status(400).json({ error: 'Product not found. Please provide title, price, and image to create product.' });
      }

      // Create product first
      const newProduct = await (prisma as any).product.create({
        data: {
          title,
          price: parseFloat(price.toString().replace(/[^\d.]/g, '')), // Extract numeric value
          image,
          description: description || null,
          category: category || null,
          supplier: supplier || null,
          location: location || null,
          specifications: specifications || null
        }
      });

      // Check if item already exists in cart
      const existingCartItem = await (prisma as any).cartItem.findUnique({
        where: {
          userId_productId: {
            userId,
            productId: newProduct.id
          }
        }
      });

      let cartItem;
      if (existingCartItem) {
        // Update quantity
        cartItem = await (prisma as any).cartItem.update({
          where: { id: existingCartItem.id },
          data: { quantity: existingCartItem.quantity + quantity },
          include: { product: true }
        });
      } else {
        // Create new cart item
        cartItem = await (prisma as any).cartItem.create({
          data: {
            userId,
            productId: newProduct.id,
            quantity
          },
          include: { product: true }
        });
      }

      const formattedItem = {
        id: cartItem.id,
        productId: cartItem.productId,
        title: cartItem.product.title,
        price: cartItem.product.price,
        image: cartItem.product.image,
        quantity: cartItem.quantity,
        description: cartItem.product.description,
        supplier: cartItem.product.supplier,
        location: cartItem.product.location,
        specifications: cartItem.product.specifications,
        category: cartItem.product.category
      };

      return res.status(201).json({ 
        message: 'Item added to cart',
        cartItem: formattedItem
      });
    }

    // Check if item already exists in cart
    const existingCartItem = await (prisma as any).cartItem.findUnique({
      where: {
        userId_productId: {
          userId,
          productId
        }
      }
    });

    let cartItem;
    if (existingCartItem) {
      // Update quantity
      cartItem = await (prisma as any).cartItem.update({
        where: { id: existingCartItem.id },
        data: { quantity: existingCartItem.quantity + quantity },
        include: { product: true }
      });
    } else {
      // Create new cart item
      cartItem = await (prisma as any).cartItem.create({
        data: {
          userId,
          productId,
          quantity
        },
        include: { product: true }
      });
    }

    const formattedItem = {
      id: cartItem.id,
      productId: cartItem.productId,
      title: cartItem.product.title,
      price: cartItem.product.price,
      image: cartItem.product.image,
      quantity: cartItem.quantity,
      description: cartItem.product.description,
      supplier: cartItem.product.supplier,
      location: cartItem.product.location,
      specifications: cartItem.product.specifications,
      category: cartItem.product.category
    };

    res.status(201).json({ 
      message: 'Item added to cart',
      cartItem: formattedItem
    });
  } catch (error: any) {
    console.error('Add to cart error:', error);
    
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Item already in cart' });
    }
    
    res.status(500).json({ 
      error: 'Internal server error', 
      details: process.env.NODE_ENV === 'development' ? error.message : undefined 
    });
  }
};

// Update cart item quantity
export const updateCartItem = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId;
    const { cartItemId } = req.params;
    const { quantity } = req.body;

    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    if (!quantity || quantity < 1) {
      return res.status(400).json({ error: 'Quantity must be at least 1' });
    }

    // Verify cart item belongs to user
    const cartItem = await (prisma as any).cartItem.findFirst({
      where: {
        id: cartItemId,
        userId
      }
    });

    if (!cartItem) {
      return res.status(404).json({ error: 'Cart item not found' });
    }

    // Update quantity
    const updatedCartItem = await (prisma as any).cartItem.update({
      where: { id: cartItemId },
      data: { quantity },
      include: { product: true }
    });

    const formattedItem = {
      id: updatedCartItem.id,
      productId: updatedCartItem.productId,
      title: updatedCartItem.product.title,
      price: updatedCartItem.product.price,
      image: updatedCartItem.product.image,
      quantity: updatedCartItem.quantity,
      description: updatedCartItem.product.description,
      supplier: updatedCartItem.product.supplier,
      location: updatedCartItem.product.location,
      specifications: updatedCartItem.product.specifications,
      category: updatedCartItem.product.category
    };

    res.json({ 
      message: 'Cart item updated',
      cartItem: formattedItem
    });
  } catch (error: any) {
    console.error('Update cart item error:', error);
    res.status(500).json({ 
      error: 'Internal server error', 
      details: process.env.NODE_ENV === 'development' ? error.message : undefined 
    });
  }
};

// Remove item from cart
export const removeFromCart = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId;
    const { cartItemId } = req.params;

    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Verify cart item belongs to user
    const cartItem = await (prisma as any).cartItem.findFirst({
      where: {
        id: cartItemId,
        userId
      }
    });

    if (!cartItem) {
      return res.status(404).json({ error: 'Cart item not found' });
    }

    // Delete cart item
    await (prisma as any).cartItem.delete({
      where: { id: cartItemId }
    });

    res.json({ message: 'Item removed from cart' });
  } catch (error: any) {
    console.error('Remove from cart error:', error);
    res.status(500).json({ 
      error: 'Internal server error', 
      details: process.env.NODE_ENV === 'development' ? error.message : undefined 
    });
  }
};

// Clear cart
export const clearCart = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Delete all cart items for user
    await (prisma as any).cartItem.deleteMany({
      where: { userId }
    });

    res.json({ message: 'Cart cleared' });
  } catch (error: any) {
    console.error('Clear cart error:', error);
    res.status(500).json({ 
      error: 'Internal server error', 
      details: process.env.NODE_ENV === 'development' ? error.message : undefined 
    });
  }
};

// Checkout - Create order from cart
export const checkout = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { 
      fullName, 
      email, 
      phone, 
      address, 
      city, 
      state, 
      pincode, 
      paymentMethod 
    } = req.body;

    // Validation
    if (!fullName || !email || !address || !city || !state || !pincode) {
      return res.status(400).json({ error: 'All required fields must be provided' });
    }

    // Get user's cart items
    const cartItems = await (prisma as any).cartItem.findMany({
      where: { userId },
      include: {
        product: true
      }
    });

    if (cartItems.length === 0) {
      return res.status(400).json({ error: 'Cart is empty' });
    }

    // Calculate total
    const totalAmount = cartItems.reduce((total: number, item: any) => {
      return total + (item.product.price * item.quantity);
    }, 0);

    // Create order
    const order = await (prisma as any).order.create({
      data: {
        userId,
        totalAmount,
        paymentMethod: paymentMethod || null,
        fullName,
        email,
        phone: phone || null,
        address,
        city,
        state,
        pincode,
        status: 'PENDING',
        orderItems: {
          create: cartItems.map((item: any) => ({
            productId: item.productId,
            title: item.product.title,
            price: item.product.price,
            quantity: item.quantity,
            image: item.product.image
          }))
        }
      },
      include: {
        orderItems: true,
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true
          }
        }
      }
    });

    // Clear cart after order creation
    await (prisma as any).cartItem.deleteMany({
      where: { userId }
    });

    res.status(201).json({
      message: 'Order placed successfully',
      order: {
        id: order.id,
        totalAmount: order.totalAmount,
        status: order.status,
        paymentMethod: order.paymentMethod,
        fullName: order.fullName,
        email: order.email,
        phone: order.phone,
        address: order.address,
        city: order.city,
        state: order.state,
        pincode: order.pincode,
        createdAt: order.createdAt,
        orderItems: order.orderItems
      }
    });
  } catch (error: any) {
    console.error('Checkout error:', error);
    res.status(500).json({ 
      error: 'Internal server error', 
      details: process.env.NODE_ENV === 'development' ? error.message : undefined 
    });
  }
};

// Get user's orders
export const getOrders = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const orders = await (prisma as any).order.findMany({
      where: { userId },
      include: {
        orderItems: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    res.json({ orders });
  } catch (error: any) {
    console.error('Get orders error:', error);
    res.status(500).json({ 
      error: 'Internal server error', 
      details: process.env.NODE_ENV === 'development' ? error.message : undefined 
    });
  }
};

