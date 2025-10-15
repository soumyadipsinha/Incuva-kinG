import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Package, Truck, CheckCircle, Clock, Star, Download, Eye, Trash2, Plus, Minus, Heart, Share2, MessageCircle, ThumbsUp } from "lucide-react";
import { useCart } from "@/context/CartContext";


interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  review: string;
  verified: boolean;
  helpful: number;
}

export default function CartPage() {
  // Use global cart context
  const { cartItems, updateQuantity, removeFromCart, getTotalItems, getTotalPrice } = useCart();

  const [customerReviews, setCustomerReviews] = useState<Review[]>([
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      date: "2 days ago",
      review: "Excellent quality business cards! The design exceeded my expectations. Fast delivery and great customer service.",
      verified: true,
      helpful: 12
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      rating: 5,
      date: "1 week ago",
      review: "Amazing flex banner design and printing. Perfect for our store opening. Highly recommended!",
      verified: true,
      helpful: 8
    },
    {
      id: 3,
      name: "Anita Patel",
      rating: 4,
      date: "2 weeks ago",
      review: "Good quality logo design. The team was very responsive to feedback. Would order again.",
      verified: true,
      helpful: 15
    },
    {
      id: 4,
      name: "Vikram Singh",
      rating: 5,
      date: "3 weeks ago",
      review: "Outstanding poster design! Great attention to detail and fast turnaround. Very satisfied!",
      verified: true,
      helpful: 6
    }
  ]);

  // Cart functions
  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    updateQuantity(id, newQuantity);
  };

  const handleRemoveFromCart = (id: string) => {
    removeFromCart(id);
  };

  const toggleWishlist = (id: number) => {
    // This would typically add/remove from wishlist
    console.log(`Toggle wishlist for item ${id}`);
  };

  const shareItem = (item: any) => {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: item.description,
        url: window.location.href
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`${item.title} - ${item.description} - ${window.location.href}`);
      alert('Link copied to clipboard!');
    }
  };

  const markReviewHelpful = (reviewId: number) => {
    setCustomerReviews(customerReviews.map(review => 
      review.id === reviewId 
        ? { ...review, helpful: review.helpful + 1 }
        : review
    ));
  };

  const subtotal = getTotalPrice();
  const shipping = 99;
  const total = subtotal + shipping;
  const totalSavings = 0; // We'll calculate this based on the actual cart items

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-transparent border-b">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShoppingCart className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-primary">Shopping Cart</h1>
                <p className="text-sm sm:text-base text-muted-foreground">{cartItems.length} items in your cart</p>
              </div>
            </div>
            <Button variant="outline" className="w-full sm:w-auto" asChild>
              <a href="/services">Continue Shopping</a>
            </Button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="flex flex-col sm:flex-row">
                    {/* Product Image */}
                    <div className="aspect-square w-full sm:w-48 relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="absolute top-2 right-2 bg-white/80 hover:bg-white hidden sm:block"
                        onClick={() => toggleWishlist(parseInt(item.id))}
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 p-4 sm:p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-base sm:text-lg font-semibold text-primary hover:text-primary/80 cursor-pointer">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                          
                          {/* Supplier and Location */}
                          <div className="mt-2 flex items-center gap-4 text-sm">
                            {item.supplier && (
                              <span className="text-muted-foreground">Supplier: {item.supplier}</span>
                            )}
                            {item.location && (
                              <span className="text-green-600 font-medium">{item.location}</span>
                            )}
                          </div>

                          {/* Price */}
                          <div className="mt-3 flex items-center gap-3">
                            <span className="text-2xl font-bold text-primary">{item.price}</span>
                          </div>
                        </div>
                      </div>

                      {/* Quantity and Actions */}
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium">Quantity:</span>
                          <div className="flex items-center border rounded-lg">
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              className="h-8 w-8 p-0"
                              onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <Input 
                              type="number" 
                              value={item.quantity} 
                              className="w-16 h-8 text-center border-0"
                              min="1"
                              onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value) || 1)}
                            />
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              className="h-8 w-8 p-0"
                              onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => shareItem(item)}
                          >
                            <Share2 className="mr-2 h-4 w-4" />
                            Share
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="text-red-600 hover:text-red-700"
                            onClick={() => handleRemoveFromCart(item.id)}
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Remove
                          </Button>
                        </div>
                      </div>

                      {/* Delivery Info */}
                      <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                        <Truck className="h-4 w-4" />
                        <span>Delivery: 3-5 business days</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Customer Reviews Section */}
            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-primary mb-6">Customer Reviews</h2>
              <div className="space-y-4">
                {customerReviews.map((review) => (
                  <Card key={review.id} className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-semibold text-sm">
                            {review.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-primary">{review.name}</span>
                            {review.verified && (
                              <Badge variant="secondary" className="text-xs">Verified</Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-4 w-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => markReviewHelpful(review.id)}
                      >
                        <ThumbsUp className="mr-2 h-4 w-4" />
                        {review.helpful}
                      </Button>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{review.review}</p>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="sticky top-4 rounded-2xl shadow-xl border-0 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-t-2xl">
                <CardTitle className="flex items-center gap-3 text-primary">
                  <div className="p-2 bg-primary/20 rounded-full">
                    <Package className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xl font-bold">Order Summary</div>
                    <div className="text-sm text-muted-foreground font-normal">
                      {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm font-medium">Subtotal</span>
                    </div>
                    <span className="font-semibold text-primary">₹{subtotal}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2">
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium">Shipping & Handling</span>
                    </div>
                    <span className="font-semibold text-green-600">₹{shipping}</span>
                  </div>
                  
                  {totalSavings > 0 && (
                    <div className="flex justify-between items-center py-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium text-green-600">You Save</span>
                      </div>
                      <span className="font-semibold text-green-600">₹{totalSavings}</span>
                    </div>
                  )}
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <span className="text-lg font-bold text-primary">Total Amount</span>
                      </div>
                      <span className="text-2xl font-bold text-primary">₹{total}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white rounded-full py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300" size="lg" asChild>
                    <a href="/contact" className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Proceed to Contact
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="w-full rounded-full py-2" asChild>
                    <a href="/services" className="flex items-center justify-center gap-2">
                      <Plus className="w-4 h-4" />
                      Continue Shopping
                    </a>
                  </Button>
                </div>
                
                {totalSavings > 0 && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                    <div className="flex items-center justify-center gap-2 text-green-700">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">
                        Great deal! You save ₹{totalSavings} on this order
                      </span>
                    </div>
                  </div>
                )}
                
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">
                    All prices include applicable taxes. Free shipping on orders above ₹500.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Security & Trust */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Secure Checkout</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>SSL Encrypted</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>100% Secure Payment</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Money Back Guarantee</span>
                </div>
              </CardContent>
            </Card>

            {/* Support */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="tel:+919876543210">
                    <span className="mr-2">📞</span>
                    Call Support
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="/contact">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Live Chat
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="mailto:soumyadipsinha273@gmail.com">
                    <span className="mr-2">📧</span>
                    Email Support
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
