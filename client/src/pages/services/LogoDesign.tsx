import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Palette, ShoppingCart, ArrowRight, Star, Clock, Users, Heart, Zap, Shield } from "lucide-react";

export default function LogoDesignPage() {
  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedRevisions, setSelectedRevisions] = useState("");
  const [selectedDelivery, setSelectedDelivery] = useState("");

  const logoPackages = [
    { 
      name: "Basic Logo", 
      price: "₹499", 
      originalPrice: "₹799",
      description: "Simple logo design with 2 concepts",
      features: ["2 Logo Concepts", "2 Revisions", "PNG & JPG Files", "3-5 Days Delivery", "Commercial Usage Rights"],
      popular: false,
      discount: "37% OFF"
    },
    { 
      name: "Premium Logo", 
      price: "₹799", 
      originalPrice: "₹1,299",
      description: "Professional logo with multiple concepts",
      features: ["5 Logo Concepts", "Unlimited Revisions", "All File Formats", "2-3 Days Delivery", "Commercial Usage Rights", "Brand Guidelines"],
      popular: true,
      discount: "38% OFF"
    },
    { 
      name: "Complete Branding", 
      price: "₹1,299", 
      originalPrice: "₹1,999",
      description: "Full branding package with logo and guidelines",
      features: ["5 Logo Concepts", "Unlimited Revisions", "All File Formats", "1-2 Days Delivery", "Commercial Usage Rights", "Brand Guidelines", "Business Card Design", "Letterhead Design"],
      popular: false,
      discount: "35% OFF"
    }
  ];

  const revisionOptions = [
    { value: "2", label: "2 Revisions" },
    { value: "5", label: "5 Revisions" },
    { value: "unlimited", label: "Unlimited Revisions" }
  ];

  const deliveryOptions = [
    { value: "1", label: "1 Day (Rush)" },
    { value: "2", label: "2-3 Days (Standard)" },
    { value: "5", label: "3-5 Days (Normal)" }
  ];

  const selectedPackageData = logoPackages.find(pkg => pkg.name === selectedPackage);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Compact & Beautiful */}
      <section className="py-12 bg-gradient-to-br from-secondary/20 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Zap className="h-4 w-4" />
                <span>Professional Logo Design</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
                Create Your Perfect Brand Identity
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Professional logo designs that make your brand stand out with unlimited revisions and fast delivery.
              </p>
              
              {/* Trust Indicators - Compact */}
              <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
                <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full">
                  <Star className="h-4 w-4 text-amber-500 fill-current" />
                  <span className="text-sm font-semibold text-card-foreground">4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-card-foreground">500+ Logos</span>
                </div>
                <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-card-foreground">Fast Delivery</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Start Your Logo
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-full" onClick={() => window.location.href = "/our-works"}>
                  <ArrowRight className="mr-2 h-4 w-4" />
                  View Portfolio
                </Button>
              </div>
            </div>

            {/* Feature Cards - Compact Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-card rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                  <Palette className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-card-foreground text-sm mb-1">Creative Concepts</h3>
                <p className="text-xs text-muted-foreground">Multiple options</p>
              </div>
              <div className="bg-card rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                  <Shield className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="font-semibold text-card-foreground text-sm mb-1">Quality Guarantee</h3>
                <p className="text-xs text-muted-foreground">100% satisfaction</p>
              </div>
              <div className="bg-card rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground text-sm mb-1">Professional</h3>
                <p className="text-xs text-muted-foreground">Expert designers</p>
              </div>
              <div className="bg-card rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                  <Clock className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-card-foreground text-sm mb-1">Fast Delivery</h3>
                <p className="text-xs text-muted-foreground">1-3 days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Packages - Compact & Beautiful */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Choose Your Logo Package
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional logo design packages with unlimited revisions and commercial usage rights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {logoPackages.map((pkg, index) => (
                <Card 
                  key={index} 
                  className={`group relative overflow-hidden bg-card transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 rounded-3xl shadow-lg ${
                    pkg.popular 
                      ? 'shadow-xl scale-105' 
                      : ''
                  }`}
                >
                  
                  {pkg.discount && (
                    <div className="absolute top-3 right-3 z-10">
                      <div className="bg-destructive text-destructive-foreground px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                        {pkg.discount}
                      </div>
                    </div>
                  )}

                  <CardHeader className="text-center pt-6 pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl overflow-hidden shadow-md bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                      <img src={`/assets/showlogo${index + 1}.png`} alt={pkg.name} className="w-10 h-10 object-cover" />
                    </div>
                    <CardTitle className="text-xl font-bold text-card-foreground mb-2">{pkg.name}</CardTitle>
                    <div className="space-y-1 mb-3">
                      <div className="text-3xl font-bold text-card-foreground">{pkg.price}</div>
                      {pkg.originalPrice && (
                        <div className="text-sm text-muted-foreground line-through">{pkg.originalPrice}</div>
                      )}
                    </div>
                    <CardDescription className="text-sm text-muted-foreground">{pkg.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="px-4 pb-4">
                    <ul className="space-y-2 mb-6">
                      {pkg.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-card-foreground">{feature}</span>
                        </li>
                      ))}
                      {pkg.features.length > 3 && (
                        <li className="text-xs text-muted-foreground">+{pkg.features.length - 3} more features</li>
                      )}
                    </ul>
                    
                    <div className="space-y-3">
                      <Button 
                        className={`w-full py-3 font-semibold transition-all duration-300 rounded-full ${
                          pkg.popular 
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
      {selectedPackage && (
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl sm:text-3xl text-center">Customize Your {selectedPackage}</CardTitle>
                  <CardDescription className="text-center">
                    Fine-tune your logo package with additional options
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Revision Options */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      Revision Options
                    </h3>
                    <div>
                      <Select value={selectedRevisions} onValueChange={setSelectedRevisions}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select revision option" />
                        </SelectTrigger>
                        <SelectContent>
                          {revisionOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Delivery Options */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      Delivery Timeline
                    </h3>
                    <div>
                      <Select value={selectedDelivery} onValueChange={setSelectedDelivery}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select delivery timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          {deliveryOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Package Summary */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Package Summary</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Package:</span>
                        <span className="font-semibold">{selectedPackage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Price:</span>
                        <span className="font-semibold">{selectedPackageData?.price}</span>
                      </div>
                      {selectedRevisions && (
                        <div className="flex justify-between">
                          <span>Revisions:</span>
                          <span className="font-semibold">{revisionOptions.find(opt => opt.value === selectedRevisions)?.label}</span>
                        </div>
                      )}
                      {selectedDelivery && (
                        <div className="flex justify-between">
                          <span>Delivery:</span>
                          <span className="font-semibold">{deliveryOptions.find(opt => opt.value === selectedDelivery)?.label}</span>
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
                Why Choose Our Logo Design?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional logo design services that create lasting impressions for your brand.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Professional Quality</h3>
                <p className="text-sm text-muted-foreground">High-quality designs by experienced designers.</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Palette className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Multiple Concepts</h3>
                <p className="text-sm text-muted-foreground">Multiple design concepts to choose from.</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">Quick turnaround without compromising quality.</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Shield className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Satisfaction Guarantee</h3>
                <p className="text-sm text-muted-foreground">100% satisfaction with unlimited revisions.</p>
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
              Ready to Create Your Perfect Logo?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Join thousands of satisfied customers who trust us with their brand identity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 px-6 py-3 rounded-full font-semibold">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Start Your Logo Now
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-6 py-3 rounded-full font-semibold" onClick={() => window.location.href = "/our-works"}>
                <ArrowRight className="mr-2 h-4 w-4" />
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}