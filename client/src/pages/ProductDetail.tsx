import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  ShoppingCart, 
  Heart, 
  Share2, 
  Star, 
  CheckCircle, 
  Truck, 
  Shield, 
  Clock,
  Plus,
  Minus,
  Eye,
  Download,
  MessageCircle,
  ThumbsUp
} from "lucide-react";
import { useCart } from "@/context/CartContext";

// Mock product data - in real app this would come from API
const productData: { [key: string]: any } = {
  "home-poster-1": {
    id: "home-poster-1",
    title: "Poster Design",
    price: "₹199",
    originalPrice: "₹299",
    discount: 33,
    image: "/assets/poster1.png",
    description: "Professional poster design for events and marketing campaigns with modern typography and eye-catching visuals",
    category: "Posters & Flyers",
    specifications: [
      "High-resolution design (300 DPI)",
      "Multiple file formats (PDF, PNG, JPG)",
      "Print-ready files included",
      "Unlimited revisions",
      "Fast delivery (24-48 hours)"
    ],
    features: [
      "Custom typography",
      "Professional color scheme",
      "Print optimization",
      "Social media ready"
    ],
    rating: 4.9,
    reviews: 124,
    inStock: true,
    estimatedDelivery: "1-2 business days",
    supplier: "Incuva Design Studio",
    location: "Mumbai, India"
  },
  "home-business-1": {
    id: "home-business-1",
    title: "Business Cards",
    price: "₹99",
    originalPrice: "₹149",
    discount: 33,
    image: "/assets/buisnesscard1.png",
    description: "Professional business card design and printing with elegant layout and premium quality materials",
    category: "Business Cards",
    specifications: [
      "Premium cardstock (350 GSM)",
      "Double-sided printing",
      "Glossy or matte finish",
      "Standard size (3.5x2 inches)",
      "Bleed included"
    ],
    features: [
      "Professional layout",
      "Brand consistency",
      "High-quality printing",
      "Quick turnaround"
    ],
    rating: 4.8,
    reviews: 89,
    inStock: true,
    estimatedDelivery: "2-3 business days",
    supplier: "Incuva Design Studio",
    location: "Mumbai, India"
  },
  "home-flex-1": {
    id: "home-flex-1",
    title: "Flex Banners",
    price: "₹299",
    originalPrice: "₹399",
    discount: 25,
    image: "/assets/flex1.jpg",
    description: "High-quality flex banner design and printing for outdoor advertising and promotional campaigns",
    category: "Flex & Banners",
    specifications: [
      "Frontlit flex material",
      "Weather resistant",
      "Custom sizes available",
      "Eyelet holes included",
      "UV resistant printing"
    ],
    features: [
      "Durable material",
      "Vibrant colors",
      "Professional design",
      "Easy installation"
    ],
    rating: 4.9,
    reviews: 67,
    inStock: true,
    estimatedDelivery: "3-5 business days",
    supplier: "Incuva Design Studio",
    location: "Mumbai, India"
  },
  "home-brochure-1": {
    id: "home-brochure-1",
    title: "Brochures",
    price: "₹399",
    originalPrice: "₹599",
    discount: 33,
    image: "/assets/broucher.png",
    description: "Professional brochure design and printing for marketing materials and product catalogs",
    category: "Brochures & Catalogs",
    specifications: [
      "Premium paper (200 GSM)",
      "Full-color printing",
      "Folding options available",
      "Glossy or matte finish",
      "Bulk discounts available"
    ],
    features: [
      "Professional layout",
      "High-quality imagery",
      "Brand consistency",
      "Marketing focused"
    ],
    rating: 4.7,
    reviews: 45,
    inStock: true,
    estimatedDelivery: "3-4 business days",
    supplier: "Incuva Design Studio",
    location: "Mumbai, India"
  }
};

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = productData[id || ""];

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Product Not Found</h2>
          <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/")}>Go Home</Button>
        </Card>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      description: product.description,
      supplier: product.supplier,
      location: product.location,
      specifications: product.specifications,
      category: product.category
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.title,
        text: product.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-white border-b sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 hover:bg-primary/10"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`rounded-full ${isWishlisted ? 'text-red-500' : 'text-gray-500'}`}
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={handleShare}
                className="rounded-full"
              >
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 group">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {product.discount > 0 && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.discount}% OFF
                </div>
              )}
            </div>
            
            {/* Additional Images */}
            <div className="grid grid-cols-4 gap-2">
              {[product.image, product.image, product.image, product.image].map((img, index) => (
                <div
                  key={index}
                  className={`aspect-square rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
                    selectedImage === index ? 'border-primary' : 'border-transparent hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={img}
                    alt={`${product.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="rounded-full">
                  {product.category}
                </Badge>
                {product.inStock ? (
                  <Badge className="bg-green-100 text-green-700 rounded-full">
                    In Stock
                  </Badge>
                ) : (
                  <Badge variant="destructive" className="rounded-full">
                    Out of Stock
                  </Badge>
                )}
              </div>
              
              <h1 className="text-3xl font-bold text-primary mb-4">{product.title}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{product.rating}</span>
                  <span className="text-muted-foreground">({product.reviews} reviews)</span>
                </div>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {product.description}
              </p>
            </div>

            {/* Pricing */}
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl font-bold text-primary">{product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-2xl text-muted-foreground line-through">{product.originalPrice}</span>
                    <span className="text-green-600 font-semibold">
                      Save ₹{parseInt(product.originalPrice.replace('₹', '')) - parseInt(product.price.replace('₹', ''))}
                    </span>
                  </>
                )}
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Truck className="w-4 h-4" />
                <span>Delivery: {product.estimatedDelivery}</span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center border rounded-full">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-10 w-10 p-0 rounded-full"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 font-semibold">{quantity}</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-10 w-10 p-0 rounded-full"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="flex-1 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white rounded-full py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-6"
                  asChild
                >
                  <a href="/contact">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Contact
                  </a>
                </Button>
              </div>
            </div>

            {/* Features */}
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Specifications */}
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Specifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {product.specifications.map((spec: string, index: number) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm">{spec}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Supplier Info */}
            <Card className="rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-primary">{product.supplier}</h3>
                    <p className="text-sm text-muted-foreground">{product.location}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-600 font-medium">Verified</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.values(productData).slice(0, 4).map((item: any) => (
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
                      onClick={() => navigate(`/product/${item.id}`)}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-primary mb-1 group-hover:text-primary/80 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary">{item.price}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-muted-foreground">{item.rating}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
