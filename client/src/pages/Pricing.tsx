import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Award, FileText, Palette, Camera, Share2, Users, Clock, Zap } from "lucide-react";
import { useState, useEffect } from "react";

export default function Pricing() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of background images from assets
  const backgroundImages = [
    "/assets/buisnesscard1.png",
    "/assets/flex1.jpg",
    "/assets/flex2.jpg",
    "/assets/flex3.jpg",
    "/assets/poster1.png",
    "/assets/poster2.png",
    "/assets/poster3.png",
    "/assets/showlogo1.png",
    "/assets/broucher.png",
    "/assets/broucher2.png",
    "/assets/broucher3.png",
    "/assets/resumebanner.png"
  ];

  // Change background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <main className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black/5"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out animate-bg-fade"
          style={{
            backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
            transform: 'scale(1.05)',
            opacity: 0.3
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/3 via-orange-500/3 to-red-500/3"></div>
        
        {/* Floating animated shapes */}
        <div 
          className="absolute w-20 h-20 bg-amber-400/20 rounded-full animate-float"
          style={{ top: '20%', left: '10%' }}
        ></div>
        <div 
          className="absolute w-16 h-16 bg-orange-400/20 rounded-full animate-float-reverse"
          style={{ top: '40%', right: '20%' }}
        ></div>
        <div 
          className="absolute w-24 h-24 bg-red-400/20 rounded-full animate-float"
          style={{ bottom: '40%', left: '20%' }}
        ></div>
        <div 
          className="absolute w-12 h-12 bg-yellow-400/20 rounded-full animate-float-reverse"
          style={{ bottom: '20%', right: '10%' }}
        ></div>
        <div 
          className="absolute w-18 h-18 bg-pink-400/20 rounded-full animate-float"
          style={{ top: '60%', left: '50%' }}
        ></div>
        <div 
          className="absolute w-14 h-14 bg-purple-400/20 rounded-full animate-float-reverse"
          style={{ bottom: '60%', right: '30%' }}
        ></div>
      </div>
      
      {/* Content with backdrop blur */}
      <div className="relative z-10 backdrop-blur-[1px]">
      {/* Hero Section */}
      <section className="bg-transparent py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional design services at unbeatable prices. No hidden fees, no surprises.
            </p>
            <div className="flex items-center justify-center gap-8">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-amber-500 fill-current" />
                <span className="text-gray-700 font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-amber-500" />
                <span className="text-gray-700 font-medium">500+ Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pricing Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Logo Design */}
            <Card className="shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-105">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-2xl">Logo Design</CardTitle>
                <div className="text-4xl font-bold text-primary">₹499</div>
                <CardDescription>Professional logo design</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Multiple design concepts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Unlimited revisions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>All file formats (PNG, JPG, PDF, AI)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>3-5 days delivery</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Commercial usage rights</span>
                  </li>
                </ul>
                <Button className="w-full text-lg py-3" variant="outline" asChild>
                  <a href="/contact">Order Now</a>
                </Button>
              </CardContent>
            </Card>

            {/* Business Cards */}
            <Card className="shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-105">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Business Cards</CardTitle>
                <div className="text-4xl font-bold text-primary">₹99-149</div>
                <CardDescription>Single/Double side design</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Single Side</span>
                    <span className="font-bold text-primary">₹99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Double Side</span>
                    <span className="font-bold text-primary">₹149</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Print ready files</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Multiple design options</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Standard size (3.5" x 2")</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>1-2 days delivery</span>
                  </li>
                </ul>
                <Button className="w-full text-lg py-3" variant="outline" asChild>
                  <a href="/contact">Order Now</a>
                </Button>
              </CardContent>
            </Card>

            {/* Banner Design */}
            <Card className="shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-105">
                  <Palette className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Banner Design</CardTitle>
                <div className="text-4xl font-bold text-primary">₹199</div>
                <CardDescription>Flex/Banner per layout</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Custom sizes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>High resolution (300 DPI)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Print ready files</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>1-2 days delivery</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Multiple formats</span>
                  </li>
                </ul>
                <Button className="w-full text-lg py-3" variant="outline" asChild>
                  <a href="/contact">Order Now</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete design solutions for all your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                name: "Poster Design (A3)", 
                price: "₹149", 
                icon: FileText, 
                color: "purple",
                features: ["A3 Size", "High Resolution", "Print Ready", "1-2 Days"]
              },
              { 
                name: "Brochure Design", 
                price: "₹399", 
                icon: Share2, 
                color: "indigo",
                features: ["Tri-fold", "Both Sides", "Print Ready", "3-5 Days"]
              },
              { 
                name: "Menu Design", 
                price: "₹499", 
                icon: FileText, 
                color: "pink",
                features: ["Restaurant/Cloud", "Custom Layout", "Print Ready", "3-5 Days"]
              },
              { 
                name: "Social Media Post", 
                price: "₹149", 
                icon: Share2, 
                color: "teal",
                features: ["Per Creative", "All Platforms", "High Quality", "1 Day"]
              },
            ].map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 bg-${service.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <service.icon className={`h-6 w-6 text-${service.color}-600`} />
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{service.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant="outline" asChild>
                    <a href="/contact">Order Now</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Packages */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Packages</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Save more with our comprehensive design packages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Monthly Social Media Pack */}
            <Card className="shadow-sm hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-4" variant="secondary">Most Popular</Badge>
                <CardTitle className="text-2xl">Monthly Social Media Pack</CardTitle>
                <div className="text-4xl font-bold text-primary">₹2,999</div>
                <CardDescription>30 Creatives per month</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>30 social media creatives</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>All platforms (Instagram, Facebook, LinkedIn)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Consistent branding</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Monthly content calendar</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Unlimited revisions</span>
                  </li>
                </ul>
                <Button className="w-full text-lg py-3" variant="outline">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Resume Design */}
            <Card className="shadow-sm hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Resume Design</CardTitle>
                <div className="text-4xl font-bold text-primary">₹99</div>
                <CardDescription>Professional resume design</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Professional layout</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>ATS-friendly format</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Multiple file formats</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>1-2 days delivery</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Unlimited revisions</span>
                  </li>
                </ul>
                <Button className="w-full text-lg py-3" variant="outline" asChild>
                  <a href="/contact">Order Now</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Printing Services */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Printing Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              High-quality printing services for all your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: "Visiting Cards (300 GSM, Matt)", 
                price: "₹299/100", 
                icon: FileText, 
                color: "blue",
                description: "High-quality business cards"
              },
              { 
                name: "Letterhead (A4, 100 GSM)", 
                price: "₹399/100", 
                icon: FileText, 
                color: "green",
                description: "Professional letterheads"
              },
              { 
                name: "Flex Banner Printing (13oz)", 
                price: "₹15-20/sq ft", 
                icon: Palette, 
                color: "orange",
                description: "Durable outdoor banners"
              },
              { 
                name: "Vinyl Printing", 
                price: "₹25-35/sq ft", 
                icon: Share2, 
                color: "purple",
                description: "Stickers and signage"
              },
              { 
                name: "Vinyl with Sunboard (3mm)", 
                price: "₹100-135/sq ft", 
                icon: FileText, 
                color: "indigo",
                description: "Rigid vinyl signage"
              },
              { 
                name: "Pamphlets (A5, 130 GSM)", 
                price: "₹899/1000", 
                icon: FileText, 
                color: "pink",
                description: "Color pamphlets"
              },
              { 
                name: "Brochure Print (Tri-fold)", 
                price: "₹1499/500", 
                icon: FileText, 
                color: "teal",
                description: "Professional brochures"
              },
              { 
                name: "Certificate Printing", 
                price: "₹15-25/piece", 
                icon: Award, 
                color: "amber",
                description: "Professional certificates"
              },
              { 
                name: "Poster (Glossy A3)", 
                price: "₹20-30/piece", 
                icon: Palette, 
                color: "red",
                description: "High-quality posters"
              },
              { 
                name: "Mug Print (sublimation)", 
                price: "₹199/piece", 
                icon: Camera, 
                color: "cyan",
                description: "Custom mug printing"
              },
              { 
                name: "T-Shirt Print", 
                price: "₹299-499/piece", 
                icon: Share2, 
                color: "lime",
                description: "Custom t-shirt printing"
              },
              { 
                name: "Iron Structure For Banner", 
                price: "₹33-55/sq ft", 
                icon: FileText, 
                color: "slate",
                description: "Banner support structures"
              },
            ].map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className={`w-16 h-16 bg-${service.color}-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-105`}>
                    <service.icon className={`h-8 w-8 text-${service.color}-600`} />
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <div className="text-3xl font-bold text-gray-900">{service.price}</div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline" asChild>
                    <a href="/contact">Order Now</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Album Services */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Album Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Premium wedding and event albums with professional finishing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-pink-200 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-8 w-8 text-pink-600" />
                </div>
                <CardTitle className="text-2xl">Canvera Album Design</CardTitle>
                <div className="text-4xl font-bold text-pink-600">₹50/sheet</div>
                <CardDescription>Wedding album design per sheet</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Professional layout</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">High resolution</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Print ready</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">1-2 days delivery</span>
                  </li>
                </ul>
                <Button className="w-full bg-pink-600 hover:bg-pink-700 text-lg py-3">
                  Order Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">Canvera Album (40-50 Pages)</CardTitle>
                <div className="text-4xl font-bold text-purple-600">₹3000-9000</div>
                <CardDescription>Complete wedding album</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">40-50 pages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Premium quality</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Professional binding</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">5-7 days delivery</span>
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-3">
                  Order Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Get professional design services at unbeatable prices. No hidden fees, no surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
              Get Your Quote
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-amber-600">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
      </div>
    </main>
  );
}
