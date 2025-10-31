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
          className="absolute w-20 h-20 bg-amber-400/20 rounded-2xl animate-float"
          style={{ top: '20%', left: '10%' }}
        ></div>
        <div 
          className="absolute w-16 h-16 bg-orange-400/20 rounded-2xl animate-float-reverse"
          style={{ top: '40%', right: '20%' }}
        ></div>
        <div 
          className="absolute w-24 h-24 bg-red-400/20 rounded-2xl animate-float"
          style={{ bottom: '40%', left: '20%' }}
        ></div>
        <div 
          className="absolute w-12 h-12 bg-yellow-400/20 rounded-2xl animate-float-reverse"
          style={{ bottom: '20%', right: '10%' }}
        ></div>
        <div 
          className="absolute w-18 h-18 bg-pink-400/20 rounded-2xl animate-float"
          style={{ top: '60%', left: '50%' }}
        ></div>
        <div 
          className="absolute w-14 h-14 bg-purple-400/20 rounded-2xl animate-float-reverse"
          style={{ bottom: '60%', right: '30%' }}
        ></div>
      </div>
      
      {/* Content with backdrop blur */}
      <div className="relative z-10 backdrop-blur-[1px]">
      {/* Hero Section */}
      <section className="bg-transparent py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 mb-6 animate-fade-in-up">
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
            <Card className="group relative overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 h-full flex flex-col">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <img src="/assets/showlogo1.png" alt="Logo Design" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Logo Design</CardTitle>
                <div className="text-4xl font-bold text-gray-900">₹499</div>
                <CardDescription className="text-gray-600 font-medium">Professional logo design</CardDescription>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                <ul className="space-y-3 mb-6 flex-grow">
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
                  <a href="/services/logo-design">Order Now</a>
                </Button>
              </CardContent>
            </Card>

            {/* Business Cards */}
            <Card className="group relative overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 h-full flex flex-col">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <img src="/assets/buisnesscard1.png" alt="Business Cards" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Business Cards</CardTitle>
                <div className="text-4xl font-bold text-gray-900">₹99-149</div>
                <CardDescription className="text-gray-600 font-medium">Single/Double side design</CardDescription>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
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
                <ul className="space-y-3 mb-6 flex-grow">
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
                  <a href="/services/business-cards">Order Now</a>
                </Button>
              </CardContent>
            </Card>

            {/* Banner Design */}
            <Card className="group relative overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 h-full flex flex-col">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <img src="/assets/flex1.jpg" alt="Banner Design" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Banner Design</CardTitle>
                <div className="text-4xl font-bold text-gray-900">₹199</div>
                <CardDescription className="text-gray-600 font-medium">Flex/Banner per layout</CardDescription>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                <ul className="space-y-3 mb-6 flex-grow">
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
                  <a href="/services/banner-design">Order Now</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Category Services */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4 animate-fade-in-up">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional printing and design services for all your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto items-stretch">
            
            {/* ID Cards */}
            <Card className="group relative overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 h-full flex flex-col">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <img src="/assets/buisnesscard1.png" alt="ID Cards" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">ID Cards</CardTitle>
                <div className="text-4xl font-bold text-gray-900">₹5-35</div>
                <CardDescription className="text-gray-600 font-medium">Fiber plate & normal options</CardDescription>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Fiber Plate: ₹35/- per piece</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Normal: ₹5/- per piece</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Minimum 14 pieces</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Professional quality</span>
                  </li>
                </ul>
                <Button className="w-full text-lg py-3" variant="outline" asChild>
                  <a href="/services/id-card">Order Now</a>
                </Button>
              </CardContent>
            </Card>

            {/* Certificates */}
            <Card className="group relative overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 h-full flex flex-col">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <img src="/assets/poster1.png" alt="Certificates" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Certificates</CardTitle>
                <div className="text-4xl font-bold text-gray-900">₹25-35</div>
                <CardDescription className="text-gray-600 font-medium">Various GSM options</CardDescription>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>200-460 GSM paper</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>₹25-35 per piece</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Professional design</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>High-quality printing</span>
                  </li>
                </ul>
                <Button className="w-full text-lg py-3" variant="outline" asChild>
                  <a href="/services/certificate">Order Now</a>
                </Button>
              </CardContent>
            </Card>

            {/* Visiting Cards */}
            <Card className="group relative overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 h-full flex flex-col">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <img src="/assets/buisnesscard2.png" alt="Visiting Cards" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Visiting Cards</CardTitle>
                <div className="text-4xl font-bold text-gray-900">₹1-4.8</div>
                <CardDescription className="text-gray-600 font-medium">Various paper quality options</CardDescription>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Normal Quality: ₹1/- (Min 500)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Premium: ₹2.8/- (280/360 GSM)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Premium Laminated: ₹3/-</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Velvet Paper: ₹4.8/- (280/360 GSM)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Glossy/Matt: ₹1-1.7/-</span>
                  </li>
                </ul>
                <Button className="w-full text-lg py-3" variant="outline" asChild>
                  <a href="/services/visiting-card">Order Now</a>
                </Button>
              </CardContent>
            </Card>

            {/* Vinyl Printing */}
            <Card className="group relative overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 h-full flex flex-col">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <img src="/assets/flex2.jpg" alt="Vinyl Printing" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Vinyl Printing</CardTitle>
                <div className="text-4xl font-bold text-gray-900">₹35-135</div>
                <CardDescription className="text-gray-600 font-medium">Stickers & sunboard options</CardDescription>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Vinyl Sticker: ₹35/sq ft</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>3mm Sunboard: ₹95/sq ft</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>5mm Sunboard: ₹118/sq ft</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>8mm Sunboard: ₹135/sq ft</span>
                  </li>
                </ul>
                <Button className="w-full text-lg py-3" variant="outline" asChild>
                  <a href="/services/vinyl-printing">Order Now</a>
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
            <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4 animate-fade-in-up">Additional Services</h2>
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
            <Card key={index} className="group relative overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                <CardHeader className="pb-4 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <img 
                      src={
                        service.name.includes("Poster") ? "/assets/poster1.png" :
                        service.name.includes("Brochure") ? "/assets/broucher.png" :
                        service.name.includes("Menu") ? "/assets/poster2.png" :
                        service.name.includes("Social") ? "/assets/poster3.png" :
                        "/assets/buisnesscard2.png"
                      } 
                      alt={service.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.name}</CardTitle>
                  <div className="text-3xl font-bold text-gray-900">{service.price}</div>
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
                    <a href="/requirements">Order Now</a>
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
            <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4 animate-fade-in-up">Premium Packages</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Save more with our comprehensive design packages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Branding Starter Package */}
            <Card className="group relative overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 h-full flex flex-col">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-4 bg-gray-900 text-white shadow-lg">Best Value</Badge>
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <img src="/assets/showlogo1.png" alt="Branding Starter" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Branding Starter</CardTitle>
                <div className="text-4xl font-bold text-gray-900">₹799</div>
                <CardDescription className="text-gray-600 font-medium">Logo + Card + Letterhead</CardDescription>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Professional Logo Design</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Business Card Design (Double Side)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Letterhead Design (A4)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Brand Guidelines</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>All File Formats</span>
                  </li>
                </ul>
                <Button className="w-full text-lg py-3" asChild>
                  <a href="/requirements">Order Now</a>
                </Button>
              </CardContent>
            </Card>

            {/* Festival Graphics Package */}
            <Card className="group relative overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 h-full flex flex-col">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-4 bg-gray-900 text-white shadow-lg">Festival Special</Badge>
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <img src="/assets/poster1.png" alt="Festival Graphics" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Festival Graphics</CardTitle>
                <div className="text-4xl font-bold text-gray-900">₹999</div>
                <CardDescription className="text-gray-600 font-medium">10 Creatives Pack</CardDescription>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>10 Festival Creative Designs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>All Social Media Platforms</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Print Ready Formats</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>High Resolution Files</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>3-5 Days Delivery</span>
                  </li>
                </ul>
                <Button className="w-full text-lg py-3" variant="outline" asChild>
                  <a href="/requirements">Order Now</a>
                </Button>
              </CardContent>
            </Card>

            {/* Company Festive Pack */}
            <Card className="group relative overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 h-full flex flex-col">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-4 bg-gray-900 text-white shadow-lg">Fast Delivery</Badge>
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <img src="/assets/poster2.png" alt="Company Festive Pack" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Company Festive Pack</CardTitle>
                <div className="text-4xl font-bold text-gray-900">₹1,399</div>
                <CardDescription className="text-gray-600 font-medium">22+1 Festival Designs</CardDescription>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>22+1 Festival Designs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>1-Day Delivery</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>All File Formats</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Print & Digital Ready</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Unlimited Revisions</span>
                  </li>
                </ul>
                <Button className="w-full text-lg py-3" asChild>
                  <a href="/requirements">Order Now</a>
                </Button>
              </CardContent>
            </Card>

            {/* Business Launch Kit */}
            <Card className="group relative overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 h-full flex flex-col">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-4 bg-gray-900 text-white shadow-lg">Complete Solution</Badge>
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <img src="/assets/broucher.png" alt="Business Launch Kit" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Business Launch Kit</CardTitle>
                <div className="text-4xl font-bold text-gray-900">₹1,999</div>
                <CardDescription className="text-gray-600 font-medium">Logo + Brochure + Flex + 5 Social Media</CardDescription>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Professional Logo Design</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Tri-fold Brochure Design</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Flex Banner Design</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>5 Social Media Posts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Complete Branding Package</span>
                  </li>
                </ul>
                <Button className="w-full text-lg py-3" variant="outline" asChild>
                  <a href="/requirements">Order Now</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Premium Packages */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4 animate-fade-in-up">More Premium Packages</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Additional comprehensive packages for your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Monthly Social Media Pack */}
            <Card className="group relative overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 h-full flex flex-col">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-4 bg-gray-900 text-white shadow-lg">Most Popular</Badge>
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <img src="/assets/poster3.png" alt="Monthly Social Media Pack" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Monthly Social Media Pack</CardTitle>
                <div className="text-4xl font-bold text-gray-900">₹2,999</div>
                <CardDescription className="text-gray-600 font-medium">30 Creatives per month</CardDescription>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                <ul className="space-y-3 mb-6 flex-grow">
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
            <Card className="group relative overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 h-full flex flex-col">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <img src="/assets/resumebanner.png" alt="Resume Design" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Resume Design</CardTitle>
                <div className="text-4xl font-bold text-gray-900">₹99</div>
                <CardDescription className="text-gray-600 font-medium">Professional resume design</CardDescription>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                <ul className="space-y-3 mb-6 flex-grow">
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
                  <a href="/requirements">Order Now</a>
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
            <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4 animate-fade-in-up">Printing Services</h2>
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
                name: "Visiting Cards", 
                price: "₹1-4.8/piece", 
                icon: Users, 
                color: "blue",
                description: "Various paper quality options"
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
            <Card key={index} className="group relative overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <img 
                      src={
                        service.name.includes("Visiting") ? "/assets/buisnesscard1.png" :
                        service.name.includes("Letterhead") ? "/assets/buisnesscard2.png" :
                        service.name.includes("Flex") ? "/assets/flex1.jpg" :
                        service.name.includes("Vinyl") ? "/assets/flex2.jpg" :
                        service.name.includes("Pamphlets") ? "/assets/broucher.png" :
                        service.name.includes("Brochure") ? "/assets/broucher2.png" :
                        service.name.includes("Certificate") ? "/assets/poster1.png" :
                        service.name.includes("Visiting Cards") ? "/assets/buisnesscard2.png" :
                        service.name.includes("Poster") ? "/assets/poster2.png" :
                        service.name.includes("Mug") ? "/assets/poster3.png" :
                        service.name.includes("T-Shirt") ? "/assets/flex3.jpg" :
                        service.name.includes("Iron") ? "/assets/poster4.png" :
                        "/assets/buisnesscard1.png"
                      } 
                      alt={service.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.name}</CardTitle>
                  <div className="text-3xl font-bold text-gray-900">{service.price}</div>
                  <CardDescription className="text-gray-600 font-medium">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline" asChild>
                    <a href="/requirements">Order Now</a>
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
            <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4 animate-fade-in-up">Album Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Premium wedding and event albums with professional finishing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="group relative overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 h-full flex flex-col">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <img src="/assets/broucher3.png" alt="Canvera Album Design" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Canvera Album Design</CardTitle>
                <div className="text-4xl font-bold text-gray-900">₹50/sheet</div>
                <CardDescription className="text-gray-600 font-medium">Wedding album design per sheet</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Professional layout</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">High resolution</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Print ready</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">1-2 days delivery</span>
                  </li>
                </ul>
                <Button className="w-full text-lg py-3" asChild>
                  <a href="/requirements">Order Now</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 h-full flex flex-col">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <img src="/assets/broucher2.png" alt="Canvera Album Complete" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Canvera Album (40-50 Pages)</CardTitle>
                <div className="text-4xl font-bold text-gray-900">₹3000-9000</div>
                <CardDescription className="text-gray-600 font-medium">Complete wedding album</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">40-50 pages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Premium quality</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Professional binding</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">5-7 days delivery</span>
                  </li>
                </ul>
                <Button className="w-full text-lg py-3" asChild>
                  <a href="/requirements">Order Now</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4 animate-fade-in-up">Ready to Start Your Project?</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Get professional design services at unbeatable prices. No hidden fees, no surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg" asChild>
              <a href="/requirements">Order Now</a>
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
