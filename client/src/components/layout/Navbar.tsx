import { Menu, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  return (
    <div className="sticky top-0 z-40 w-full px-2 sm:px-4 py-2">
      <header className="mx-auto max-w-7xl rounded-2xl bg-transparent backdrop-blur-sm border border-white/10 shadow-lg">
        <div className="flex h-14 sm:h-16 items-center px-2 sm:px-4">
          {/* Left: primary links */}
          <nav className="hidden gap-6 text-sm font-medium md:flex flex-1">
          <a 
            href="/services" 
            className="relative transition-colors hover:text-primary"
            onClick={() => setActiveMenu('shop')}
          >
            SHOP
            {activeMenu === 'shop' && (
              <div className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary animate-[underline_0.3s_ease-out_forwards] origin-left" />
            )}
          </a>
          <a 
            href="/explore" 
            className="relative transition-colors hover:text-primary"
            onClick={() => setActiveMenu('explore')}
          >
            EXPLORE
            {activeMenu === 'explore' && (
              <div className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary animate-[underline_0.3s_ease-out_forwards] origin-left" />
            )}
          </a>
          <a 
            href="/our-works" 
            className="relative transition-colors hover:text-primary"
            onClick={() => setActiveMenu('works')}
          >
            OUR WORKS
            {activeMenu === 'works' && (
              <div className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary animate-[underline_0.3s_ease-out_forwards] origin-left" />
            )}
          </a>
          <a 
            href="/pricing" 
            className="relative transition-colors hover:text-primary"
            onClick={() => setActiveMenu('pricing')}
          >
            SERVICES
            {activeMenu === 'pricing' && (
              <div className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary animate-[underline_0.3s_ease-out_forwards] origin-left" />
            )}
          </a>
          
          </nav>

          {/* Center: logo - absolutely centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <a href="/" className="text-center">
              <img
                src="/assets/logo.png"
                alt="Incuva logo"
                className="mx-auto h-16 w-auto sm:h-20 md:h-24 lg:h-40"
              />
            </a>
          </div>

          {/* Right: icons/cta */}
          <div className="flex items-center gap-2 sm:gap-4 flex-1 justify-end">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => {
            const el = document.getElementById('mobile-drawer');
            if (el) el.classList.toggle('hidden');
          }}>
            <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
           <a href="/about" className="text-xs sm:text-sm underline-offset-2 hover:underline hidden sm:block">About Us</a>
          <a href="/account/login" className="text-xs sm:text-sm underline-offset-2 hover:underline hidden sm:block">Account</a>
         
          <Button variant="ghost" size="icon" aria-label="Cart" asChild>
            <a href="/cart">
              <ShoppingCart className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
            </a>
          </Button>
          </div>
        </div>
        
        {/* Mobile drawer */}
        <div id="mobile-drawer" className="hidden border-t border-white/10 bg-transparent backdrop-blur-sm md:hidden rounded-b-2xl">
          <div className="px-3 sm:px-4 py-3 sm:py-4">
            <nav className="grid gap-2 sm:gap-3 text-sm">
              <a href="/services" className="font-medium">Shop</a>
              <a href="/explore" className="font-medium">Explore</a>
              <a href="/our-works" className="font-medium">Our Works</a>
              <a href="/quote" className="font-medium">Get a Quote</a>
              <a href="/contact" className="font-medium">Contact</a>
              <a href="/about" className="font-medium">About Us</a>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}


