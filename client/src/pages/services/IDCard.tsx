import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, CreditCard, ShoppingCart, ArrowRight, Star, Clock, Users, Heart, Zap, Shield, Award, FileText } from "lucide-react";

export default function IDCardPage() {
  const [selectedType, setSelectedType] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");

  const idCardTypes = [
    { 
      name: "Standard ID Card", 
      price: "₹49", 
      originalPrice: "₹79",
      description: "Professional ID card design with standard features",
      features: ["Professional Design", "Print Ready Files", "Standard Size (3.375\" x 2.125\")", "1-2 Days Delivery", "PNG & JPG Files", "High Resolution"],
      popular: false,
      discount: "38% OFF"
    },
    { 
      name: "Premium ID Card", 
      price: "₹79", 
      originalPrice: "₹129",
      description: "Premium ID card with advanced security features",
      features: ["Premium Design", "Security Features", "Print Ready Files", "Standard Size (3.375\" x 2.125\")", "1-2 Days Delivery", "Multiple Formats", "Holographic Elements"],
      popular: true,
      discount: "39% OFF"
    },
    { 
      name: "Corporate ID Card", 
      price: "₹99", 
      originalPrice: "₹179",
      description: "Corporate ID card with company branding",
      features: ["Corporate Design", "Company Branding", "Print Ready Files", "Standard Size (3.375\" x 2.125\")", "1-2 Days Delivery", "Multiple Formats", "Custom Layout", "QR Code Support"],
      popular: false,
      discount: "45% OFF"
    }
  ];

  const quantityOptions = [
    { value: "50", label: "50 pieces" },
    { value: "100", label: "100 pieces" },
    { value: "250", label: "250 pieces" },
    { value: "500", label: "500 pieces" },
    { value: "1000", label: "1000 pieces" }
  ];

  const materialOptions = [
    { value: "pvc", label: "PVC (Durable)" },
    { value: "plastic", label: "Plastic (Standard)" },
    { value: "paper", label: "Paper (Economy)" },
    { value: "laminated", label: "Laminated Paper" },
    { value: "magnetic", label: "Magnetic Stripe" }
  ];

  const selectedTypeData = idCardTypes.find(type => type.name === selectedType);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Compact & Beautiful */}
      <section className="py-12 bg-gradient-to-br from-secondary/20 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Zap className="h-4 w-4" />
                <span>Professional ID Cards</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
                Secure & Professional ID Cards
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Professional ID card designs with security features, company branding, and premium materials for your organization.
              </p>
              
              {/* Trust Indicators - Compact */}
              <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
                <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full">
                  <Star className="h-4 w-4 text-amber-500 fill-current" />
                  <span className="text-sm font-semibold text-card-foreground">4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-card-foreground">500+ Cards</span>
                </div>
                <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-card-foreground">1-2 Days</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Design Your ID Card
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-full" onClick={() => window.location.href = "/our-works"}>
                  <ArrowRight className="mr-2 h-4 w-4" />
                  View Samples
                </Button>
              </div>
            </div>

            {/* Feature Cards - Compact Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-card rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground text-sm mb-1">Security Features</h3>
                <p className="text-xs text-muted-foreground">Advanced security</p>
              </div>
              <div className="bg-card rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                  <CreditCard className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-card-foreground text-sm mb-1">Professional Design</h3>
                <p className="text-xs text-muted-foreground">Clean layouts</p>
              </div>
              <div className="bg-card rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                  <FileText className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="font-semibold text-card-foreground text-sm mb-1">Standard Size</h3>
                <p className="text-xs text-muted-foreground">3.375" x 2.125"</p>
              </div>
              <div className="bg-card rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                  <Clock className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-card-foreground text-sm mb-1">Fast Delivery</h3>
                <p className="text-xs text-muted-foreground">1-2 days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ID Card Types - Compact & Beautiful */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Choose Your ID Card Type
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional ID card designs with security features and company branding for your organization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {idCardTypes.map((type, index) => (
                <Card 
                  key={index} 
                  className={`group relative overflow-hidden bg-card transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 rounded-3xl shadow-lg ${
                    type.popular 
                      ? 'shadow-xl scale-105' 
                      : ''
                  }`}
                >
                  
                  {type.discount && (
                    <div className="absolute top-3 right-3 z-10">
                      <div className="bg-destructive text-destructive-foreground px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                        {type.discount}
                      </div>
                    </div>
                  )}

                  <CardHeader className="text-center pt-6 pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl overflow-hidden shadow-md bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                      <img src={`/assets/buisnesscard${index + 1}.png`} alt={type.name} className="w-10 h-10 object-cover" />
                    </div>
                    <CardTitle className="text-xl font-bold text-card-foreground mb-2">{type.name}</CardTitle>
                    <div className="space-y-1 mb-3">
                      <div className="text-3xl font-bold text-card-foreground">{type.price}</div>
                      {type.originalPrice && (
                        <div className="text-sm text-muted-foreground line-through">{type.originalPrice}</div>
                      )}
                    </div>
                    <CardDescription className="text-sm text-muted-foreground">{type.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="px-4 pb-4">
                    <ul className="space-y-2 mb-6">
                      {type.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-card-foreground">{feature}</span>
                        </li>
                      ))}
                      {type.features.length > 3 && (
                        <li className="text-xs text-muted-foreground">+{type.features.length - 3} more features</li>
                      )}
                    </ul>
                    
                    <div className="space-y-3">
                      <Button 
                        className={`w-full py-3 font-semibold transition-all duration-300 rounded-full ${
                          type.popular 
                            ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl' 
                            : 'bg-foreground hover:bg-foreground/90 text-background'
                        }`}
                        onClick={() => window.location.href = "/requirements"}
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Order Now
                      </Button>
                      
                      <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                        <Heart className="h-3 w-3" />
                        <span>Add to favorites</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customization Options */}
      {selectedType && (
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl sm:text-3xl text-center">Customize Your {selectedType}</CardTitle>
                  <CardDescription className="text-center">
                    Choose quantity and material for your ID cards
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Quantity Selection */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-primary" />
                      Quantity
                    </h3>
                    <div>
                      <Select value={selectedQuantity} onValueChange={setSelectedQuantity}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select quantity" />
                        </SelectTrigger>
                        <SelectContent>
                          {quantityOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Material Selection */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      Material Type
                    </h3>
                    <div>
                      <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select material" />
                        </SelectTrigger>
                        <SelectContent>
                          {materialOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Order Summary */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Card Type:</span>
                        <span className="font-semibold">{selectedType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Base Price:</span>
                        <span className="font-semibold">{selectedTypeData?.price}</span>
                      </div>
                      {selectedQuantity && (
                        <div className="flex justify-between">
                          <span>Quantity:</span>
                          <span className="font-semibold">{quantityOptions.find(opt => opt.value === selectedQuantity)?.label}</span>
                        </div>
                      )}
                      {selectedMaterial && (
                        <div className="flex justify-between">
                          <span>Material:</span>
                          <span className="font-semibold">{materialOptions.find(opt => opt.value === selectedMaterial)?.label}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
                    <Button 
                      onClick={() => window.location.href = "/requirements"}
                      className="flex-1 bg-primary hover:bg-primary/90 text-white"
                      size="lg"
                    >
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      Order Now
                    </Button>
                    
                    <Button 
                      variant="outline"
                      onClick={() => window.location.href = "/contact"}
                      className="flex-1"
                      size="lg"
                    >
                      <ArrowRight className="mr-2 h-5 w-5" />
                      Contact Us
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Features Section - Compact */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Why Choose Our ID Cards?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional ID card designs with security features and company branding for your organization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Security Features</h3>
                <p className="text-sm text-muted-foreground">Advanced security features for protection.</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <CreditCard className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Professional Design</h3>
                <p className="text-sm text-muted-foreground">Clean, professional designs for your organization.</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">Quick turnaround times when you need them.</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Award className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Premium Quality</h3>
                <p className="text-sm text-muted-foreground">High-quality materials and printing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Compact */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Create Your Professional ID Cards?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Join hundreds of organizations who trust us with their ID card designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 px-6 py-3 rounded-full font-semibold">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Design Your ID Cards Now
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-6 py-3 rounded-full font-semibold" onClick={() => window.location.href = "/our-works"}>
                <ArrowRight className="mr-2 h-4 w-4" />
                View Our Samples
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}