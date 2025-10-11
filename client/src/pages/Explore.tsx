import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, ChevronDown, Heart, Share2, MoreHorizontal } from "lucide-react";
import { useState } from "react";

export default function Explore() {
  const [showMoreFeatured, setShowMoreFeatured] = useState(false);
  const [showMoreCategories, setShowMoreCategories] = useState(false);
  const [showMoreContent, setShowMoreContent] = useState(false);
  return (
    <div className="min-h-screen bg-transparent">
      {/* Header Section */}
      <div className="bg-transparent border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center">
            {/* Logo */}
            <div className="absolute left-24">
              <img
                src="/assets/logo.png"
                alt="Incuva logo"
                className="h-36 w-auto"
              />
            </div>

            {/* Search Bar - Centered */}
            <div className="w-full max-w-2xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for printing services, design ideas, etc."
                  className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Explore the best of Incuva
          </h1>
          
          {/* Featured Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 transition-all duration-500 ease-in-out">
             <Card className="relative overflow-hidden rounded-xl h-64 group cursor-pointer hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
               <a href="/explore/business-cards" className="block h-full">
                 <img 
                   src="https://picsum.photos/400/300?random=1" 
                   alt="Professional Business Cards"
                   className="absolute inset-0 w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-black/40"></div>
                 <CardContent className="relative h-full flex flex-col justify-end p-6">
                   <div className="text-white">
                     <p className="text-sm font-medium mb-2">Style up</p>
                     <h3 className="text-xl font-bold">Professional Business Cards</h3>
                   </div>
                 </CardContent>
               </a>
             </Card>

            <Card className="relative overflow-hidden rounded-xl h-64 group cursor-pointer hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <a href="/explore/banners" className="block h-full">
                <img 
                  src="https://picsum.photos/400/300?random=2" 
                  alt="Banner & Hoarding Designs"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <CardContent className="relative h-full flex flex-col justify-end p-6">
                  <div className="text-white">
                    <p className="text-sm font-medium mb-2">Print ready</p>
                    <h3 className="text-xl font-bold">Banner & Hoarding Designs</h3>
                  </div>
                </CardContent>
              </a>
            </Card>

            <Card className="relative overflow-hidden rounded-xl h-64 group cursor-pointer hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <a href="/explore/logo-design" className="block h-full">
                <img 
                  src="https://picsum.photos/400/300?random=3" 
                  alt="Logo Design Services"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <CardContent className="relative h-full flex flex-col justify-end p-6">
                  <div className="text-white">
                    <p className="text-sm font-medium mb-2">Brand identity</p>
                    <h3 className="text-xl font-bold">Logo Design Services</h3>
                  </div>
                </CardContent>
              </a>
            </Card>

            {/* Additional featured cards that show when "See more" is clicked */}
            {showMoreFeatured && (
              <>
                <Card className="relative overflow-hidden rounded-xl h-64 group cursor-pointer hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <a href="/services/album-printing" className="block h-full">
                    <img 
                      src="https://picsum.photos/400/300?random=4" 
                      alt="Wedding & Event Albums"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <CardContent className="relative h-full flex flex-col justify-end p-6">
                      <div className="text-white">
                        <p className="text-sm font-medium mb-2">Album printing</p>
                        <h3 className="text-xl font-bold">Wedding & Event Albums</h3>
                      </div>
                    </CardContent>
                  </a>
                </Card>

                <Card className="relative overflow-hidden rounded-xl h-64 group cursor-pointer hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <a href="/services/brochure-design" className="block h-full">
                    <img 
                      src="https://picsum.photos/400/300?random=5" 
                      alt="Brochure & Flyer Design"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <CardContent className="relative h-full flex flex-col justify-end p-6">
                      <div className="text-white">
                        <p className="text-sm font-medium mb-2">Marketing</p>
                        <h3 className="text-xl font-bold">Brochure & Flyer Design</h3>
                      </div>
                    </CardContent>
                  </a>
                </Card>

                <Card className="relative overflow-hidden rounded-xl h-64 group cursor-pointer hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <a href="/services/vinyl-printing" className="block h-full">
                    <img 
                      src="https://picsum.photos/400/300?random=6" 
                      alt="Stickers & Decals"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <CardContent className="relative h-full flex flex-col justify-end p-6">
                      <div className="text-white">
                        <p className="text-sm font-medium mb-2">Vinyl printing</p>
                        <h3 className="text-xl font-bold">Stickers & Decals</h3>
                      </div>
                    </CardContent>
                  </a>
                </Card>
              </>
            )}
          </div>

          <Button 
            variant="outline" 
            className="rounded-full px-8"
            onClick={() => setShowMoreFeatured(!showMoreFeatured)}
          >
            {showMoreFeatured ? "Show less" : "See more"}
          </Button>
        </div>

        {/* Browse by Category Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse by category</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 transition-all duration-500 ease-in-out">
            {/* Category Cards */}
            {[
              { name: "Printing", color: "from-orange-500 to-red-500" },
              { name: "Design", color: "from-blue-500 to-purple-500" },
              { name: "Branding", color: "from-green-500 to-teal-500" },
              { name: "Marketing", color: "from-pink-500 to-rose-500" },
              { name: "Business Cards", color: "from-indigo-500 to-blue-500" },
              { name: "Banners", color: "from-yellow-500 to-orange-500" },
              { name: "Brochures", color: "from-purple-500 to-pink-500" },
              { name: "Logos", color: "from-gray-500 to-slate-500" },
              // Additional categories that show when "See more" is clicked
              ...(showMoreCategories ? [
                { name: "Flyers", color: "from-cyan-500 to-blue-500" },
                { name: "Posters", color: "from-emerald-500 to-green-500" },
                { name: "Stickers", color: "from-violet-500 to-purple-500" },
                { name: "Albums", color: "from-rose-500 to-pink-500" },
                { name: "Invitations", color: "from-amber-500 to-yellow-500" },
                { name: "Labels", color: "from-teal-500 to-cyan-500" },
                { name: "Packaging", color: "from-slate-500 to-gray-500" },
                { name: "Signage", color: "from-red-500 to-rose-500" },
              ] : []),
             ].map((category, index) => (
               <Card key={index} className="relative overflow-hidden rounded-xl h-32 group cursor-pointer hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                 <a href={`/services#${category.name.toLowerCase().replace(/\s+/g, '-')}`} className="block h-full">
                   <img 
                     src={`https://picsum.photos/300/200?random=${index + 10}`}
                     alt={category.name}
                     className="absolute inset-0 w-full h-full object-cover"
                   />
                   <div className="absolute inset-0 bg-black/30"></div>
                   <CardContent className="relative h-full flex items-center justify-center">
                     <h3 className="text-white font-bold text-lg drop-shadow-lg">{category.name}</h3>
                   </CardContent>
                 </a>
               </Card>
             ))}
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              className="rounded-full px-8"
              onClick={() => setShowMoreCategories(!showMoreCategories)}
            >
              {showMoreCategories ? "Show less" : "See more"}
            </Button>
          </div>
        </div>

        {/* What's new on Incuva Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What's new on Incuva</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-500 ease-in-out">
            {/* Content Pins */}
            {[
              {
                title: "25 Amazing Business Card Designs",
                description: "Professional designs for every industry",
                image: "bg-gradient-to-br from-blue-400 to-purple-500",
                height: "h-48",
                category: "Business Cards"
              },
              {
                title: "Logo Design Tutorial",
                description: "Step-by-step guide to creating logos",
                image: "bg-gradient-to-br from-green-400 to-blue-500",
                height: "h-64",
                category: "Logo Design"
              },
              {
                title: "Banner Design Ideas",
                description: "Creative banner layouts for events",
                image: "bg-gradient-to-br from-pink-400 to-red-500",
                height: "h-56",
                category: "Banners"
              },
              {
                title: "Print Quality Tips",
                description: "How to ensure perfect print results",
                image: "bg-gradient-to-br from-yellow-400 to-orange-500",
                height: "h-52",
                category: "Printing"
              },
              {
                title: "Brand Identity Guide",
                description: "Building consistent brand presence",
                image: "bg-gradient-to-br from-purple-400 to-pink-500",
                height: "h-60",
                category: "Branding"
              },
              {
                title: "Marketing Materials",
                description: "Complete marketing package designs",
                image: "bg-gradient-to-br from-teal-400 to-green-500",
                height: "h-44",
                category: "Marketing"
              },
              {
                title: "Album Printing Ideas",
                description: "Beautiful wedding and event albums",
                image: "bg-gradient-to-br from-rose-400 to-pink-500",
                height: "h-56",
                category: "Albums"
              },
              {
                title: "Brochure Templates",
                description: "Professional brochure layouts",
                image: "bg-gradient-to-br from-indigo-400 to-purple-500",
                height: "h-48",
                category: "Brochures"
              },
              // Additional content that shows when "See more" is clicked
              ...(showMoreContent ? [
                {
                  title: "Vinyl Sticker Designs",
                  description: "Durable and weather-resistant stickers",
                  image: "bg-gradient-to-br from-orange-400 to-red-500",
                  height: "h-52",
                  category: "Stickers"
                },
                {
                  title: "Event Flyer Templates",
                  description: "Eye-catching flyers for any event",
                  image: "bg-gradient-to-br from-cyan-400 to-blue-500",
                  height: "h-48",
                  category: "Flyers"
                },
                {
                  title: "Poster Design Ideas",
                  description: "Large format poster designs",
                  image: "bg-gradient-to-br from-emerald-400 to-green-500",
                  height: "h-64",
                  category: "Posters"
                },
                {
                  title: "Wedding Invitation Designs",
                  description: "Elegant and modern invitation templates",
                  image: "bg-gradient-to-br from-violet-400 to-purple-500",
                  height: "h-56",
                  category: "Invitations"
                },
                {
                  title: "Product Label Designs",
                  description: "Professional product labeling solutions",
                  image: "bg-gradient-to-br from-amber-400 to-yellow-500",
                  height: "h-44",
                  category: "Labels"
                },
                {
                  title: "Packaging Design Ideas",
                  description: "Creative packaging solutions",
                  image: "bg-gradient-to-br from-slate-400 to-gray-500",
                  height: "h-60",
                  category: "Packaging"
                },
                {
                  title: "Signage Design Guide",
                  description: "Effective signage for businesses",
                  image: "bg-gradient-to-br from-red-400 to-rose-500",
                  height: "h-52",
                  category: "Signage"
                },
                {
                  title: "Flex Banner Designs",
                  description: "High-quality flex printing solutions",
                  image: "bg-gradient-to-br from-teal-400 to-cyan-500",
                  height: "h-48",
                  category: "Flex Printing"
                },
              ] : []),
             ].map((pin, index) => (
               <Card key={index} className="relative overflow-hidden rounded-2xl group cursor-pointer hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                 <a href={`/services#${pin.category.toLowerCase().replace(/\s+/g, '-')}`} className="block">
                   <div className={`${pin.height} relative`}>
                     <img 
                       src={`https://picsum.photos/400/600?random=${index + 20}`}
                       alt={pin.title}
                       className="absolute inset-0 w-full h-full object-cover"
                     />
                     {/* Pinterest-style action buttons */}
                     <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       <div className="flex space-x-1">
                         <Button size="icon" variant="secondary" className="w-8 h-8 rounded-full bg-white/90 hover:bg-white">
                           <Heart className="w-4 h-4" />
                         </Button>
                         <Button size="icon" variant="secondary" className="w-8 h-8 rounded-full bg-white/90 hover:bg-white">
                           <Share2 className="w-4 h-4" />
                         </Button>
                         <Button size="icon" variant="secondary" className="w-8 h-8 rounded-full bg-white/90 hover:bg-white">
                           <MoreHorizontal className="w-4 h-4" />
                         </Button>
                       </div>
                     </div>
                     
                     {/* Visit site button */}
                     <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       <Button size="sm" className="bg-white/90 hover:bg-white text-black rounded-full">
                         Visit site
                       </Button>
                     </div>
                   </div>
                   
                   <CardContent className="p-4">
                     <div className="space-y-2">
                       <h3 className="font-bold text-lg text-gray-900 line-clamp-2">{pin.title}</h3>
                       <p className="text-gray-600 text-sm line-clamp-2">{pin.description}</p>
                       <div className="flex items-center justify-between">
                         <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{pin.category}</span>
                         <div className="flex items-center space-x-1 text-gray-400">
                           <span className="text-xs">Incuva</span>
                         </div>
                       </div>
                     </div>
                   </CardContent>
                 </a>
               </Card>
             ))}
          </div>
          
          {/* See more button for content */}
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              className="rounded-full px-8"
              onClick={() => setShowMoreContent(!showMoreContent)}
            >
              {showMoreContent ? "Show less" : "See more"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
