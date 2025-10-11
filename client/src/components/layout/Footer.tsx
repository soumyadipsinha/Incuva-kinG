import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-primary text-white rounded-t-2xl">
      {/* Callout strip */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-10">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-white">
              The world's first prebiotic printing studio. Try it today!
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-3">
            <div>
              <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs text-white">Shop</span>
              <ul className="mt-2 space-y-2 text-sm">
                <li><a href="#" className="hover:underline text-white">Visiting Cards</a></li>
                <li><a href="#" className="hover:underline text-white">Brochures</a></li>
                <li><a href="#" className="hover:underline text-white">Banners</a></li>
                <li><a href="#" className="hover:underline text-white">Stickers</a></li>
              </ul>
            </div>
            <div>
              <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs text-white">Orders</span>
              <ul className="mt-2 space-y-2 text-sm">
                <li><a href="#" className="hover:underline text-white">Shipping Policy</a></li>
                <li><a href="#" className="hover:underline text-white">Return & Refund Policy</a></li>
                <li><a href="#" className="hover:underline text-white">Contact Us</a></li>
                <li><a href="#" className="hover:underline text-white">Wholesale</a></li>
              </ul>
            </div>
            <div>
              <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs text-white">Newsletter</span>
              <p className="mb-3 text-sm text-white/80">
                Receive special offers and first look at new products.
              </p>
              <form className="group" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="footer-email" className="sr-only">Email address</label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Enter your email address"
                  className="h-10 sm:h-12 w-full max-w-md rounded-xl border border-border bg-background px-4 sm:px-6 text-sm sm:text-lg placeholder:text-sm sm:placeholder:text-lg shadow-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring"
                  required
                />
                <div className="mt-3 sm:mt-4">
                  <Button type="submit" className="h-10 sm:h-12 w-full rounded-xl px-6 sm:px-8 text-sm sm:text-base sm:w-auto">Subscribe</Button>
                </div>
                <p className="mt-2 text-[10px] sm:text-[11px] text-white/80">
                  By subscribing, you agree to our <a href="#" className="underline">Privacy Policy</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:gap-4 px-4 py-4 sm:py-6 text-xs text-white/80 md:flex-row">
          <p>© {new Date().getFullYear()} Incuva-kinG</p>
          <nav className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a href="#" className="hover:underline text-white text-xs">Accessibility</a>
            <a href="#" className="hover:underline text-white text-xs">Privacy Policy</a>
            <a href="#" className="hover:underline text-white text-xs">Terms of Service</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}


