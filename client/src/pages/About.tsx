import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Star, Users, Award, Clock, Zap, Shield, Heart, Palette, FileText, Camera, Share2, Target, Lightbulb, Globe, Package, Truck } from "lucide-react";

export default function AboutPage() {
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
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-6 md:text-6xl">
              About <span className="text-primary font-black">Inkuva</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Your one-stop creative and printing hub where ideas take shape, designs come alive, and brands are built to stand out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/services">Explore Our Services</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">Get In Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-primary">Our Mission</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To make professional design and printing services accessible, affordable, and impactful for everyone — helping brands communicate better, connect deeper, and grow faster.
              </p>
            </Card>

            <Card className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Lightbulb className="h-8 w-8 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-primary">Our Vision</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be India's most trusted creative design and printing brand by empowering businesses with visually stunning, high-quality, and cost-effective branding solutions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Trusted by Thousands</h2>
            <p className="text-gray-700">Join our growing community of satisfied clients</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">What We Offer</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              From creative design to premium printing, we cover all your branding needs under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-primary">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">Premium Printing Solutions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {printingSolutions.map((solution, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary">{solution.title}</h4>
                      <p className="text-gray-600 text-sm">{solution.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Incuva?</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We combine creativity, technology, and craftsmanship to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    {reason.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Unique Edge */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Unique Edge</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                What sets Incuva apart is our fusion of creativity and technology. We don't just design graphics — we build brand experiences.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Our digital and print solutions are optimized for real-world impact, helping businesses grow through visuals that connect, convert, and captivate. From pixel-perfect social media creatives to high-resolution marketing prints, we bring consistency, innovation, and excellence in every piece of work we deliver.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a href="/quote">Start Your Project</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/explore">View Our Work</a>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Card className="p-4">
                  <div className="flex items-center gap-3">
                    <Palette className="h-6 w-6 text-primary" />
                    <span className="font-semibold">Creative Design</span>
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center gap-3">
                    <Package className="h-6 w-6 text-primary" />
                    <span className="font-semibold">Premium Printing</span>
                  </div>
                </Card>
              </div>
              <div className="space-y-4 mt-8">
                <Card className="p-4">
                  <div className="flex items-center gap-3">
                    <Globe className="h-6 w-6 text-primary" />
                    <span className="font-semibold">Digital Solutions</span>
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center gap-3">
                    <Truck className="h-6 w-6 text-primary" />
                    <span className="font-semibold">Fast Delivery</span>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Build Something Incredible Together</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Your brand deserves to be seen, remembered, and admired — and that's exactly what we do at Incuva.
            Join hundreds of satisfied clients who have trusted us with their creative and printing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="/contact">Get Started Today</a>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary" asChild>
              <a href="/services">Explore Services</a>
            </Button>
          </div>
      </div>
      </section>
    </main>
  );
}
