import { Button } from "@/components/ui/button";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function OurWorksPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // All images and videos for the lightbox
  const allMedia = [
    { type: 'image', src: '/assets/poster1.png', alt: 'Poster Design 1' },
    { type: 'image', src: '/assets/poster2.png', alt: 'Poster Design 2' },
    { type: 'image', src: '/assets/poster3.png', alt: 'Poster Design 3' },
    { type: 'image', src: '/assets/buisnesscard1.png', alt: 'Business Card Design 1' },
    { type: 'image', src: '/assets/buisnesscard2.png', alt: 'Business Card Design 2' },
    { type: 'image', src: '/assets/buisnesscard4.png', alt: 'Business Card Design 3' },
    { type: 'image', src: '/assets/buisnesscard5.png', alt: 'Business Card Design 4' },
    { type: 'image', src: '/assets/broucher.png', alt: 'Brochure Design 1' },
    { type: 'image', src: '/assets/broucher2.png', alt: 'Brochure Design 2' },
    { type: 'image', src: '/assets/broucher3.png', alt: 'Brochure Design 3' },
    { type: 'image', src: '/assets/flex1.jpg', alt: 'Flex Banner Design 1' },
    { type: 'image', src: '/assets/flex2.jpg', alt: 'Flex Banner Design 2' },
    { type: 'image', src: '/assets/flex3.jpg', alt: 'Flex Banner Design 3' },
    { type: 'image', src: '/assets/White Modern Travel Instagram Post.png', alt: 'Social Media Post 1' },
    { type: 'image', src: '/assets/White Modern Travel Instagram Post.png', alt: 'Social Media Post 2' },
    { type: 'image', src: '/assets/White Modern Travel Instagram Post.png', alt: 'Social Media Post 3' },
    { type: 'video', src: '/assets/reels1.mp4', alt: 'Video Reel 1' },
    { type: 'video', src: '/assets/reels2.mp4', alt: 'Video Reel 2' },
    { type: 'video', src: '/assets/reels3.mp4', alt: 'Video Reel 3' },
    { type: 'video', src: '/assets/reels4.mp4', alt: 'Video Reel 4' },
    { type: 'video', src: '/assets/reel5.mp4', alt: 'Video Reel 5' },
    { type: 'image', src: '/assets/showlogo1.png', alt: 'Logo Design 1' },
    { type: 'image', src: '/assets/showlogo2.png', alt: 'Logo Design 2' },
    { type: 'image', src: '/assets/showlogo3.png', alt: 'Logo Design 3' },
    // Canvera style album images
    { type: 'image', src: '/assets/canverastylealbum1.png', alt: 'Canvera Style Album 1' },
    { type: 'image', src: '/assets/canverastylealbum2.png', alt: 'Canvera Style Album 2' },
    { type: 'image', src: '/assets/canverastylealbum3.png', alt: 'Canvera Style Album 3' },
    { type: 'image', src: '/assets/canverastylealbum4.png', alt: 'Canvera Style Album 4' },
    { type: 'image', src: '/assets/canverastylealbum5.png', alt: 'Canvera Style Album 5' },
    { type: 'image', src: '/assets/canverastylealbum6.png', alt: 'Canvera Style Album 6' },
    // T-shirt printing images
    { type: 'image', src: '/assets/tshirst1.jpg', alt: 'Custom T-Shirt Printing 1' },
    { type: 'image', src: '/assets/tshirt2.jpg', alt: 'Custom T-Shirt Printing 2' },
    { type: 'image', src: '/assets/tshirt3.jpg', alt: 'Custom T-Shirt Printing 3' },
    { type: 'image', src: '/assets/tshirt4.jpg', alt: 'Custom T-Shirt Printing 4' }
  ];

  const openLightbox = (src: string, type: 'image' | 'video', index: number) => {
    setCurrentIndex(index);
    if (type === 'image') {
      setSelectedImage(src);
    } else {
      setSelectedVideo(src);
    }
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setSelectedVideo(null);
  };

  const navigateMedia = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % allMedia.length 
      : (currentIndex - 1 + allMedia.length) % allMedia.length;
    
    setCurrentIndex(newIndex);
    const media = allMedia[newIndex];
    if (media.type === 'image') {
      setSelectedImage(media.src);
      setSelectedVideo(null);
    } else {
      setSelectedVideo(media.src);
      setSelectedImage(null);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateMedia('prev');
    if (e.key === 'ArrowRight') navigateMedia('next');
  };
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section - Our Works */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-primary mb-4 sm:mb-6">
              OUR  <span className="text-primary font-black">WORKS</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Explore our portfolio of creative designs, printing solutions, and branding work that has helped businesses stand out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto px-4 sm:px-0">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <a href="/services">Order Now</a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                <a href="/contact">Get Quote</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">View Our Best Works</h2>
            <p className="text-gray-700 max-w-2xl mx-auto px-4">
              Explore our portfolio of creative designs, printing solutions, and branding work that has helped businesses stand out.
            </p>
          </div>

          {/* Posters & Flyers Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Posters & Flyers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div 
                className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => openLightbox('/assets/poster1.png', 'image', 0)}
              >
                <img 
                  src="/assets/poster1.png" 
                  alt="Poster Design 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div 
                className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => openLightbox('/assets/poster2.png', 'image', 1)}
              >
                <img 
                  src="/assets/poster2.png" 
                  alt="Poster Design 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div 
                className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => openLightbox('/assets/poster3.png', 'image', 2)}
              >
                <img 
                  src="/assets/poster3.png" 
                  alt="Poster Design 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Business Cards Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Business Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div 
                className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => openLightbox('/assets/buisnesscard1.png', 'image', 3)}
              >
                <img 
                  src="/assets/buisnesscard1.png" 
                  alt="Business Card Design 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div 
                className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => openLightbox('/assets/buisnesscard2.png', 'image', 4)}
              >
                <img 
                  src="/assets/buisnesscard2.png" 
                  alt="Business Card Design 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div 
                className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => openLightbox('/assets/buisnesscard4.png', 'image', 5)}
              >
                <img 
                  src="/assets/buisnesscard4.png" 
                  alt="Business Card Design 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div 
                className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => openLightbox('/assets/buisnesscard5.png', 'image', 6)}
              >
                <img 
                  src="/assets/buisnesscard5.png" 
                  alt="Business Card Design 4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Brochures Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Brochures & Catalogs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div 
                className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => openLightbox('/assets/broucher.png', 'image', 7)}
              >
                <img 
                  src="/assets/broucher.png" 
                  alt="Brochure Design 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div 
                className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => openLightbox('/assets/broucher2.png', 'image', 8)}
              >
                <img 
                  src="/assets/broucher2.png" 
                  alt="Brochure Design 2" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div 
                className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => openLightbox('/assets/broucher3.png', 'image', 9)}
              >
                <img 
                  src="/assets/broucher3.png" 
                  alt="Brochure Design 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Flex & Banners Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Flex & Banners</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div 
                className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => openLightbox('/assets/flex1.jpg', 'image', 10)}
              >
                <img 
                  src="/assets/flex1.jpg" 
                  alt="Flex Banner Design 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div 
                className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => openLightbox('/assets/flex2.jpg', 'image', 11)}
              >
                <img 
                  src="/assets/flex2.jpg" 
                  alt="Flex Banner Design 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div 
                className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => openLightbox('/assets/flex3.jpg', 'image', 12)}
              >
                <img 
                  src="/assets/flex3.jpg" 
                  alt="Flex Banner Design 3"
                  className="w-full h-full object-cover"
                />
              </div>
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
            <h4 className="text-lg sm:text-xl font-semibold text-primary mb-4 text-center">Video Reels</h4>
            <div className="flex justify-center gap-3 sm:gap-4 overflow-x-auto pb-4 touch-pan-x">
              <div 
                className="relative group bg-gray-100 rounded-lg overflow-hidden cursor-pointer flex-shrink-0"
                style={{ width: '180px', height: '320px' }}
                onClick={() => openLightbox('/assets/reels1.mp4', 'video', 16)}
              >
                <video
                  className="w-full h-full object-cover"
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
                      parent.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg"><p class="text-gray-600">Video not available</p></div>';
                    }
                  }}
                >
                  <source src="/assets/reels1.mp4" type="video/mp4" />
                  <source src="./assets/reels1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div 
                className="relative group bg-gray-100 rounded-lg overflow-hidden cursor-pointer flex-shrink-0"
                style={{ width: '180px', height: '320px' }}
                onClick={() => openLightbox('/assets/reels2.mp4', 'video', 17)}
              >
                <video
                  className="w-full h-full object-cover"
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
                      parent.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg"><p class="text-gray-600">Video not available</p></div>';
                    }
                  }}
                >
                  <source src="/assets/reels2.mp4" type="video/mp4" />
                  <source src="./assets/reels2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div 
                className="relative group bg-gray-100 rounded-lg overflow-hidden cursor-pointer flex-shrink-0"
                style={{ width: '180px', height: '320px' }}
                onClick={() => openLightbox('/assets/reels3.mp4', 'video', 18)}
              >
                <video
                  className="w-full h-full object-cover"
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
                      parent.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg"><p class="text-gray-600">Video not available</p></div>';
                    }
                  }}
                >
                  <source src="/assets/reels3.mp4" type="video/mp4" />
                  <source src="./assets/reels3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div 
                className="relative group bg-gray-100 rounded-lg overflow-hidden cursor-pointer flex-shrink-0"
                style={{ width: '180px', height: '320px' }}
                onClick={() => openLightbox('/assets/reels4.mp4', 'video', 19)}
              >
                <video
                  className="w-full h-full object-cover"
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
                      parent.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg"><p class="text-gray-600">Video not available</p></div>';
                    }
                  }}
                >
                  <source src="/assets/reels4.mp4" type="video/mp4" />
                  <source src="./assets/reels4.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div 
                className="relative group bg-gray-100 rounded-lg overflow-hidden cursor-pointer flex-shrink-0"
                style={{ width: '180px', height: '320px' }}
                onClick={() => openLightbox('/assets/reel5.mp4', 'video', 20)}
              >
                <video
                  className="w-full h-full object-cover"
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
                      parent.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg"><p class="text-gray-600">Video not available</p></div>';
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
              <div 
                className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => openLightbox('/assets/showlogo1.png', 'image', 21)}
              >
                <img 
                  src="/assets/showlogo1.png" 
                  alt="Logo Design 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div 
                className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => openLightbox('/assets/showlogo2.png', 'image', 22)}
              >
                <img 
                  src="/assets/showlogo2.png" 
                  alt="Logo Design 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div 
                className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => openLightbox('/assets/showlogo3.png', 'image', 23)}
              >
                <img 
                  src="/assets/showlogo3.png" 
                  alt="Logo Design 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Our Best Canvera Style Albums */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Our Best Canvera Style Albums</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                '/assets/canverastylealbum1.png',
                '/assets/canverastylealbum2.png',
                '/assets/canverastylealbum3.png',
                '/assets/canverastylealbum4.png',
                '/assets/canverastylealbum5.png',
                '/assets/canverastylealbum6.png'
              ].map((src, i) => (
                <div
                  key={src}
                  className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => openLightbox(src, 'image', allMedia.findIndex(m => m.src === src))}
                >
                  <img
                    src={src}
                    alt={`Canvera Style Album ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* T-Shirt Printing Section - Featured */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-primary mb-4">🎯 Our Most Favorable T-Shirt Printing</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Custom t-shirt printing with premium quality sublimation technology. Perfect for events, businesses, and personal use.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white" asChild>
                  <a href="/services">Order T-Shirt Printing</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/contact">Get Quote</a>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                '/assets/tshirst1.jpg',
                '/assets/tshirt2.jpg',
                '/assets/tshirt3.jpg',
                '/assets/tshirt4.jpg'
              ].map((src, i) => (
                <div
                  key={src}
                  className="group aspect-[3/4] rounded-lg overflow-hidden border shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer relative"
                  onClick={() => openLightbox(src, 'image', allMedia.findIndex(m => m.src === src))}
                >
                  <img
                    src={src}
                    alt={`Custom T-Shirt Printing ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h4 className="font-semibold text-sm mb-1">Custom T-Shirt Design</h4>
                      <p className="text-xs opacity-90">Premium Sublimation Print</p>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">₹299</div>
                  <div className="text-sm text-gray-600">Starting Price</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">24hrs</div>
                  <div className="text-sm text-gray-600">Fast Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">Premium</div>
                  <div className="text-sm text-gray-600">Quality</div>
                </div>
              </div>
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

      {/* Lightbox Modal */}
      {(selectedImage || selectedVideo) && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={() => navigateMedia('prev')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          
          <button
            onClick={() => navigateMedia('next')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          {/* Media Content */}
          <div className="relative max-w-4xl max-h-[80vh] mx-4">
            {selectedImage && (
              <img
                src={selectedImage}
                alt={allMedia[currentIndex]?.alt || 'Portfolio item'}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                style={{ maxWidth: '800px', maxHeight: '600px' }}
              />
            )}
            {selectedVideo && (
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                style={{ maxWidth: '300px', maxHeight: '500px' }}
                onError={(e) => {
                  console.log('Video failed to load in lightbox:', e);
                }}
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>

          {/* Media Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="text-white text-sm font-medium">
              {currentIndex + 1} / {allMedia.length}
            </span>
          </div>

          {/* Click outside to close */}
          <div 
            className="absolute inset-0 -z-10"
            onClick={closeLightbox}
          />
        </div>
      )}
    </main>
  );
}
