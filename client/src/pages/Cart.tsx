import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Package, Truck, CheckCircle, Clock, Star, Download, Eye, Trash2, Plus, Minus } from "lucide-react";

export default function CartPage() {
  // Mock data for demonstration
  const cartItems = [
    {
      id: 1,
      service: "Flex Printing - Frontlit Banner",
      description: "High-quality frontlit flex banner for outdoor advertising",
      image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=400&q=60",
      size: "3x6 feet",
      quantity: 2,
      price: 899,
      status: "pending",
      estimatedDelivery: "3-5 business days"
    },
    {
      id: 2,
      service: "Vinyl Printing - Stickers",
      description: "Weather-resistant vinyl stickers for branding",
      image: "https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?auto=format&fit=crop&w=400&q=60",
      size: "Custom sizes",
      quantity: 1,
      price: 299,
      status: "processing",
      estimatedDelivery: "2-3 business days"
    },
    {
      id: 3,
      service: "Business Cards - Premium",
      description: "Double-sided premium business cards with UV coating",
      image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=400&q=60",
      size: "Standard (3.5x2 inches)",
      quantity: 1,
      price: 149,
      status: "completed",
      estimatedDelivery: "Delivered"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "processing": return "bg-blue-100 text-blue-800";
      case "completed": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending": return <Clock className="h-4 w-4" />;
      case "processing": return <Package className="h-4 w-4" />;
      case "completed": return <CheckCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 99;
  const total = subtotal + shipping;

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="flex items-center gap-3">
            <ShoppingCart className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold text-primary">Your Orders</h1>
              <p className="text-muted-foreground">Track and manage your printing orders</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Orders List */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-primary">Order History</h2>
              <Badge variant="outline" className="text-sm">
                {cartItems.length} {cartItems.length === 1 ? 'Order' : 'Orders'}
              </Badge>
            </div>

            <div className="space-y-6">
              {cartItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="flex flex-col sm:flex-row">
                    {/* Product Image */}
                    <div className="aspect-square w-full sm:w-48">
                      <img
                        src={item.image}
                        alt={item.service}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-primary">{item.service}</h3>
                          <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                          <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                            <span>Size: {item.size}</span>
                            <span>Qty: {item.quantity}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">₹{item.price}</div>
                          <div className="mt-1 flex items-center gap-2">
                            <Badge className={getStatusColor(item.status)}>
                              {getStatusIcon(item.status)}
                              <span className="ml-1 capitalize">{item.status}</span>
                            </Badge>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-4 flex flex-wrap items-center gap-3">
                        <Button variant="outline" size="sm" asChild>
                          <a href={`/services/${item.service.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </a>
                        </Button>
                        {item.status === "completed" && (
                          <Button variant="outline" size="sm" asChild>
                            <a href="/contact">
                              <Download className="mr-2 h-4 w-4" />
                              Download Files
                            </a>
                          </Button>
                        )}
                        {item.status === "pending" && (
                          <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700" asChild>
                            <a href="/contact">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Cancel Order
                            </a>
                          </Button>
                        )}
                        <div className="text-sm text-muted-foreground">
                          <Truck className="mr-1 inline h-4 w-4" />
                          {item.estimatedDelivery}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Order Summary & Quick Actions */}
          <div className="space-y-6">
            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span>₹{shipping}</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>₹{total}</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full" size="lg" asChild>
                  <a href="/services">Place New Order</a>
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Manage your orders and get support</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="/contact">
                    <Truck className="mr-2 h-4 w-4" />
                    Track All Orders
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="/contact">
                    <Download className="mr-2 h-4 w-4" />
                    Download Invoices
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="/contact">
                    <Star className="mr-2 h-4 w-4" />
                    Rate Services
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Support */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
                <CardDescription>Our team is here to assist you</CardDescription>
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
                    <span className="mr-2">💬</span>
                    Live Chat
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="mailto:support@incuva.com">
                    <span className="mr-2">📧</span>
                    Email Support
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Orders Stats */}
        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-semibold text-primary">Order Statistics</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-blue-100 p-3">
                    <Package className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Orders</p>
                    <p className="text-2xl font-bold text-primary">12</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-100 p-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Completed</p>
                    <p className="text-2xl font-bold text-primary">8</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-yellow-100 p-3">
                    <Clock className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">In Progress</p>
                    <p className="text-2xl font-bold text-primary">3</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-purple-100 p-3">
                    <Star className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Spent</p>
                    <p className="text-2xl font-bold text-primary">₹12,450</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
