import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Download, Heart, Share2, Filter, Grid, List, Star, Eye, ShoppingCart } from "lucide-react";

export default function FlexPrintingExplore() {
  const flexDesigns = [
    {
      id: 1,
      title: "Business Promotion Banner",
      category: "Frontlit",
      size: "3x6 feet",
      price: 899,
      image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=600&q=60",
      description: "High-quality frontlit flex banner for outdoor advertising",
      tags: ["Business", "Promotion", "Outdoor"],
      rating: 4.8,
      downloads: 1250
    },
    {
      id: 2,
      title: "Event Banner Design",
      category: "Backlit",
      size: "4x8 feet",
      price: 1299,
      image: "https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?auto=format&fit=crop&w=600&q=60",
      description: "Eye-catching backlit banner for events and exhibitions",
      tags: ["Event", "Exhibition", "Backlit"],
      rating: 4.9,
      downloads: 2100
    },
    {
      id: 3,
      title: "Store Front Banner",
      category: "Frontlit",
      size: "2x4 feet",
      price: 599,
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=60",
      description: "Professional store front banner design",
      tags: ["Store", "Retail", "Professional"],
      rating: 4.7,
      downloads: 890
    },
    {
      id: 4,
      title: "Festival Banner",
      category: "Frontlit",
      size: "5x10 feet",
      price: 1899,
      image: "https://images.unsplash.com/photo-1559027615-5ee46a1f2280?auto=format&fit=crop&w=600&q=60",
      description: "Vibrant festival and celebration banner",
      tags: ["Festival", "Celebration", "Colorful"],
      rating: 4.9,
      downloads: 3200
    },
    {
      id: 5,
      title: "Corporate Banner",
      category: "Backlit",
      size: "3x6 feet",
      price: 1099,
      image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=600&q=60",
      description: "Professional corporate branding banner",
      tags: ["Corporate", "Professional", "Branding"],
      rating: 4.8,
      downloads: 1500
    },
    {
      id: 6,
      title: "Sale Promotion Banner",
      category: "Frontlit",
      size: "2x3 feet",
      price: 499,
      image: "https://images.unsplash.com/photo-1600880292089-90e7e86ef2b6?auto=format&fit=crop&w=600&q=60",
      description: "Attention-grabbing sale promotion banner",
      tags: ["Sale", "Promotion", "Discount"],
      rating: 4.6,
      downloads: 1800
    }
  ];

  const categories = ["All", "Frontlit", "Backlit", "Business", "Event", "Sale"];
  const sizes = ["All Sizes", "2x3 feet", "3x6 feet", "4x8 feet", "5x10 feet", "Custom"];

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
              <h1 className="text-3xl font-bold text-primary">Flex Printing Designs</h1>
              <p className="text-muted-foreground">Choose from our collection of professional flex banner designs</p>
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
              <SelectValue placeholder="Size" />
            </SelectTrigger>
            <SelectContent>
              {sizes.map((size) => (
                <SelectItem key={size} value={size.toLowerCase()}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Input placeholder="Search designs..." className="w-64" />
          
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
          {flexDesigns.map((design) => (
            <Card key={design.id} className="group overflow-hidden">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={design.image}
                  alt={design.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
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
                  <Badge variant="outline">{design.category}</Badge>
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
                      <div className="text-xs text-muted-foreground">{design.size}</div>
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
                    <Button className="flex-1" size="sm">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Order Now
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
