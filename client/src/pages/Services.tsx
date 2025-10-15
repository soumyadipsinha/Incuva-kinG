import { useMemo, useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";
import { 
  CheckCircle, 
  Star, 
  Award, 
  FileText, 
  Palette, 
  Camera, 
  Share2, 
  Users, 
  Clock, 
  Zap, 
  Shield, 
  Heart, 
  Search,
  MapPin,
  Phone,
  Filter,
  Grid3X3,
  List,
  ChevronDown,
  ShoppingCart,
  X,
  Trash2
} from "lucide-react";

interface Service {
  id: string;
  title: string;
  price: string;
  image: string;
  location: string;
  supplier: string;
  rating: number;
  reviewCount: number;
  yearsInBusiness: number;
  responseRate: number;
  isGstVerified: boolean;
  isTrustSealVerified: boolean;
  isLeadingSupplier: boolean;
  isStarSupplier: boolean;
  specifications: string[];
  category: string;
  description: string;
}


export default function ServicesPage() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showCart, setShowCart] = useState(false);
  
  // Use global cart context
  const { cartItems, addToCart, removeFromCart, updateQuantity, getTotalItems } = useCart();
  
  const categories = [
    { id: "all", name: "All Services", icon: "🏪" },
    { id: "design", name: "Design Services", icon: "🎨" },
    { id: "printing", name: "Printing Services", icon: "🖨️" },
    { id: "albums", name: "Album Services", icon: "📸" },
    { id: "branding", name: "Branding", icon: "🏷️" },
    { id: "promotional", name: "Promotional Items", icon: "🎁" },
    { id: "packages", name: "Combo Packages", icon: "📦" }
  ];

  const services: Service[] = [
    // Design Services
    {
      id: "1",
      title: "Logo Design",
      price: "₹499",
      image: "/assets/showlogo1.png",
      location: "Kolkata",
      supplier: "Incuva Design Studio",
      rating: 4.2,
      reviewCount: 116,
      yearsInBusiness: 5,
      responseRate: 79,
      isGstVerified: true,
      isTrustSealVerified: true,
      isLeadingSupplier: true,
      isStarSupplier: false,
      specifications: ["3 Logo Concepts", "Unlimited Revisions", "All File Formats"],
      category: "design",
      description: "Professional logo design with multiple concepts and unlimited revisions"
    },
    {
      id: "2",
      title: "Business Card Design (Single Side)",
      price: "₹99",
      image: "/assets/buisnesscard1.png",
      location: "Kolkata",
      supplier: "Incuva Design Studio",
      rating: 4.5,
      reviewCount: 89,
      yearsInBusiness: 5,
      responseRate: 85,
      isGstVerified: true,
      isTrustSealVerified: true,
      isLeadingSupplier: true,
      isStarSupplier: false,
      specifications: ["Single Sided", "Print Ready", "High Resolution"],
      category: "design",
      description: "Professional single-sided business card design"
    },
    {
      id: "3",
      title: "Business Card Design (Double Side)",
      price: "₹149",
      image: "/assets/buisnesscard2.png",
      location: "Kolkata",
      supplier: "Incuva Design Studio",
      rating: 4.5,
      reviewCount: 89,
      yearsInBusiness: 5,
      responseRate: 85,
      isGstVerified: true,
      isTrustSealVerified: true,
      isLeadingSupplier: true,
      isStarSupplier: false,
      specifications: ["Double Sided", "Print Ready", "High Resolution"],
      category: "design",
      description: "Professional double-sided business card design"
    },
    {
      id: "4",
      title: "Poster Design (A3 Size)",
      price: "₹149",
      image: "/assets/poster1.png",
      location: "Kolkata",
      supplier: "Incuva Design Studio",
      rating: 4.3,
      reviewCount: 134,
      yearsInBusiness: 5,
      responseRate: 83,
      isGstVerified: true,
      isTrustSealVerified: true,
      isLeadingSupplier: true,
      isStarSupplier: false,
      specifications: ["A3 Size", "High Resolution", "Print Ready"],
      category: "design",
      description: "Professional poster design for events and promotions"
    },
    {
      id: "5",
      title: "Flex/Banner Design (Per Layout)",
      price: "₹199",
      image: "/assets/flex1.jpg",
      location: "Kolkata",
      supplier: "Incuva Design Studio",
      rating: 4.3,
      reviewCount: 134,
      yearsInBusiness: 5,
      responseRate: 83,
      isGstVerified: true,
      isTrustSealVerified: true,
      isLeadingSupplier: true,
      isStarSupplier: false,
      specifications: ["Custom Size", "Print Ready", "High Resolution"],
      category: "design",
      description: "Professional flex banner design for outdoor advertising"
    },
    {
      id: "6",
      title: "Brochure Design (Tri-fold)",
      price: "₹399",
      image: "/assets/broucher.png",
      location: "Kolkata",
      supplier: "Incuva Design Studio",
      rating: 4.4,
      reviewCount: 98,
      yearsInBusiness: 5,
      responseRate: 84,
      isGstVerified: true,
      isTrustSealVerified: true,
      isLeadingSupplier: true,
      isStarSupplier: false,
      specifications: ["Tri-fold Layout", "Print Ready", "Professional Design"],
      category: "design",
      description: "Professional tri-fold brochure design"
    },
    {
      id: "7",
      title: "Menu Design (Restaurant/Cloud)",
      price: "₹499",
      image: "/assets/poster2.png",
      location: "Kolkata",
      supplier: "Incuva Design Studio",
      rating: 4.6,
      reviewCount: 76,
      yearsInBusiness: 5,
      responseRate: 87,
      isGstVerified: true,
      isTrustSealVerified: true,
      isLeadingSupplier: true,
      isStarSupplier: false,
      specifications: ["Restaurant Menu", "Cloud Kitchen", "Print Ready"],
      category: "design",
      description: "Professional menu design for restaurants and cloud kitchens"
    },
    {
      id: "8",
      title: "Social Media Post (Per Creative)",
      price: "₹149",
      image: "/assets/poster3.png",
      location: "Kolkata",
      supplier: "Incuva Design Studio",
      rating: 4.3,
      reviewCount: 156,
      yearsInBusiness: 5,
      responseRate: 82,
      isGstVerified: true,
      isTrustSealVerified: true,
      isLeadingSupplier: true,
      isStarSupplier: false,
      specifications: ["All Platforms", "High Resolution", "Engaging Design"],
      category: "design",
      description: "Professional social media post design"
    },
    {
      id: "9",
      title: "Monthly Social Media Pack (30 Creatives)",
      price: "₹2,999",
      image: "/assets/poster4.png",
      location: "Kolkata",
      supplier: "Incuva Design Studio",
      rating: 4.7,
      reviewCount: 89,
      yearsInBusiness: 5,
      responseRate: 91,
      isGstVerified: true,
      isTrustSealVerified: true,
      isLeadingSupplier: true,
      isStarSupplier: false,
      specifications: ["30 Creatives", "All Platforms", "Monthly Delivery"],
      category: "design",
      description: "Complete monthly social media content pack"
    },
    {
      id: "10",
      title: "Reel/Short Video Graphics (Per Reel)",
      price: "₹249",
      image: "/assets/reels1.mp4",
      location: "Kolkata",
      supplier: "Incuva Design Studio",
      rating: 4.4,
      reviewCount: 67,
      yearsInBusiness: 5,
      responseRate: 78,
      isGstVerified: true,
      isTrustSealVerified: true,
      isLeadingSupplier: true,
      isStarSupplier: false,
      specifications: ["Video Graphics", "Trending Design", "All Formats"],
      category: "design",
      description: "Professional graphics for reels and short videos"
    },
    {
      id: "11",
      title: "Resume Design (Professional)",
      price: "₹99",
      image: "/assets/resumebanner.png",
      location: "Kolkata",
      supplier: "Incuva Design Studio",
      rating: 4.5,
      reviewCount: 123,
      yearsInBusiness: 5,
      responseRate: 86,
      isGstVerified: true,
      isTrustSealVerified: true,
      isLeadingSupplier: true,
      isStarSupplier: false,
      specifications: ["Professional Layout", "ATS Friendly", "Print Ready"],
      category: "design",
      description: "Professional resume design for job applications"
    },
    {
      id: "12",
      title: "Catalogue/Product Sheet Design",
      price: "₹299",
      image: "/assets/broucher2.png",
      location: "Kolkata",
      supplier: "Incuva Design Studio",
      rating: 4.3,
      reviewCount: 95,
      yearsInBusiness: 5,
      responseRate: 81,
      isGstVerified: true,
      isTrustSealVerified: true,
      isLeadingSupplier: true,
      isStarSupplier: false,
      specifications: ["Product Catalog", "Professional Layout", "Print Ready"],
      category: "design",
      description: "Professional catalogue and product sheet design"
    },
    {
      id: "13",
      title: "Canvera Album Design (Per Sheet)",
      price: "₹50",
      image: "/assets/canverastylealbum1.png",
      location: "Kolkata",
      supplier: "Incuva Album Studio",
      rating: 4.7,
      reviewCount: 156,
      yearsInBusiness: 5,
      responseRate: 91,
      isGstVerified: true,
      isTrustSealVerified: true,
      isLeadingSupplier: true,
      isStarSupplier: false,
      specifications: ["Per Sheet", "Premium Design", "Print Ready"],
      category: "albums",
      description: "Professional Canvera album design per sheet"
    },
    // Printing Services
    {
      id: "14",
      title: "Visiting Cards (300 GSM, Matt)",
      price: "₹299/100",
      image: "/assets/buisnesscard1.png",
      location: "Kolkata",
      supplier: "Incuva Print Solutions",
      rating: 4.4,
      reviewCount: 178,
      yearsInBusiness: 5,
      responseRate: 88,
      isGstVerified: true,
      isTrustSealVerified: true,
      isLeadingSupplier: false,
      isStarSupplier: true,
      specifications: ["300 GSM", "Matt Finish", "100 Pieces"],
      category: "printing",
      description: "High-quality visiting cards with matt finish"
    },
    {
      id: "15",
      title: "Letterhead (A4, 100 GSM)",
      price: "₹399/100",
      image: "/assets/buisnessbanner.png",
      location: "Kolkata",
      supplier: "Incuva Print Solutions",
      rating: 4.3,
      reviewCount: 134,
      yearsInBusiness: 5,
      responseRate: 85,
      isGstVerified: true,
      isTrustSealVerified: true,
      isLeadingSupplier: false,
      isStarSupplier: true,
      specifications: ["A4 Size", "100 GSM", "100 Pieces"],
      category: "printing",
      description: "Professional letterhead printing"
    },
    {
      id: "16",
      title: "Flex Banner Printing (13oz, Color)",
      price: "₹15-20/sq ft",
      image: "/assets/flex1.jpg",
      location: "Kolkata",
      supplier: "Incuva Print Solutions",
      rating: 4.3,
      reviewCount: 74,
      yearsInBusiness: 5,
      responseRate: 82,
      isGstVerified: true,
      isTrustSealVerified: true,
      isLeadingSupplier: false,
      isStarSupplier: true,
      specifications: ["13oz Material", "Weather Resistant", "UV Protected"],
      category: "printing",
      description: "High-quality flex banner printing with weather-resistant material"
    },
    {
      id: "17",
      title: "Vinyl Printing (Stickers/Signage)",
      price: "₹25-35/sq ft",
      image: "/assets/flex2.jpg",
      location: "Kolkata",
      supplier: "Incuva Print Solutions",
      rating: 4.1,
      reviewCount: 92,
      yearsInBusiness: 5,
      responseRate: 78,
      isGstVerified: true,
      isTrustSealVerified: true,
      isLeadingSupplier: false,
      isStarSupplier: true,
      specifications: ["High Quality Vinyl", "Outdoor Durability", "Custom Sizes"],
      category: "printing",
      description: "Professional vinyl printing for stickers and signage"
    },
    {
      id: "18",
      title: "Vinyl with Sunboard (3mm)",
      price: "₹100-135/sq ft",
      image: "/assets/flex3.jpg",
      location: "Kolkata",
      supplier: "Incuva Print Solutions",
      rating: 4.2,
      reviewCount: 67,
      yearsInBusiness: 5,
      responseRate: 79,
      isGstVerified: true,
      isTrustSealVerified: true,
      isLeadingSupplier: false,
      isStarSupplier: true,
      specifications: ["3mm Sunboard", "Vinyl Print", "Rigid Structure"],
      category: "printing",
      description: "Vinyl printing with 3mm sunboard backing"
    },
    {
      id: "19",
      title: "Pamphlets (A5, 130 GSM, Color)",
      price: "₹899/1000",
      image: "/assets/poster1.png",
      location: "Kolkata",
      supplier: "Incuva Print Solutions",
      rating: 4.4,
      reviewCount: 89,
      yearsInBusiness: 5,
      responseRate: 83,
      isGstVerified: true,
      isTrustSealVerified: true,
      isLeadingSupplier: false,
      isStarSupplier: true,
      specifications: ["A5 Size", "130 GSM", "1000 Pieces"],
      category: "printing",
      description: "High-quality color pamphlet printing"
    },
    {
      id: "20",
      title: "Brochure Print (Tri-fold, 170 GSM)",
      price: "₹1,499/500",
      image: "/assets/broucher.png",
      location: "Kolkata",
      supplier: "Incuva Print Solutions",
      rating: 4.5,
      reviewCount: 112,
      yearsInBusiness: 5,
      responseRate: 86,
      isGstVerified: true,
      isTrustSealVerified: true,
      isLeadingSupplier: false,
      isStarSupplier: true,
      specifications: ["Tri-fold", "170 GSM", "500 Pieces"],
      category: "printing",
      description: "Professional tri-fold brochure printing"
    },
    {
      id: "21",
      title: "Canvera Album (40-50 Pages)",
      price: "₹3,000-9,000",
      image: "/assets/canverastylealbum1.png",
      location: "Kolkata",
      supplier: "Incuva Album Studio",
      rating: 4.7,
      reviewCount: 156,
      yearsInBusiness: 5,
      responseRate: 91,
      isGstVerified: true,
      isTrustSealVerified: true,
      isLeadingSupplier: true,
      isStarSupplier: false,
      specifications: ["40-50 Pages", "Premium Binding", "Design Included"],
      category: "albums",
      description: "Premium Canvera-style wedding album with professional design and binding"
    },
    {
      id: "22",
      title: "Certificate Printing",
      price: "₹15-25/piece",
      image: "/assets/poster2.png",
      location: "Kolkata",
      supplier: "Incuva Print Solutions",
      rating: 4.3,
      reviewCount: 78,
      yearsInBusiness: 5,
      responseRate: 80,
      isGstVerified: true,
      isTrustSealVerified: true,
      isLeadingSupplier: false,
      isStarSupplier: true,
      specifications: ["High Quality", "Professional Finish", "Custom Design"],
      category: "printing",
      description: "Professional certificate printing service"
    },
    {
      id: "23",
      title: "Poster (Glossy A3)",
      price: "₹20-30/piece",
      image: "/assets/poster3.png",
      location: "Kolkata",
      supplier: "Incuva Print Solutions",
      rating: 4.2,
      reviewCount: 95,
      yearsInBusiness: 5,
      responseRate: 81,
      isGstVerified: true,
      isTrustSealVerified: true,
      isLeadingSupplier: false,
      isStarSupplier: true,
      specifications: ["A3 Size", "Glossy Finish", "High Quality"],
      category: "printing",
      description: "High-quality glossy A3 poster printing"
    },
    {
      id: "24",
      title: "Mug Print (Sublimation)",
      price: "₹199/piece",
      image: "/assets/poster4.png",
      location: "Kolkata",
      supplier: "Incuva Print Solutions",
      rating: 4.4,
      reviewCount: 67,
      yearsInBusiness: 5,
      responseRate: 76,
      isGstVerified: true,
      isTrustSealVerified: true,
      isLeadingSupplier: false,
      isStarSupplier: true,
      specifications: ["Sublimation Print", "Dishwasher Safe", "Custom Design"],
      category: "printing",
      description: "Custom mug printing with sublimation technology"
    },
    {
      id: "25",
      title: "T-Shirt Print (Custom Design)",
      price: "₹299-499/piece",
      image: "/assets/tshirst1.jpg",
      location: "Kolkata",
      supplier: "Incuva Apparel",
      rating: 4.4,
      reviewCount: 67,
      yearsInBusiness: 5,
      responseRate: 76,
      isGstVerified: true,
      isTrustSealVerified: true,
      isLeadingSupplier: false,
      isStarSupplier: true,
      specifications: ["Sublimation Print", "Premium Quality", "Custom Sizes"],
      category: "printing",
      description: "Custom t-shirt printing with sublimation technology and premium quality"
    },
    {
      id: "26",
      title: "Iron Structure For Banner",
      price: "₹33-55/sq ft",
      image: "/assets/buisnessbanner.png",
      location: "Kolkata",
      supplier: "Incuva Print Solutions",
      rating: 4.1,
      reviewCount: 45,
      yearsInBusiness: 5,
      responseRate: 74,
      isGstVerified: true,
      isTrustSealVerified: true,
      isLeadingSupplier: false,
      isStarSupplier: true,
      specifications: ["Iron Structure", "Weather Resistant", "Custom Size"],
      category: "printing",
      description: "Iron structure fabrication for banner installation"
    },
    // Combo Packages
    {
      id: "27",
      title: "Branding Starter (Logo + Card + Letterhead)",
      price: "₹799",
      image: "/assets/buisnessbanner.png",
      location: "Kolkata",
      supplier: "Incuva Branding",
      rating: 4.6,
      reviewCount: 203,
      yearsInBusiness: 5,
      responseRate: 88,
      isGstVerified: true,
      isTrustSealVerified: true,
      isLeadingSupplier: true,
      isStarSupplier: false,
      specifications: ["Logo + Card + Letterhead", "Brand Guidelines", "All Formats"],
      category: "packages",
      description: "Complete branding package including logo, business card, and letterhead"
    },
    {
      id: "28",
      title: "Festival Graphics (10 Creatives Pack)",
      price: "₹999",
      image: "/assets/poster1.png",
      location: "Kolkata",
      supplier: "Incuva Design Studio",
      rating: 4.5,
      reviewCount: 134,
      yearsInBusiness: 5,
      responseRate: 87,
      isGstVerified: true,
      isTrustSealVerified: true,
      isLeadingSupplier: true,
      isStarSupplier: false,
      specifications: ["10 Creatives", "All Platforms", "Print Ready"],
      category: "packages",
      description: "Complete festival graphics pack with 10 creative designs"
    },
    {
      id: "29",
      title: "Company Festive Pack (22+1 Festival Designs)",
      price: "₹1,399",
      image: "/assets/poster2.png",
      location: "Kolkata",
      supplier: "Incuva Design Studio",
      rating: 4.7,
      reviewCount: 89,
      yearsInBusiness: 5,
      responseRate: 92,
      isGstVerified: true,
      isTrustSealVerified: true,
      isLeadingSupplier: true,
      isStarSupplier: false,
      specifications: ["22+1 Designs", "1-day Delivery", "All Formats"],
      category: "packages",
      description: "Complete company festive pack with 22+1 festival designs"
    },
    {
      id: "30",
      title: "Business Launch Kit (Logo + Brochure + Flex + 5 Social Media)",
      price: "₹1,999",
      image: "/assets/buisnessbanner.png",
      location: "Kolkata",
      supplier: "Incuva Branding",
      rating: 4.8,
      reviewCount: 156,
      yearsInBusiness: 5,
      responseRate: 94,
      isGstVerified: true,
      isTrustSealVerified: true,
      isLeadingSupplier: true,
      isStarSupplier: false,
      specifications: ["Logo + Brochure + Flex", "5 Social Media Posts", "Complete Branding"],
      category: "packages",
      description: "Complete business launch kit with all essential branding materials"
    }
  ];

  const filteredServices = useMemo(() => {
    let filtered = services;

    if (selectedCategory !== "all") {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    if (query.trim()) {
      const searchQuery = query.toLowerCase();
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchQuery) ||
        service.supplier.toLowerCase().includes(searchQuery) ||
        service.specifications.some(spec => spec.toLowerCase().includes(searchQuery)) ||
        service.description.toLowerCase().includes(searchQuery)
      );
    }

    return filtered;
  }, [query, selectedCategory, services]);

  const handleAddToCart = (service: Service) => {
    addToCart({
      id: service.id,
      title: service.title,
      price: service.price,
      image: service.image,
      description: service.description,
      supplier: service.supplier,
      location: service.location,
      specifications: service.specifications,
      category: service.category
    });
    setShowCart(true);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-3 py-3 sm:px-4 sm:py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
            {/* Logo and Location */}
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-1 sm:gap-2">
                <img 
                  src="/assets/logo.png" 
                  alt="Incuva Logo" 
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                />
                <span className="text-gray-500 text-xs sm:text-sm">Kolkata</span>
                <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-lg sm:max-w-2xl w-full">
              <div className="relative">
                <Search className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 sm:w-4 sm:h-4" />
                <Input
                  type="text"
                  placeholder="Search services..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-7 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 w-full text-sm rounded-full"
                />
              </div>
            </div>

            {/* View Mode Toggle & Cart */}
            <div className="flex items-center gap-1 sm:gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="h-8 w-8 sm:h-9 sm:w-9 p-0 rounded-full"
              >
                <Grid3X3 className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="h-8 w-8 sm:h-9 sm:w-9 p-0 rounded-full"
              >
                <List className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowCart(!showCart)}
                className="h-8 w-8 sm:h-9 sm:w-9 p-0 relative rounded-full"
              >
                <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-3 py-2 sm:px-4 sm:py-3">
          <div className="flex gap-1 sm:gap-2 overflow-x-auto pb-1 sm:pb-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="whitespace-nowrap flex-shrink-0 text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 h-7 sm:h-8 rounded-full"
              >
                <span className="mr-1 sm:mr-2 text-xs sm:text-sm">{category.icon}</span>
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(' ')[0]}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="container mx-auto px-3 py-3 sm:px-4 sm:py-4">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Design & Printing Services</h1>
            <p className="text-xs sm:text-sm text-gray-600">Showing {filteredServices.length} services</p>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <Filter className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
            <span className="text-xs sm:text-sm text-gray-500">Filter</span>
          </div>
        </div>

      {/* Services Grid */}
        <div className={`grid gap-3 sm:gap-4 md:gap-6 ${
          viewMode === "grid" 
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
            : "grid-cols-1"
        }`}>
          {filteredServices.map((service) => (
            <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden">
              {/* Supplier Info Header */}
              <div className="p-1.5 sm:p-2 border-b bg-gray-50">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1">
                    {service.isGstVerified && (
                      <div className="flex items-center gap-0.5">
                        <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-600" />
                        <span className="text-xs text-green-600 font-medium">GST</span>
                      </div>
                    )}
                    {service.isTrustSealVerified && (
                      <div className="flex items-center gap-0.5">
                        <Shield className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-600" />
                        <span className="text-xs text-blue-600 font-medium hidden sm:inline">TrustSeal</span>
                        <span className="text-xs text-blue-600 font-medium sm:hidden">✓</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-600">
                    <Clock className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
                    <span className="hidden sm:inline">{service.yearsInBusiness}y</span>
                    <span className="sm:hidden">{service.yearsInBusiness}y</span>
                    <Users className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
                    <span className="hidden sm:inline">{service.responseRate}%</span>
                    <span className="sm:hidden">{service.responseRate}%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Button variant="outline" size="sm" className="text-xs h-5 sm:h-6 px-1.5 sm:px-2 rounded-full" asChild>
                    <a href="/contact">
                      <Phone className="w-2 h-2 sm:w-2.5 sm:h-2.5 mr-0.5" />
                      <span className="hidden sm:inline">Call</span>
                      <span className="sm:hidden">Call</span>
                    </a>
                  </Button>
                  <div className="flex items-center gap-0.5">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-2 h-2 sm:w-2.5 sm:h-2.5 ${
                            i < Math.floor(service.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">
                      {service.rating} ({service.reviewCount})
                    </span>
                  </div>
                </div>
              </div>

              <CardHeader className="pb-1 sm:pb-2 p-2 sm:p-3">
                <div className="flex items-start justify-between mb-1 sm:mb-2">
                  {service.isLeadingSupplier && (
                    <Badge variant="secondary" className="text-xs px-1 sm:px-1.5 py-0.5">Leading</Badge>
                  )}
                  {service.isStarSupplier && (
                    <Badge variant="default" className="text-xs px-1 sm:px-1.5 py-0.5">Star</Badge>
                  )}
                </div>
                <div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-24 sm:h-28 md:h-32 object-cover rounded-xl mb-1.5 sm:mb-2"
                  />
                  <CardTitle className="text-xs sm:text-sm md:text-base leading-tight">{service.title}</CardTitle>
                </div>
              </CardHeader>

              <CardContent className="p-2 sm:p-3">
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="text-base sm:text-lg md:text-xl font-bold text-green-600">{service.price}</div>
                  
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white h-7 sm:h-8 text-xs rounded-full" asChild>
                    <a href="/contact">
                      <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" />
                      Contact Supplier
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 h-7 sm:h-8 text-xs rounded-full"
                    onClick={() => handleAddToCart(service)}
                  >
                    <ShoppingCart className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" />
                    Add to Cart
                  </Button>

                  <div className="flex items-center gap-1 text-xs text-gray-600">
                    <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span>{service.location}</span>
                  </div>

                  <div className="space-y-0.5">
                    {service.specifications.slice(0, 2).map((spec, index) => (
                      <div key={index} className="text-xs text-gray-600">
                        {spec}
                      </div>
                    ))}
                    {service.specifications.length > 2 && (
                      <div className="text-xs text-gray-500">
                        +{service.specifications.length - 2} more
                      </div>
                    )}
                  </div>

                  <div className="pt-1 border-t">
                    <div className="text-xs font-medium text-gray-900">{service.supplier}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          </div>
          
        {filteredServices.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <div className="text-gray-500 text-sm sm:text-lg">No services found</div>
            <p className="text-gray-400 mt-1 sm:mt-2 text-xs sm:text-sm">Try adjusting your search or filter criteria</p>
              </div>
        )}
            </div>
            
      {/* Cart Section */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Shopping Cart ({getTotalItems()} items)</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowCart(false)}
                className="h-8 w-8 p-0 rounded-full"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="p-4 max-h-96 overflow-y-auto">
              {cartItems.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingCart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-3 border rounded-xl">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-xl"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-sm">{item.title}</h3>
                        <p className="text-green-600 font-semibold">{item.price}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 p-0 rounded-full"
                        >
                          -
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 p-0 rounded-full"
                        >
                          +
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          className="h-8 w-8 p-0 text-red-600 hover:bg-red-50 rounded-full"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
              )}
            </div>
            
            {cartItems.length > 0 && (
              <div className="p-4 border-t bg-gray-50">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold">Total Items: {getTotalItems()}</span>
                  <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full" asChild>
                    <a href="/contact">Proceed to Contact</a>
                  </Button>
                </div>
              </div>
            )}
          </div>
            </div>
      )}
    </main>
  );
}