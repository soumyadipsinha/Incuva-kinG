import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Wordmark from "@/components/branding/Wordmark";
import BannerSwiper from "@/components/branding/BannerSwiper";
import { ArrowRight, CheckCircle, Star, Users, Award, Clock, Zap, Shield, Heart, Palette, FileText, Camera, Share2, ShoppingCart } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  // Use global cart context
  const { addToCart } = useCart();
  const navigate = useNavigate();
  
  // Global rotating assets list (exclude banner swiper images)
  const assetImages = useMemo(
    () => [
      "/assets/_Blue and White Illustrated Earth Hour Facebook Post.png",
      "/assets/Biru Hijau Selamat Hari Perawat Nasional Konten Instagram.png",
      "/assets/broucher.png",
      "/assets/broucher2.png",
      "/assets/broucher3.png",
      "/assets/buisnesscard1.png",
      "/assets/buisnesscard2.png",
      "/assets/buisnesscard4.png",
      "/assets/buisnesscard5.png",
      "/assets/canverastylealbum1.png",
      "/assets/canverastylealbum2.png",
      "/assets/canverastylealbum3.png",
      "/assets/canverastylealbum4.png",
      "/assets/canverastylealbum5.png",
      "/assets/canverastylealbum6.png",
      "/assets/doublesidedbanner.png",
      "/assets/Earth Hour (Konten Instagram).png",
      "/assets/flex1.jpg",
      "/assets/flex2.jpg",
      "/assets/flex3.jpg",
      "/assets/free.png",
      "/assets/GIVEAWAY (Konten Instagram).png",
      "/assets/logo.png",
      "/assets/logobanner.png",
      "/assets/poster1.png",
      "/assets/poster2.png",
      "/assets/poster3.png",
      "/assets/poster4.png",
      "/assets/poster5.png",
      "/assets/poster67.png",
      "/assets/poster7.png",
      "/assets/Red Black and White Dynamic Boxing Presentation.png",
      "/assets/resumebanner.png",
      "/assets/showlogo1.png",
      "/assets/showlogo2.png",
      "/assets/showlogo3.png",
      "/assets/TIME TO HOLIDAY (Konten Instagram).png",
      "/assets/White Modern Travel Instagram Post.png"
    ],
    []
  );

  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 3000);
    return () => clearInterval(id);
  }, []);

  const imgAt = (offset: number) => assetImages[(tick + offset + assetImages.length) % assetImages.length];

  return (
    <main className="min-h-svh w-full bg-background">
      {/* Banner Swiper */}
      <BannerSwiper />
      
      {/* Hero */}
      <section className="relative mx-auto max-w-5xl px-4 pb-10 pt-8 sm:pt-12 md:pt-20 overflow-hidden">
        {/* Enhanced Artistic blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-8 sm:-left-16 top-0 h-32 w-32 sm:h-40 sm:w-40 animate-[spin_20s_linear_infinite] rounded-full bg-accent/40 blur-2xl" />
          <div className="absolute bottom-0 right-0 h-40 w-40 sm:h-52 sm:w-52 animate-[spin_25s_linear_infinite_reverse] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 animate-pulse rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl" />
          <div className="absolute top-1/4 right-1/4 h-16 w-16 animate-bounce rounded-full bg-green-400/20 blur-lg" />
        </div>
        
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="animate-fade-in-up">
            <Wordmark text="INKUVA" />
          </div>
          <p className="max-w-xl text-sm sm:text-base text-muted-foreground px-4 animate-fade-in-up animation-delay-200">Professional design services for businesses, entrepreneurs, and creatives. From logos to complete brand identity - we bring your vision to life.</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full max-w-md sm:max-w-none sm:w-auto px-4 sm:px-0 animate-fade-in-up animation-delay-400">
            <Button size="lg" variant="outline" className="px-6 sm:px-8 py-4 text-base sm:text-lg w-full sm:w-auto hover:scale-105 transition-all duration-300 hover:shadow-lg" asChild>
              <a href="/services">
                Choose Your Design
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="px-6 sm:px-8 py-4 text-base sm:text-lg w-full sm:w-auto hover:scale-105 transition-all duration-300 hover:shadow-lg" asChild>
              <a href="/explore">View Our Work</a>
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-6 animate-fade-in-up animation-delay-600">
            <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500 fill-current animate-pulse" />
              <span className="text-sm sm:text-base text-muted-foreground font-medium">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
              <Users className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500 animate-bounce" />
              <span className="text-sm sm:text-base text-muted-foreground font-medium">500+ Happy Clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:pb-24">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 animate-fade-in-up">Our Design Services</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 animate-fade-in-up animation-delay-200">
            Professional design services at unbeatable prices. Choose from our range of design packages.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Logo Design */}
          <Card className="group hover:shadow-xl transition-all duration-300 border overflow-hidden animate-fade-in-up animation-delay-300 hover:scale-105 hover:-translate-y-2">
            {/* Logo Images Section */}
            <div className="aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100">
              <div className="grid grid-cols-2 gap-2 p-4 h-full">
                {[
                  "/assets/logo.png",
                  "/assets/showlogo1.png",
                  "/assets/showlogo2.png", 
                  "/assets/showlogo3.png"
                ].map((logoImg, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-2 flex items-center justify-center">
                    <img 
                      src={logoImg} 
                      alt={`Logo ${idx + 1}`} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
            <CardHeader>
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-amber-600" />
              </div>
              <CardTitle className="text-xl">Logo Design</CardTitle>
              <CardDescription>
                Professional logo design that represents your brand perfectly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-primary">₹499</span>
                  <Badge variant="secondary" className="bg-amber-100 text-amber-800">Popular</Badge>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Multiple concepts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Unlimited revisions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    All file formats
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <a href="/requirements">Order Now</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Business Cards */}
          <Card className="group hover:shadow-xl transition-all duration-300 border overflow-hidden animate-fade-in-up animation-delay-500 hover:scale-105 hover:-translate-y-2">
            {/* Business Card Images Section */}
            <div className="aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="grid grid-cols-2 gap-2 p-4 h-full">
                {[
                  "/assets/buisnesscard1.png",
                  "/assets/buisnesscard2.png",
                  "/assets/buisnesscard4.png",
                  "/assets/buisnesscard5.png"
                ].map((cardImg, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-2 flex items-center justify-center">
                    <img 
                      src={cardImg} 
                      alt={`Business Card ${idx + 1}`} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Business Cards</CardTitle>
              <CardDescription>
                Single or double-sided business cards that make a lasting impression.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-primary">₹99-149</span>
                  <Badge variant="outline">Best Value</Badge>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Single/Double side
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Print ready files
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Multiple designs
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <a href="/requirements">Order Now</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Banner Design */}
          <Card className="group hover:shadow-xl transition-all duration-300 border overflow-hidden animate-fade-in-up animation-delay-700 hover:scale-105 hover:-translate-y-2">
            {/* Banner/Flex Images Section */}
            <div className="aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-green-50 to-green-100">
              <div className="grid grid-cols-2 gap-2 p-4 h-full">
                {[
                  "/assets/flex1.jpg",
                  "/assets/flex2.jpg",
                  "/assets/flex3.jpg",
                  "/assets/doublesidedbanner.png"
                ].map((bannerImg, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-2 flex items-center justify-center">
                    <img 
                      src={bannerImg} 
                      alt={`Banner ${idx + 1}`} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-xl">Banner Design</CardTitle>
              <CardDescription>
                Eye-catching banners and flex designs for events and promotions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-primary">₹199</span>
                  <Badge variant="outline">Quick Turnaround</Badge>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Custom sizes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    High resolution
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Print ready
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <a href="/requirements">Order Now</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

          {/* View All Services Button */}
          <div className="text-center mt-12">
            <a href="/services">
              <Button size="lg" variant="outline" className="px-8 py-4">
                View All Services & Pricing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
      </section>

      {/* Product grid */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { 
              id: "home-poster-1",
              title: "Poster Design", 
              desc: "Creative • Print • Marketing",
              price: "₹199",
              description: "Professional poster design for events and marketing campaigns"
            },
            { 
              id: "home-business-1",
              title: "Business Cards", 
              desc: "Professional • Branding • Cards",
              price: "₹99",
              description: "Professional business card design and printing"
            },
            { 
              id: "home-flex-1",
              title: "Flex Banners", 
              desc: "Outdoor • Advertising • Banners",
              price: "₹299",
              description: "High-quality flex banner design and printing"
            },
            { 
              id: "home-brochure-1",
              title: "Brochures", 
              desc: "Marketing • Print • Collateral",
              price: "₹399",
              description: "Professional brochure design and printing"
            },
          ].map((item, idx) => (
            <article key={idx} className={`rounded-2xl bg-card p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up animation-delay-${(idx + 1) * 200} hover:scale-105`}>
              <div className="aspect-[3/4] w-full overflow-hidden rounded-xl bg-white group">
                <img src={imgAt(idx)} alt={item.title} className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110" loading="lazy" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-primary group-hover:text-primary/80 transition-colors">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                  <p className="text-sm font-bold text-green-600 mt-1">{item.price}</p>
                </div>
                <Button 
                  size="sm" 
                  className="rounded-full hover:scale-110 transition-transform duration-300 hover:shadow-lg"
                  onClick={() => navigate(`/product/${item.id}`)}
                >
                  <ShoppingCart className="w-3 h-3 mr-1" />
                  View Details
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Services Section with Scrolling */}
      <section className="w-full bg-[#bfe0dd] py-12 sm:py-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-ping"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 animate-fade-in-up">Our Services</h2>
            <p className="text-base sm:text-lg text-primary/80 px-4 animate-fade-in-up animation-delay-200">Professional design and printing solutions for your business</p>
          </div>
          
          <div className="relative group">
            {/* Left Hover Zone - Shows arrow when hovering over left edge */}
            <div className="absolute left-0 top-0 w-20 h-full z-10 hidden sm:block">
              <button 
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white shadow-lg rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
                onClick={() => {
                  const container = document.getElementById('services-scroll');
                  if (container) {
                    container.scrollBy({ left: -300, behavior: 'smooth' });
                  }
                }}
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>

            {/* Right Hover Zone - Shows arrow when hovering over right edge */}
            <div className="absolute right-0 top-0 w-20 h-full z-10 hidden sm:block">
              <button 
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white shadow-lg rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
                onClick={() => {
                  const container = document.getElementById('services-scroll');
                  if (container) {
                    container.scrollBy({ left: 300, behavior: 'smooth' });
                  }
                }}
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Scrollable Services Container */}
            <div 
              id="services-scroll"
              className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4 touch-pan-x"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {[
                {
                  title: "Professional Logo Design Services",
                  desc: "Get a professional logo that represents your brand perfectly. Multiple concepts, unlimited revisions, and all file formats included.",
                  href: "/services#logo-design"
                },
                {
                  title: "Business Card Design Solutions",
                  desc: "Single or double-sided business cards that make a lasting impression. Print ready files with multiple design options.",
                  href: "/services/visiting-cards"
                },
                {
                  title: "Banner & Flex Design Services",
                  desc: "Eye-catching banners and flex designs for events and promotions. Custom sizes, high resolution, and print ready files.",
                  href: "/services/flex-printing"
                },
                {
                  title: "Complete Brand Identity Package",
                  desc: "From logos to complete brand identity - we bring your vision to life with professional design services.",
                  href: "/services#corporate-branding"
                },
                {
                  title: "Social Media Graphics",
                  desc: "Engaging social media posts, reels, and stories that boost your online presence and engagement.",
                  href: "/services#social-media"
                },
                {
                  title: "Poster & Flyer Design",
                  desc: "Eye-catching posters and flyers for events, promotions, and marketing campaigns.",
                  href: "/services/poster-flyer-design"
                },
                {
                  title: "Album & Photo Services",
                  desc: "Professional wedding albums, photo books, and Canvera-style printing services.",
                  href: "/services/album-printing"
                },
                {
                  title: "Printing Services",
                  desc: "High-quality printing for business cards, banners, brochures, and all your business needs.",
                  href: "/services#printing"
                }
              ].map((item, i) => (
                <article key={i} className="flex-shrink-0 w-64 sm:w-72 md:w-80 space-y-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105">
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-t-lg bg-white group">
                    <img 
                      src={imgAt(i + 10)} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="text-base sm:text-lg font-medium leading-snug text-primary md:text-xl mb-2 group-hover:text-primary/80 transition-colors">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-primary/80 mb-3">{item.desc}</p>
                    <a 
                      href={item.href}
                      className="inline-flex items-center text-xs sm:text-sm font-medium text-primary hover:text-primary/80 transition-all duration-300 hover:translate-x-1"
                    >
                      Learn More
                      <svg className="ml-1 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PosterMyWall-inspired: Hero CTA (added) */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
        <div className="grid items-center gap-6 sm:gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-semibold leading-tight text-primary md:text-5xl lg:text-6xl animate-fade-in-up">
              Captivate your audience with beautiful designs
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Choose from our professional design services to showcase your brand, promote your business, or create stunning visuals.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button asChild className="w-full sm:w-auto">
                <a href="/requirements">Order Now</a>
              </Button>
              <Button variant="outline" asChild className="w-full sm:w-auto">
                <a href="/services">Browse Services</a>
              </Button>
            </div>
          </div>
          <div className="aspect-video w-full rounded-2xl overflow-hidden border shadow-md">
            <img 
              src={imgAt(20)} 
              alt="Professional Design Services"
              className="w-full h-full object-cover transition-opacity duration-700"
            />
          </div>
        </div>
      </section>

      {/* PosterMyWall-inspired: Templates showcase (added) */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="mb-4 flex items-baseline justify-between">
          <h3 className="text-2xl sm:text-3xl font-semibold text-primary animate-fade-in-up">Popular design services</h3>
          <a href="/services" className="text-sm underline-offset-2 hover:underline transition-all duration-300 hover:scale-105">More services</a>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Logo Design",
              href: "/services#logo-design",
              imageType: "logo"
            },
            {
              title: "Business Cards",
              href: "/services/visiting-cards",
              imageType: "business"
            },
            {
              title: "Banner Design",
              href: "/services/flex-printing",
              imageType: "flex"
            },
            {
              title: "Poster Design",
              href: "/services/poster-flyer-design",
              imageType: "poster"
            },
          ].map((item, i) => {
            // Filter images based on service type
            let serviceImage;
            if (item.imageType === "logo") {
              // Logo-related images: logo.png, logobanner.png, showlogo1.png, showlogo2.png, showlogo3.png
              const logoImages = [
                
                
                "/assets/showlogo1.png",
                "/assets/showlogo2.png",
                "/assets/showlogo3.png"
              ];
              serviceImage = logoImages[tick % logoImages.length];
            } else if (item.imageType === "flex") {
              // Flex-related images: flex1.jpg, flex2.jpg, flex3.jpg, doublesidedbanner.png
              const flexImages = [
                "/assets/flex1.jpg",
                "/assets/flex2.jpg", 
                "/assets/flex3.jpg",
                
              ];
              serviceImage = flexImages[tick % flexImages.length];
            } else {
              // For other services, use the rotating asset images
              serviceImage = imgAt(i + 24);
            }

            return (
              <Card key={i} className={`overflow-hidden animate-fade-in-up animation-delay-${(i + 1) * 200} hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl`}>
                <div className="aspect-[4/3] w-full overflow-hidden bg-white group">
                  <img src={serviceImage} alt={item.title} className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110" loading="lazy" />
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2 text-base group-hover:text-primary/80 transition-colors">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Badge variant="outline" className="hover:scale-110 transition-transform duration-300">Design</Badge>
                  <span>•</span>
                  <span>Professional</span>
                </CardContent>
                <CardContent className="flex items-center justify-between">
                  <Button size="sm" asChild className="hover:scale-110 transition-transform duration-300">
                    <a href="/requirements">Order Now</a>
                  </Button>
                  <Button size="sm" variant="outline" asChild className="hover:scale-110 transition-transform duration-300">
                    <a href={item.href}>Learn More</a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* PosterMyWall-inspired: Categories & sizes (added) */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h3 className="mb-4 text-2xl sm:text-3xl font-semibold text-primary animate-fade-in-up">Browse by category</h3>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {["Logo Design", "Business Cards", "Banners", "Posters", "Brochures", "Social Media"].map((c) => (
            <a key={c} href="/services" className="transition-opacity hover:opacity-80">
              <Badge variant="secondary">{c}</Badge>
            </a>
          ))}
        </div>
      </section>

      {/* PosterMyWall-inspired: Feature highlights (added) */}
      <section className="w-full border-t bg-secondary/40 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h3 className="mb-8 text-center text-2xl sm:text-3xl font-semibold text-primary animate-fade-in-up">Design in 5 easy steps</h3>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { n: 1, t: "Choose a service", d: "Pick from our design services." },
              { n: 2, t: "Get a quote", d: "Get transparent pricing instantly." },
              { n: 3, t: "Share requirements", d: "Tell us your design needs." },
              { n: 4, t: "Review designs", d: "Get multiple concepts to choose from." },
              { n: 5, t: "Get final files", d: "Download print-ready files." },
            ].map((item) => (
              <div key={item.n} className="rounded-2xl border bg-card p-5">
                <div className="mb-2 text-sm text-muted-foreground">Step {item.n}</div>
                <div className="font-medium text-primary">{item.t}</div>
                <div className="text-sm text-muted-foreground">{item.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PosterMyWall-inspired: Bottom CTA (added) */}
      <section className="mx-auto max-w-7xl px-4 pb-24">
        <div className="rounded-3xl border bg-card p-8 text-center">
          <h3 className="text-3xl sm:text-4xl font-semibold text-primary animate-fade-in-up">Professional design services</h3>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
            Create stunning designs for your business. From logos to complete brand identity - we bring your vision to life.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-3">
            <Button asChild className="w-full sm:w-auto">
              <a href="/services">Choose Your Design</a>
            </Button>
            <a href="/services" className="text-sm underline-offset-2 hover:underline">Explore services</a>
          </div>
        </div>
      </section>

      {/* Testimonials (added) */}
      <section className="w-full border-t bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h3 className="mb-8 text-center text-2xl sm:text-3xl font-semibold text-primary animate-fade-in-up">What our customers say</h3>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 md:grid-cols-3">
            {[
              {
                name: "Ayesha K.",
                role: "Business Owner",
                quote: "The logo design exceeded my expectations. Professional and creative!",
              },
              {
                name: "Rahul M.",
                role: "Entrepreneur",
                quote: "Quick turnaround and excellent quality. Highly recommended!",
              },
              {
                name: "Grace T.",
                role: "Marketing Manager",
                quote: "Perfect designs for our marketing campaigns. Great service!",
              },
            ].map((t, i) => (
              <Card key={i} className="h-full">
                <CardHeader>
                  <div className="text-lg">★★★★★</div>
                  <CardTitle className="text-base leading-snug">{t.quote}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{t.name}</span> · {t.role}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}