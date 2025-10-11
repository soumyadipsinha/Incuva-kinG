import { useMemo, useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Award, FileText, Palette, Camera, Share2, Users, Clock, Zap, Shield, Heart, Search } from "lucide-react";

export default function ServicesPage() {
  const [query, setQuery] = useState("");
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

  // Generate random positions for floating shapes
  const getRandomPosition = () => ({
    top: Math.random() * 80 + 10, // 10% to 90%
    left: Math.random() * 80 + 10, // 10% to 90%
  });
  
  const categories: Array<{ 
    id: string; 
    title: string; 
    items: string[]; 
    blurb: string;
    price?: string;
    icon: any;
    color: string;
  }> = [
    {
      id: "design-services",
      title: "Design Services",
      blurb: "Professional design services for logos, business cards, banners, and more.",
      price: "₹99 - ₹499",
      icon: Award,
      color: "amber",
      items: ["Logo Design - ₹499", "Business Card Design (Single) - ₹99", "Business Card Design (Double) - ₹149", "Poster Design (A3) - ₹149", "Flex/Banner Design - ₹199", "Brochure Design (Tri-fold) - ₹399", "Menu Design - ₹499", "Social Media Post - ₹149", "Resume Design - ₹99", "Catalogue Design - ₹299", "Canvera Album Design - ₹50/sheet"]
    },
    {
      id: "printing-services",
      title: "Printing Services",
      blurb: "High-quality printing services for all your business needs.",
      price: "₹15 - ₹9000",
      icon: FileText,
      color: "blue",
      items: ["Visiting Cards (300 GSM, Matt) - ₹299/100", "Letterhead (A4, 100 GSM) - ₹399/100", "Flex Banner Printing (13oz) - ₹15-20/sq ft", "Vinyl Printing - ₹25-35/sq ft", "Vinyl with Sunboard (3mm) - ₹100-135/sq ft", "Pamphlets (A5, 130 GSM) - ₹899/1000", "Brochure Print (Tri-fold, 170 GSM) - ₹1499/500", "Certificate Printing - ₹15-25/piece", "Poster (Glossy A3) - ₹20-30/piece", "Mug Print (sublimation) - ₹199/piece", "T-Shirt Print - ₹299-499/piece", "Iron Structure For Banner - ₹33-55/sq ft"]
    },
    {
      id: "album-services",
      title: "Album Services",
      blurb: "Premium wedding and event albums with professional finishing.",
      price: "₹50 - ₹9000",
      icon: Camera,
      color: "pink",
      items: ["Canvera Album Design - ₹50/sheet", "Canvera Album (40-50 Pages) - ₹3000-9000/album", "Wedding Album Design", "Event Album Design", "Photo Book Design"]
    },
    {
      id: "combo-packages",
      title: "Combo Packages",
      blurb: "Complete design packages for businesses and events.",
      price: "₹799 - ₹1999",
      icon: Star,
      color: "purple",
      items: ["Branding Starter (Logo + Card + Letterhead) - ₹799", "Festival Graphics (10 Creatives Pack) - ₹999", "Company Festive Pack (22+1 Festival Designs) - ₹1399", "Business Launch Kit (Logo + Brochure + Flex + 5 Social Media) - ₹1999"]
    },
    {
      id: "social-media",
      title: "Social Media Services",
      blurb: "Complete social media design and management packages.",
      price: "₹149 - ₹2999",
      icon: Share2,
      color: "green",
      items: ["Social Media Post (Per Creative) - ₹149", "Monthly Social Media Pack (30 Creatives) - ₹2999", "Reel/Short Video Graphics - ₹249", "Instagram Story Design", "Facebook Post Design", "LinkedIn Post Design"]
    },
    {
      id: "corporate-branding",
      title: "Corporate Branding",
      blurb: "Complete brand identity and corporate design solutions.",
      price: "₹99 - ₹499",
      icon: Users,
      color: "indigo",
      items: ["Logo Design - ₹499", "Business Card Design - ₹99-149", "Letterhead Design", "Envelope Design", "ID Card Design", "Lanyard Design", "Corporate Stationery", "Brand Guidelines"]
    }
  ];

  const filteredCategories = useMemo(() => {
    if (!query.trim()) return categories;
    const q = query.toLowerCase();
    return categories.filter((cat) =>
      cat.title.toLowerCase().includes(q) ||
      cat.blurb.toLowerCase().includes(q) ||
      cat.items.some((item) => item.toLowerCase().includes(q))
    );
  }, [query, categories]);

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
      <section className="bg-transparent py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Complete Design & Printing Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 px-4">
              From design to printing, we provide end-to-end solutions for all your business needs. 
              Professional quality at unbeatable prices.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500 fill-current" />
                <span className="text-sm sm:text-base text-gray-700 font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500" />
                <span className="text-sm sm:text-base text-gray-700 font-medium">500+ Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 sm:py-10 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-xl border bg-card p-4 sm:p-6">
        <label htmlFor="services-search" className="sr-only">Search services and designs</label>
        <div className="relative">
          <input
            id="services-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services, items, or designs..."
                className="w-full rounded-lg border bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Search services and designs"
            autoComplete="off"
          />
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-muted-foreground">
            <Search className="h-4 w-4" />
          </div>
        </div>
        {query && (
          <p className="mt-2 text-xs text-muted-foreground">
            Showing {filteredCategories.length} result{filteredCategories.length === 1 ? "" : "s"} for "{query}"
          </p>
        )}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Professional design and printing services for all your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredCategories.length === 0 && (
          <div className="col-span-full rounded-xl border bg-card p-6 text-center text-sm text-muted-foreground">
            No matching services. Try different keywords.
          </div>
        )}
        {filteredCategories.map((cat) => (
              <Card key={cat.id} className="group shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className={`w-12 h-12 bg-${cat.color}-100 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105`}>
                    <cat.icon className={`h-6 w-6 text-${cat.color}-600`} />
                  </div>
                  <CardTitle className="text-xl">{cat.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{cat.blurb}</CardDescription>
                  {cat.price && (
                  <div className="text-2xl font-bold text-primary">{cat.price}</div>
                  )}
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                    {cat.items.slice(0, 5).map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        {item}
                      </li>
                    ))}
                    {cat.items.length > 5 && (
                      <li className="text-xs text-muted-foreground">
                        +{cat.items.length - 5} more services
                      </li>
                    )}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="outline" className="w-full sm:flex-1">
                      View Details
                    </Button>
                    <Button className="w-full sm:flex-1 bg-amber-600 hover:bg-amber-700 text-white" asChild>
                      <a href="/contact">Order Now</a>
                    </Button>
                    <Button variant="outline" className="w-full sm:flex-1" asChild>
                      <a href="/contact">Connect Us</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Combo Packages Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Combo Packages</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Save more with our comprehensive design packages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-105">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl">Branding Starter</CardTitle>
                <div className="text-3xl font-bold text-primary">₹799</div>
                <CardDescription>Logo + Card + Letterhead</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Logo Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Business Card Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Letterhead Design</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="w-full sm:flex-1 bg-amber-600 hover:bg-amber-700" asChild>
                    <a href="/contact">Order Now</a>
                  </Button>
                  <Button variant="outline" className="w-full sm:flex-1 border-amber-600 text-amber-600 hover:bg-amber-50" asChild>
                    <a href="/contact">Connect Us</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-105">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Festival Graphics</CardTitle>
                <div className="text-3xl font-bold text-primary">₹999</div>
                <CardDescription>10 Creatives Pack</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">10 Festival Designs</span>
                  </li>
                  <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">All Platforms</span>
                  </li>
                  <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Print Ready</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="w-full sm:flex-1 bg-blue-600 hover:bg-blue-700" asChild>
                    <a href="/contact">Order Now</a>
                  </Button>
                  <Button variant="outline" className="w-full sm:flex-1 border-blue-600 text-blue-600 hover:bg-blue-50" asChild>
                    <a href="/contact">Connect Us</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-105">
                  <Share2 className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Company Festive Pack</CardTitle>
                <div className="text-3xl font-bold text-primary">₹1399</div>
                <CardDescription>22+1 Festival Designs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">22+1 Festival Designs</span>
                  </li>
                  <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">1-day delivery</span>
                  </li>
                  <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">All formats</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="w-full sm:flex-1 bg-green-600 hover:bg-green-700" asChild>
                    <a href="/contact">Order Now</a>
                  </Button>
                  <Button variant="outline" className="w-full sm:flex-1 border-green-600 text-green-600 hover:bg-green-50" asChild>
                    <a href="/contact">Connect Us</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-105">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Business Launch Kit</CardTitle>
                <div className="text-3xl font-bold text-primary">₹1999</div>
                <CardDescription>Complete Business Package</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Logo + Brochure + Flex</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">5 Social Media Posts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Complete Branding</span>
                  </li>
            </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="w-full sm:flex-1 bg-purple-600 hover:bg-purple-700" asChild>
                    <a href="/contact">Order Now</a>
                  </Button>
                  <Button variant="outline" className="w-full sm:flex-1 border-purple-600 text-purple-600 hover:bg-purple-50" asChild>
                    <a href="/contact">Connect Us</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Incuva?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional design and printing services with unmatched quality and speed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                <Zap className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick turnaround times without compromising quality.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assured</h3>
              <p className="text-gray-600">Professional designs and printing that exceed expectations.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Experienced designers and printers with creative expertise.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Satisfaction</h3>
              <p className="text-gray-600">100% satisfaction guarantee on all projects.</p>
            </div>
          </div>
            </div>
          </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Get professional design and printing services at unbeatable prices.
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