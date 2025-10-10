import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Download, Heart, Share2, Filter, Grid, List, Star, Eye, ShoppingCart } from "lucide-react";

export default function LogoDesignExplore() {
  const logoDesigns = [
    {
      id: 1,
      title: "Modern Tech Logo",
      category: "Technology",
      style: "Minimalist",
      price: 499,
      image: "https://images.unsplash.com/photo-1600880292089-90e7e86ef2b6?auto=format&fit=crop&w=600&q=60",
      description: "Clean and modern logo design for tech companies",
      tags: ["Tech", "Modern", "Minimalist"],
      rating: 4.9,
      downloads: 3200
    },
    {
      id: 2,
      title: "Restaurant Brand Logo",
      category: "Food & Beverage",
      style: "Vintage",
      price: 399,
      image: "https://images.unsplash.com/photo-1559027615-5ee46a1f2280?auto=format&fit=crop&w=600&q=60",
      description: "Warm and inviting logo for restaurants and cafes",
      tags: ["Restaurant", "Food", "Vintage"],
      rating: 4.8,
      downloads: 2800
    },
    {
      id: 3,
      title: "Fitness Brand Logo",
      category: "Health & Fitness",
      style: "Bold",
      price: 449,
      image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=600&q=60",
      description: "Dynamic and energetic logo for fitness brands",
      tags: ["Fitness", "Health", "Dynamic"],
      rating: 4.7,
      downloads: 2100
    },
    {
      id: 4,
      title: "Creative Agency Logo",
      category: "Creative",
      style: "Abstract",
      price: 599,
      image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=600&q=60",
      description: "Creative and artistic logo for design agencies",
      tags: ["Creative", "Agency", "Abstract"],
      rating: 4.9,
      downloads: 1500
    },
    {
      id: 5,
      title: "Medical Practice Logo",
      category: "Healthcare",
      style: "Professional",
      price: 399,
      image: "https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?auto=format&fit=crop&w=600&q=60",
      description: "Trustworthy and professional medical logo",
      tags: ["Medical", "Healthcare", "Professional"],
      rating: 4.8,
      downloads: 1900
    },
    {
      id: 6,
      title: "Fashion Brand Logo",
      category: "Fashion",
      style: "Elegant",
      price: 549,
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=60",
      description: "Sophisticated logo for fashion and lifestyle brands",
      tags: ["Fashion", "Elegant", "Lifestyle"],
      rating: 4.9,
      downloads: 2500
    }
  ];

  const categories = ["All", "Technology", "Food & Beverage", "Health & Fitness", "Creative", "Healthcare", "Fashion"];
  const styles = ["All Styles", "Minimalist", "Vintage", "Bold", "Abstract", "Professional", "Elegant"];

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <a href="/explore">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Explore
              </a>
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-primary">Logo Design Portfolio</h1>
              <p className="text-muted-foreground">Browse our collection of professional logo designs</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Filters */}
        <div className="mb-8 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <span className="font-medium">Filters:</span>
          </div>
          
          <Select defaultValue="all">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat.toLowerCase()}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Style" />
            </SelectTrigger>
            <SelectContent>
              {styles.map((style) => (
                <SelectItem key={style} value={style.toLowerCase()}>
                  {style}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Input placeholder="Search logos..." className="w-64" />
          
          <div className="ml-auto flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Grid className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Design Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {logoDesigns.map((design) => (
            <Card key={design.id} className="group overflow-hidden">
              <div className="aspect-square w-full overflow-hidden bg-muted">
                <img
                  src={design.image}
                  alt={design.title}
                  className="h-full w-full object-contain p-4 transition-transform group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-2">
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg line-clamp-1">{design.title}</CardTitle>
                    <CardDescription className="mt-1">{design.description}</CardDescription>
                  </div>
                  <Badge variant="outline">{design.style}</Badge>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-amber-500 fill-current" />
                      <span className="text-sm font-medium">{design.rating}</span>
                      <span className="text-xs text-muted-foreground">({design.downloads} downloads)</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">₹{design.price}</div>
                      <div className="text-xs text-muted-foreground">{design.category}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {design.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1" size="sm" asChild>
                      <a href="/quote">Order Now</a>
                    </Button>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline">
            Load More Designs
          </Button>
        </div>
      </div>
    </main>
  );
}
