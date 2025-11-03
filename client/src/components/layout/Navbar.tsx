import { Menu, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();
  
  // Set active menu based on current path
  useEffect(() => {
    const path = location.pathname;
    if (path === '/services') setActiveMenu('shop');
    else if (path.startsWith('/explore')) setActiveMenu('explore');
    else if (path === '/our-works') setActiveMenu('works');
    else if (path === '/pricing') setActiveMenu('pricing');
    else setActiveMenu(null);
  }, [location.pathname]);
  
  return (
    <div className="sticky top-0 z-40 w-full px-2 sm:px-4 py-2">
      <header className="mx-auto max-w-7xl rounded-3xl bg-transparent backdrop-blur-md border border-white/20 shadow-lg">
        <div className="flex h-14 sm:h-16 items-center px-2 sm:px-4">
          {/* Left: primary links */}
          <nav className="hidden gap-6 text-sm font-medium md:flex flex-1">
          <Link 
            to="/services" 
            className="relative transition-colors hover:text-primary"
            onClick={() => setActiveMenu('shop')}
          >
            SHOP
            {activeMenu === 'shop' && (
              <div className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary animate-[underline_0.3s_ease-out_forwards] origin-left" />
            )}
          </Link>
          <Link 
            to="/explore" 
            className="relative transition-colors hover:text-primary"
            onClick={() => setActiveMenu('explore')}
          >
            EXPLORE
            {activeMenu === 'explore' && (
              <div className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary animate-[underline_0.3s_ease-out_forwards] origin-left" />
            )}
          </Link>
          <Link 
            to="/our-works" 
            className="relative transition-colors hover:text-primary"
            onClick={() => setActiveMenu('works')}
          >
            OUR WORKS
            {activeMenu === 'works' && (
              <div className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary animate-[underline_0.3s_ease-out_forwards] origin-left" />
            )}
          </Link>
          <Link 
            to="/pricing" 
            className="relative transition-colors hover:text-primary"
            onClick={() => setActiveMenu('pricing')}
          >
            SERVICES
            {activeMenu === 'pricing' && (
              <div className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary animate-[underline_0.3s_ease-out_forwards] origin-left" />
            )}
          </Link>
          
          </nav>

          {/* Center: logo - absolutely centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="text-center">
              <img
                src="/assets/logo.png"
                alt="Incuva logo"
                className="mx-auto h-16 w-auto sm:h-20 md:h-24 lg:h-40"
              />
            </Link>
          </div>

          {/* Right: icons/cta */}
          <div className="flex items-center gap-2 sm:gap-4 flex-1 justify-end">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => {
            const el = document.getElementById('mobile-drawer');
            if (el) el.classList.toggle('hidden');
          }}>
            <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
           <Link to="/about" className="text-xs sm:text-sm underline-offset-2 hover:underline hidden sm:block">About Us</Link>
          {!isAuthenticated ? (
            <Link to="/account/login" className="text-xs sm:text-sm underline-offset-2 hover:underline hidden sm:block">Sign in</Link>
          ) : (
            <div className="hidden sm:flex items-center gap-2">
              <Link to="/account/login" className="text-xs sm:text-sm underline-offset-2 hover:underline">Account</Link>
            </div>
          )}
         
          <Button variant="ghost" size="icon" aria-label="Cart" asChild>
            <Link to="/cart">
              <ShoppingCart className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
            </Link>
          </Button>
          </div>
        </div>
        
        {/* Mobile drawer */}
        <div id="mobile-drawer" className="hidden border-t border-white/20 bg-transparent backdrop-blur-md md:hidden rounded-b-2xl">
          <div className="px-3 sm:px-4 py-3 sm:py-4">
            <nav className="grid gap-2 sm:gap-3 text-sm">
              <Link to="/services" className="font-medium">Shop</Link>
              <Link to="/explore" className="font-medium">Explore</Link>
              <Link to="/our-works" className="font-medium">Our Works</Link>
              <Link to="/requirements" className="font-medium">Order Now</Link>
              <Link to="/contact" className="font-medium">Contact</Link>
              <Link to="/about" className="font-medium">About Us</Link>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}


