import { Menu, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Scrolling notice above navbar */}
      <div className="w-full border-b bg-secondary/60 text-xs text-muted-foreground">
        <div className="relative overflow-hidden">
          <div className="flex w-[200%] animate-marquee">
            <div className="flex w-1/2 items-center justify-around px-4 py-2">
              <p>You are 100/- away from free shipping.</p>
              <p>You are 100/- away from free shipping.</p>
              <p>You are 100/- away from free shipping.</p>
              <p>You are 100/- away from free shipping.</p>
            </div>
            <div className="flex w-1/2 items-center justify-around px-4 py-2">
              <p>You are 100/- away from free shipping.</p>
              <p>You are 100/- away from free shipping.</p>
              <p>You are 100/- away from free shipping.</p>
              <p>You are 100/- away from free shipping.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between border-b bg-secondary/50 px-4 backdrop-blur supports-[backdrop-filter]:bg-secondary/60">
        {/* Left: primary links */}
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          <div className="relative group">
            <button 
              className="relative transition-colors hover:text-primary bg-transparent border-none cursor-pointer"
              onClick={() => setActiveMenu('shop')}
            >
              SHOP
              {activeMenu === 'shop' && (
                <div className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary animate-[underline_0.3s_ease-out_forwards] origin-left" />
              )}
            </button>
            {/* Mega menu */}
            <div className="invisible absolute left-0 top-full z-50 mt-2 w-[28rem] rounded-md border bg-white p-4 opacity-0 shadow-md transition-opacity duration-150 group-hover:visible group-hover:opacity-100 md:w-[36rem]">
              <div className="grid max-h-72 grid-cols-1 gap-6 overflow-y-auto sm:grid-cols-2">
                  <ul className="space-y-3">
                    <li><a href="/services" className="block font-semibold text-primary hover:underline">All Services</a></li>
                    <li><a href="/banners" className="block hover:underline">Banner Templates</a></li>
                    <li><a href="/services/flex-printing" className="block hover:underline">Flex Printing (frontlit/backlit banners, hoardings)</a></li>
                    <li><a href="/services/vinyl-printing" className="block hover:underline">Vinyl Printing (posters, stickers)</a></li>
                    <li><a href="/services/album-printing" className="block hover:underline">Canvera-style Album Printing</a></li>
                    <li><a href="/services/catalog-brochure" className="block hover:underline">Catalog & Brochure Printing</a></li>
                    <li><a href="/services/visiting-cards" className="block hover:underline">Visiting Card Printing</a></li>
                  </ul>
                  <ul className="space-y-3">
                    <li><a href="/services#logo-design" className="block hover:underline">Logo Design</a></li>
                    <li><a href="/services#brochure-design" className="block hover:underline">Brochure Design (2-sided)</a></li>
                    <li><a href="/services#poster-flyer-design" className="block hover:underline">Poster / Pamphlet / Flyer Design</a></li>
                    <li><a href="/services#banner-hoarding-design" className="block hover:underline">Banner & Hoarding Design</a></li>
                    <li><a href="/services#corporate-branding" className="block hover:underline">Corporate Branding Collateral</a></li>
                  </ul>
                </div>
              </div>
            </div>
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

        {/* Center: logo */}
        <a href="/" className="text-center">
          <img
            src="/assets/logo.png"
            alt="Incuva logo"
            className="mx-auto h-24 w-auto md:h-36"
          />
        </a>

        {/* Right: icons/cta */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => {
            const el = document.getElementById('mobile-drawer');
            if (el) el.classList.toggle('hidden');
          }}>
            <Menu className="h-5 w-5" />
          </Button>
           <a href="/about" className="text-sm underline-offset-2 hover:underline">About Us</a>
          <a href="/account/login" className="text-sm underline-offset-2 hover:underline">Account</a>
         
          <Button variant="ghost" size="icon" aria-label="Cart" asChild>
            <a href="/cart">
              <ShoppingCart className="h-10 w-10" />
            </a>
          </Button>
        </div>
      </div>
      {/* Mobile drawer */}
      <div id="mobile-drawer" className="hidden border-b bg-secondary/60 md:hidden">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <nav className="grid gap-3 text-sm">
            <a href="/services" className="font-medium">Shop</a>
            <a href="/banners" className="pl-3">Banners</a>
            <a href="/services/flex-printing" className="pl-3">Flex Printing</a>
            <a href="/services/vinyl-printing" className="pl-3">Vinyl Printing</a>
            <a href="/services/album-printing" className="pl-3">Album Printing</a>
            <a href="/services/catalog-brochure" className="pl-3">Catalog & Brochure</a>
            <a href="/services/visiting-cards" className="pl-3">Visiting Cards</a>
            <a href="/services/logo-design" className="pl-3">Logo Design</a>
            <a href="/services/brochure-design" className="pl-3">Brochure Design</a>
            <a href="/services/poster-flyer-design" className="pl-3">Poster/Flyer Design</a>
            <a href="/services/banner-hoarding-design" className="pl-3">Banner & Hoarding</a>
            <a href="/services/corporate-branding" className="pl-3">Corporate Branding</a>
            <a href="/quote" className="font-medium">Get a Quote</a>
            <a href="/contact" className="font-medium">Contact</a>
            <a href="/about" className="font-medium">About Us</a>
          </nav>
        </div>
      </div>
    </header>
  );
}


