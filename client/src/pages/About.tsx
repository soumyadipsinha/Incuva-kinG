import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Star, Users, Award, Clock, Zap, Shield, Heart, Palette, FileText, Camera, Share2, Target, Lightbulb, Globe, Package, Truck, ShoppingCart, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function AboutPage() {
  // Use global cart context
  const { addToCart } = useCart();

  // Portfolio items with cart functionality
  const portfolioItems = [
    {
      id: "about-poster-1",
      title: "Event Poster Design",
      price: "₹199",
      image: "/assets/poster1.png",
      category: "Posters & Flyers",
      description: "Professional event poster design with modern typography and eye-catching visuals"
    },
    {
      id: "about-poster-2", 
      title: "Marketing Poster",
      price: "₹249",
      image: "/assets/poster2.png",
      category: "Posters & Flyers",
      description: "Creative marketing poster design for promotional campaigns"
    },
    {
      id: "about-poster-3",
      title: "Festival Poster",
      price: "₹179",
      image: "/assets/poster3.png", 
      category: "Posters & Flyers",
      description: "Vibrant festival poster design with cultural elements"
    },
    {
      id: "about-business-1",
      title: "Executive Business Card",
      price: "₹149",
      image: "/assets/buisnesscard1.png",
      category: "Business Cards",
      description: "Premium executive business card design with elegant layout"
    },
    {
      id: "about-business-2",
      title: "Modern Business Card",
      price: "₹99",
      image: "/assets/buisnesscard2.png",
      category: "Business Cards", 
      description: "Modern minimalist business card design"
    },
    {
      id: "about-business-3",
      title: "Creative Business Card",
      price: "₹199",
      image: "/assets/buisnesscard4.png",
      category: "Business Cards",
      description: "Creative business card design with unique elements"
    },
    {
      id: "about-business-4",
      title: "Professional Business Card",
      price: "₹129",
      image: "/assets/buisnesscard5.png",
      category: "Business Cards",
      description: "Professional business card design for corporate use"
    },
    {
      id: "about-brochure-1",
      title: "Company Brochure",
      price: "₹399",
      image: "/assets/broucher.png",
      category: "Brochures & Catalogs",
      description: "Professional company brochure design with comprehensive layout"
    },
    {
      id: "about-brochure-2",
      title: "Product Catalog",
      price: "₹499",
      image: "/assets/broucher2.png",
      category: "Brochures & Catalogs",
      description: "Detailed product catalog design with high-quality imagery"
    },
    {
      id: "about-brochure-3",
      title: "Marketing Brochure",
      price: "₹349",
      image: "/assets/broucher3.png",
      category: "Brochures & Catalogs",
      description: "Marketing brochure design for promotional materials"
    },
    {
      id: "about-flex-1",
      title: "Event Flex Banner",
      price: "₹299",
      image: "/assets/flex1.jpg",
      category: "Flex & Banners",
      description: "High-quality flex banner design for events and promotions"
    },
    {
      id: "about-flex-2",
      title: "Store Flex Banner",
      price: "₹399",
      image: "/assets/flex2.jpg",
      category: "Flex & Banners",
      description: "Professional store flex banner design for retail"
    },
    {
      id: "about-flex-3",
      title: "Promotional Flex",
      price: "₹249",
      image: "/assets/flex3.jpg",
      category: "Flex & Banners",
      description: "Promotional flex banner design for marketing campaigns"
    },
    {
      id: "about-logo-1",
      title: "Brand Logo Design",
      price: "₹499",
      image: "/assets/showlogo1.png",
      category: "Logo Designs",
      description: "Professional brand logo design with multiple concepts"
    },
    {
      id: "about-logo-2",
      title: "Creative Logo Design",
      price: "₹399",
      image: "/assets/showlogo2.png",
      category: "Logo Designs",
      description: "Creative logo design with unique visual elements"
    },
    {
      id: "about-logo-3",
      title: "Modern Logo Design",
      price: "₹449",
      image: "/assets/showlogo3.png",
      category: "Logo Designs",
      description: "Modern logo design with contemporary styling"
    }
  ];

  const services = [
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Logo Design",
      description: "Unique brand identities that make you stand out"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Business Cards",
      description: "Single & double-sided professional cards"
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Poster & Banner Designs",
      description: "Eye-catching flex banners and marketing materials"
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Social Media Graphics",
      description: "Reels, posts, and monthly creative packs"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Product Catalogues",
      description: "Professional menus, certificates, and resumes"
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: "Custom Merchandise",
      description: "Mugs, t-shirts, and promotional items"
    }
  ];

  const printingSolutions = [
    {
      title: "Visiting Cards & Letterheads",
      description: "Premium quality business stationery"
    },
    {
      title: "Flex Banners & Vinyl Prints",
      description: "Durable outdoor advertising solutions"
    },
    {
      title: "Canvera Albums & Posters",
      description: "High-quality photo printing and albums"
    },
    {
      title: "Iron Structures & Displays",
      description: "Large-scale display materials and signage"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "End-to-End Solutions",
      description: "From concept to creation, we handle it all — design, print, and deliver."
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "Creative Excellence",
      description: "Our experienced design team ensures every creative stands out and aligns perfectly with your brand identity."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Fast Turnaround Time",
      description: "We value your deadlines. Expect on-time delivery every single time."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Affordable Pricing",
      description: "Premium quality doesn't have to be expensive. We ensure the best rates for startups, individuals, and growing businesses."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Digital + Print Expertise",
      description: "Whether you need online graphics or physical prints, we seamlessly integrate both worlds."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Customer-Centric Approach",
      description: "Every project is personalized, every design is tailored — because your satisfaction defines our success."
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients", icon: <Users className="h-6 w-6" /> },
    { number: "4.9/5", label: "Average Rating", icon: <Star className="h-6 w-6" /> },
    { number: "24hr", label: "Fast Delivery", icon: <Truck className="h-6 w-6" /> },
    { number: "98%", label: "Satisfaction Rate", icon: <Award className="h-6 w-6" /> }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10 py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-secondary/20 rounded-full animate-ping"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 relative">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-primary mb-4 sm:mb-6 animate-fade-in-up">
              About <span className="font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Incuva</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 animate-fade-in-up animation-delay-200">
              Your one-stop creative and printing hub where ideas take shape, designs come alive, and brands are built to stand out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto px-4 sm:px-0 animate-fade-in-up animation-delay-400">
              <Button size="lg" className="w-full sm:w-auto hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl" asChild>
                <a href="/services">Explore Our Services</a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto hover:scale-105 transition-transform duration-300" asChild>
                <a href="/contact">Get In Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <Card className="p-6 sm:p-8">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-primary/10 rounded-lg">
                  <Target className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-primary">Our Mission</h2>
              </div>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                To make professional design and printing services accessible, affordable, and impactful for everyone — helping brands communicate better, connect deeper, and grow faster.
              </p>
            </Card>

            <Card className="p-6 sm:p-8">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-accent/10 rounded-lg">
                  <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-primary">Our Vision</h2>
              </div>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                To be India's most trusted creative design and printing brand by empowering businesses with visually stunning, high-quality, and cost-effective branding solutions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary/30 py-12 sm:py-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-accent/10 rounded-full animate-bounce"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 relative">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 animate-fade-in-up">Trusted by Thousands</h2>
            <p className="text-gray-700 px-4 animate-fade-in-up animation-delay-200">Join our growing community of satisfied clients</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className={`text-center hover:scale-105 transition-transform duration-300 animate-fade-in-up animation-delay-${(index + 1) * 200}`}>
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4 animate-fade-in-up">What We Offer</h2>
            <p className="text-gray-700 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              From creative design to premium printing, we cover all your branding needs under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className={`p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl animate-fade-in-up animation-delay-${(index + 1) * 200}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-primary group-hover:text-primary/80 transition-colors">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>

            <div className="text-center animate-fade-in-up animation-delay-1000">
            <Button size="lg" className="hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl" asChild>
              <a href="/services">View All Services</a>
            </Button>
                    </div>
                  </div>
      </section>

      {/* Printing Solutions */}
      <section className="bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Complete Printing Solutions</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              From small business cards to large-scale banners, we handle all your printing needs with precision and quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {printingSolutions.map((solution, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </Card>
                ))}
              </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Incuva?</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We combine creativity, technology, and customer focus to deliver exceptional results every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                    {reason.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">View Our Best Works</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Explore our portfolio of creative designs, printing solutions, and branding work that has helped businesses stand out.
            </p>
          </div>

          {/* Posters & Flyers Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Posters & Flyers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.filter(item => item.category === "Posters & Flyers").map((item, index) => (
                <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Button
                        size="sm"
                        className="rounded-full bg-white/90 hover:bg-white text-primary shadow-lg"
                        onClick={() => addToCart(item)}
                      >
                        <ShoppingCart className="w-4 h-4 mr-1" />
                        Add to Cart
                      </Button>
                    </div>
                    <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Badge className="bg-white/90 text-primary">
                        {item.price}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-primary mb-1 group-hover:text-primary/80 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Business Cards Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Business Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {portfolioItems.filter(item => item.category === "Business Cards").map((item, index) => (
                <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Button
                        size="sm"
                        className="rounded-full bg-white/90 hover:bg-white text-primary shadow-lg"
                        onClick={() => addToCart(item)}
                      >
                        <ShoppingCart className="w-4 h-4 mr-1" />
                        Add to Cart
                      </Button>
                    </div>
                    <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Badge className="bg-white/90 text-primary">
                        {item.price}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-primary mb-1 group-hover:text-primary/80 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Brochures Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Brochures & Catalogs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.filter(item => item.category === "Brochures & Catalogs").map((item, index) => (
                <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Button
                        size="sm"
                        className="rounded-full bg-white/90 hover:bg-white text-primary shadow-lg"
                        onClick={() => addToCart(item)}
                      >
                        <ShoppingCart className="w-4 h-4 mr-1" />
                        Add to Cart
                      </Button>
                    </div>
                    <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Badge className="bg-white/90 text-primary">
                        {item.price}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-primary mb-1 group-hover:text-primary/80 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Flex & Banners Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Flex & Banners</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.filter(item => item.category === "Flex & Banners").map((item, index) => (
                <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Button
                        size="sm"
                        className="rounded-full bg-white/90 hover:bg-white text-primary shadow-lg"
                        onClick={() => addToCart(item)}
                      >
                        <ShoppingCart className="w-4 h-4 mr-1" />
                        Add to Cart
                      </Button>
                    </div>
                    <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Badge className="bg-white/90 text-primary">
                        {item.price}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-primary mb-1 group-hover:text-primary/80 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Social Media & Reels Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Social Media & Reels</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <img 
                  src="/assets/White Modern Travel Instagram Post.png" 
                  alt="Social Media Post 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <img 
                  src="/assets/White Modern Travel Instagram Post.png" 
                  alt="Social Media Post 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <img 
                  src="/assets/White Modern Travel Instagram Post.png" 
                  alt="Social Media Post 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Video Reels Section */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-primary mb-4 text-center">Video Reels</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative group bg-gray-100 rounded-lg overflow-hidden">
                <video
                  className="w-full h-64 object-cover"
                  controls
                  muted
                  preload="metadata"
                  poster="/assets/poster1.png"
                  onError={(e) => {
                    console.log('Video 1 failed to load:', e);
                    const target = e.target as HTMLVideoElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div class="w-full h-64 flex items-center justify-center bg-gray-200 rounded-lg"><p class="text-gray-600">Video not available</p></div>';
                    }
                  }}
                >
                  <source src="/assets/reels1.mp4" type="video/mp4" />
                  <source src="./assets/reels1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="relative group bg-gray-100 rounded-lg overflow-hidden">
                <video
                  className="w-full h-64 object-cover"
                  controls
                  muted
                  preload="metadata"
                  poster="/assets/poster2.png"
                  onError={(e) => {
                    console.log('Video 2 failed to load:', e);
                    const target = e.target as HTMLVideoElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div class="w-full h-64 flex items-center justify-center bg-gray-200 rounded-lg"><p class="text-gray-600">Video not available</p></div>';
                    }
                  }}
                >
                  <source src="/assets/reels2.mp4" type="video/mp4" />
                  <source src="./assets/reels2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="relative group bg-gray-100 rounded-lg overflow-hidden">
                <video
                  className="w-full h-64 object-cover"
                  controls
                  muted
                  preload="metadata"
                  poster="/assets/poster3.png"
                  onError={(e) => {
                    console.log('Video 3 failed to load:', e);
                    const target = e.target as HTMLVideoElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div class="w-full h-64 flex items-center justify-center bg-gray-200 rounded-lg"><p class="text-gray-600">Video not available</p></div>';
                    }
                  }}
                >
                  <source src="/assets/reels3.mp4" type="video/mp4" />
                  <source src="./assets/reels3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                  </div>
              <div className="relative group bg-gray-100 rounded-lg overflow-hidden">
                <video
                  className="w-full h-64 object-cover"
                  controls
                  muted
                  preload="metadata"
                  poster="/assets/poster1.png"
                  onError={(e) => {
                    console.log('Video 4 failed to load:', e);
                    const target = e.target as HTMLVideoElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div class="w-full h-64 flex items-center justify-center bg-gray-200 rounded-lg"><p class="text-gray-600">Video not available</p></div>';
                    }
                  }}
                >
                  <source src="/assets/reels4.mp4" type="video/mp4" />
                  <source src="./assets/reels4.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                  </div>
              <div className="relative group bg-gray-100 rounded-lg overflow-hidden">
                <video
                  className="w-full h-64 object-cover"
                  controls
                  muted
                  preload="metadata"
                  poster="/assets/poster2.png"
                  onError={(e) => {
                    console.log('Video 5 failed to load:', e);
                    const target = e.target as HTMLVideoElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div class="w-full h-64 flex items-center justify-center bg-gray-200 rounded-lg"><p class="text-gray-600">Video not available</p></div>';
                    }
                  }}
                >
                  <source src="/assets/reel5.mp4" type="video/mp4" />
                  <source src="./assets/reel5.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          {/* Logo Designs Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Logo Designs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.filter(item => item.category === "Logo Designs").map((item, index) => (
                <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Button
                        size="sm"
                        className="rounded-full bg-white/90 hover:bg-white text-primary shadow-lg"
                        onClick={() => addToCart(item)}
                      >
                        <ShoppingCart className="w-4 h-4 mr-1" />
                        Add to Cart
                      </Button>
                    </div>
                    <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Badge className="bg-white/90 text-primary">
                        {item.price}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-primary mb-1 group-hover:text-primary/80 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary/5 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Ready to Create Something Amazing?</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              Let's bring your vision to life with our professional design and printing services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/services">Start Your Project</a>
            </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">Get Free Quote</a>
            </Button>
            </div>
          </div>
      </div>
      </section>
    </main>
  );
}