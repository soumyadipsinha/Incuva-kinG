import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Package, Truck, CheckCircle, Clock, Star, Download, Eye, Trash2, Plus, Minus, Heart, Share2, MessageCircle, ThumbsUp } from "lucide-react";

export default function CartPage() {
  // Cart items with your asset images
  const cartItems = [
    {
      id: 1,
      service: "Business Cards - Executive Design",
      description: "Premium double-sided business cards with elegant typography",
      image: "/assets/buisnesscard1.png",
      size: "Standard (3.5x2 inches)",
      quantity: 2,
      price: 149,
      originalPrice: 199,
      discount: 25,
      status: "in-cart",
      estimatedDelivery: "3-5 business days",
      rating: 4.8,
      reviews: 124,
      inStock: true
    },
    {
      id: 2,
      service: "Flex Banner - Event Promotion",
      description: "High-quality frontlit flex banner for events and promotions",
      image: "/assets/flex1.jpg",
      size: "4x8 feet",
      quantity: 1,
      price: 899,
      originalPrice: 1199,
      discount: 25,
      status: "in-cart",
      estimatedDelivery: "2-3 business days",
      rating: 4.9,
      reviews: 89,
      inStock: true
    },
    {
      id: 3,
      service: "Logo Design - Professional",
      description: "Custom logo design with multiple concepts and revisions",
      image: "/assets/showlogo1.png",
      size: "All formats included",
      quantity: 1,
      price: 499,
      originalPrice: 699,
      discount: 29,
      status: "in-cart",
      estimatedDelivery: "5-7 business days",
      rating: 4.9,
      reviews: 256,
      inStock: true
    },
    {
      id: 4,
      service: "Poster Design - Marketing",
      description: "Eye-catching poster design for marketing campaigns",
      image: "/assets/poster1.png",
      size: "A3 (11.7x16.5 inches)",
      quantity: 1,
      price: 199,
      originalPrice: 299,
      discount: 33,
      status: "in-cart",
      estimatedDelivery: "2-3 business days",
      rating: 4.7,
      reviews: 167,
      inStock: true
    }
  ];

  // Customer reviews data
  const customerReviews = [
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
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 99;
  const total = subtotal + shipping;
  const totalSavings = cartItems.reduce((sum, item) => sum + ((item.originalPrice - item.price) * item.quantity), 0);

  return (
    <main className="min-h-screen bg-transparent">
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
                        alt={item.service}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      {item.discount > 0 && (
                        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                          {item.discount}% OFF
                        </div>
                      )}
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="absolute top-2 right-2 bg-white/80 hover:bg-white hidden sm:block"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 p-4 sm:p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-base sm:text-lg font-semibold text-primary hover:text-primary/80 cursor-pointer">
                            {item.service}
                          </h3>
                          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                          
                          {/* Rating and Reviews */}
                          <div className="mt-2 flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{item.rating}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">({item.reviews} reviews)</span>
                          </div>

                          {/* Size and Stock */}
                          <div className="mt-2 flex items-center gap-4 text-sm">
                            <span className="text-muted-foreground">Size: {item.size}</span>
                            {item.inStock ? (
                              <span className="text-green-600 font-medium">In Stock</span>
                            ) : (
                              <span className="text-red-600 font-medium">Out of Stock</span>
                            )}
                          </div>

                          {/* Price */}
                          <div className="mt-3 flex items-center gap-3">
                            <span className="text-2xl font-bold text-primary">₹{item.price}</span>
                            {item.originalPrice > item.price && (
                              <>
                                <span className="text-lg text-muted-foreground line-through">₹{item.originalPrice}</span>
                                <span className="text-sm text-green-600 font-medium">
                                  Save ₹{item.originalPrice - item.price}
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Quantity and Actions */}
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium">Quantity:</span>
                          <div className="flex items-center border rounded-lg">
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                              <Minus className="h-4 w-4" />
                            </Button>
                            <Input 
                              type="number" 
                              value={item.quantity} 
                              className="w-16 h-8 text-center border-0"
                              min="1"
                            />
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <Share2 className="mr-2 h-4 w-4" />
                            Share
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Remove
                          </Button>
                        </div>
                      </div>

                      {/* Delivery Info */}
                      <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                        <Truck className="h-4 w-4" />
                        <span>Delivery: {item.estimatedDelivery}</span>
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
                      <Button variant="ghost" size="sm">
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
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal ({cartItems.length} items)</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span>₹{shipping}</span>
                  </div>
                  <div className="flex justify-between text-sm text-green-600">
                    <span>You Save</span>
                    <span>₹{totalSavings}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>₹{total}</span>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full" size="lg" asChild>
                  <a href="/checkout">Proceed to Checkout</a>
                </Button>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    You save ₹{totalSavings} on this order
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
