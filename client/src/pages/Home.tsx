import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Wordmark from "@/components/branding/Wordmark";
import BannerSwiper from "@/components/branding/BannerSwiper";
import { ArrowRight, CheckCircle, Star, Users, Award, Clock, Zap, Shield, Heart, Palette, FileText, Camera, Share2 } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-svh w-full bg-background">
      {/* Banner Swiper */}
      <BannerSwiper />
      
      {/* Hero */}
      <section className="relative mx-auto max-w-5xl px-4 pb-10 pt-8 sm:pt-12 md:pt-20">
        {/* Artistic blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-8 sm:-left-16 top-0 h-32 w-32 sm:h-40 sm:w-40 animate-[spin_20s_linear_infinite] rounded-full bg-accent/40 blur-2xl" />
          <div className="absolute bottom-0 right-0 h-40 w-40 sm:h-52 sm:w-52 animate-[spin_25s_linear_infinite_reverse] rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="flex flex-col items-center gap-3 text-center">
          <Wordmark text="INKUVA" />
          <p className="max-w-xl text-sm sm:text-base text-muted-foreground px-4">Professional design services for businesses, entrepreneurs, and creatives. From logos to complete brand identity - we bring your vision to life.</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto px-4 sm:px-0">
            <Button size="lg" variant="outline" className="px-6 sm:px-8 py-4 text-base sm:text-lg w-full sm:w-auto" asChild>
              <a href="/services">
                Choose Your Design
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="px-6 sm:px-8 py-4 text-base sm:text-lg w-full sm:w-auto" asChild>
              <a href="/explore">View Our Work</a>
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-6">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500 fill-current" />
              <span className="text-sm sm:text-base text-muted-foreground font-medium">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500" />
              <span className="text-sm sm:text-base text-muted-foreground font-medium">500+ Happy Clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:pb-24">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">Our Design Services</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Professional design services at unbeatable prices. Choose from our range of design packages.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Logo Design */}
          <Card className="group hover:shadow-xl transition-all duration-300 border">
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
                  <a href="/quote">Order Now</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Business Cards */}
          <Card className="group hover:shadow-xl transition-all duration-300 border">
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
                  <a href="/quote">Order Now</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Banner Design */}
          <Card className="group hover:shadow-xl transition-all duration-300 border">
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
                  <a href="/quote">Order Now</a>
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
        <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { src: "/assets/poster1.png", title: "Poster Design", desc: "Creative • Print • Marketing" },
            { src: "/assets/buisnesscard1.png", title: "Business Cards", desc: "Professional • Branding • Cards" },
            { src: "/assets/flex1.jpg", title: "Flex Banners", desc: "Outdoor • Advertising • Banners" },
            { src: "/assets/broucher.png", title: "Brochures", desc: "Marketing • Print • Collateral" },
          ].map((item, idx) => (
            <article key={idx} className="rounded-lg border bg-card p-6">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-md">
                <img src={item.src} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-primary">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
                <Button size="sm">Add</Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Services Section with Scrolling */}
      <section className="w-full bg-[#bfe0dd] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-base sm:text-lg text-primary/80 px-4">Professional design and printing solutions for your business</p>
          </div>
          
          <div className="relative">
            {/* Left Arrow */}
            <button 
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 hidden sm:block"
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

            {/* Right Arrow */}
            <button 
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 hidden sm:block"
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

            {/* Scrollable Services Container */}
            <div 
              id="services-scroll"
              className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4 touch-pan-x"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {[
                {
                  title: "Professional Logo Design Services",
                  desc: "Get a professional logo that represents your brand perfectly. Multiple concepts, unlimited revisions, and all file formats included.",
                  image: "/assets/showlogo1.png",
                  href: "/services#logo-design"
                },
                {
                  title: "Business Card Design Solutions",
                  desc: "Single or double-sided business cards that make a lasting impression. Print ready files with multiple design options.",
                  image: "/assets/buisnesscard1.png",
                  href: "/services/visiting-cards"
                },
                {
                  title: "Banner & Flex Design Services",
                  desc: "Eye-catching banners and flex designs for events and promotions. Custom sizes, high resolution, and print ready files.",
                  image: "/assets/flex1.jpg",
                  href: "/services/flex-printing"
                },
                {
                  title: "Complete Brand Identity Package",
                  desc: "From logos to complete brand identity - we bring your vision to life with professional design services.",
                  image: "/assets/broucher.png",
                  href: "/services#corporate-branding"
                },
                {
                  title: "Social Media Graphics",
                  desc: "Engaging social media posts, reels, and stories that boost your online presence and engagement.",
                  image: "/assets/White Modern Travel Instagram Post.png",
                  href: "/services#social-media"
                },
                {
                  title: "Poster & Flyer Design",
                  desc: "Eye-catching posters and flyers for events, promotions, and marketing campaigns.",
                  image: "/assets/poster1.png",
                  href: "/services/poster-flyer-design"
                },
                {
                  title: "Album & Photo Services",
                  desc: "Professional wedding albums, photo books, and Canvera-style printing services.",
                  image: "/assets/resumebanner.png",
                  href: "/services/album-printing"
                },
                {
                  title: "Printing Services",
                  desc: "High-quality printing for business cards, banners, brochures, and all your business needs.",
                  image: "/assets/doublesidedbanner.png",
                  href: "/services#printing"
                }
              ].map((item, i) => (
                <article key={i} className="flex-shrink-0 w-72 sm:w-80 space-y-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-t-lg">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="text-base sm:text-lg font-medium leading-snug text-primary md:text-xl mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-primary/80 mb-3">{item.desc}</p>
                    <a 
                      href={item.href}
                      className="inline-flex items-center text-xs sm:text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      Learn More
                      <svg className="ml-1 w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold leading-tight text-primary md:text-4xl">
              Captivate your audience with beautiful designs
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Choose from our professional design services to showcase your brand, promote your business, or create stunning visuals.
            </p>
            <div className="mt-6 flex gap-3">
              <Button asChild>
                <a href="/quote">Get Your Quote</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/services">Browse Services</a>
              </Button>
            </div>
          </div>
          <div className="aspect-video w-full rounded-lg overflow-hidden border shadow-md">
            <img 
              src="/assets/broucher.png" 
              alt="Professional Design Services"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* PosterMyWall-inspired: Templates showcase (added) */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="mb-4 flex items-baseline justify-between">
          <h3 className="text-xl font-semibold text-primary">Popular design services</h3>
          <a href="/services" className="text-sm underline-offset-2 hover:underline">More services</a>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Logo Design",
              img: "https://images.unsplash.com/photo-1600880292089-90e7e86ef2b6?auto=format&fit=crop&w=1200&q=60",
              href: "/services#logo-design",
            },
            {
              title: "Business Cards",
              img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=60",
              href: "/services/visiting-cards",
            },
            {
              title: "Banner Design",
              img: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1200&q=60",
              href: "/services/flex-printing",
            },
            {
              title: "Poster Design",
              img: "https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?auto=format&fit=crop&w=1200&q=60",
              href: "/services/poster-flyer-design",
            },
          ].map((item, i) => (
            <Card key={i} className="overflow-hidden">
              <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                <img src={item.img} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2 text-base">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center gap-2 text-xs text-muted-foreground">
                <Badge variant="outline">Design</Badge>
                <span>•</span>
                <span>Professional</span>
              </CardContent>
              <CardContent className="flex items-center justify-between">
                <Button size="sm" asChild>
                  <a href="/contact">Order Now</a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href={item.href}>Learn More</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* PosterMyWall-inspired: Categories & sizes (added) */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h3 className="mb-4 text-xl font-semibold text-primary">Browse by category</h3>
        <div className="flex flex-wrap gap-2">
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
          <h3 className="mb-8 text-center text-xl font-semibold text-primary">Design in 5 easy steps</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { n: 1, t: "Choose a service", d: "Pick from our design services." },
              { n: 2, t: "Get a quote", d: "Get transparent pricing instantly." },
              { n: 3, t: "Share requirements", d: "Tell us your design needs." },
              { n: 4, t: "Review designs", d: "Get multiple concepts to choose from." },
              { n: 5, t: "Get final files", d: "Download print-ready files." },
            ].map((item) => (
              <div key={item.n} className="rounded-lg border bg-card p-5">
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
        <div className="rounded-lg border bg-card p-8 text-center">
          <h3 className="text-2xl font-semibold text-primary">Professional design services</h3>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
            Create stunning designs for your business. From logos to complete brand identity - we bring your vision to life.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button asChild>
              <a href="/services">Start your project</a>
            </Button>
            <a href="/services" className="text-sm underline-offset-2 hover:underline">Explore services</a>
          </div>
        </div>
      </section>

      {/* Testimonials (added) */}
      <section className="w-full border-t bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h3 className="mb-8 text-center text-xl font-semibold text-primary">What our customers say</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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