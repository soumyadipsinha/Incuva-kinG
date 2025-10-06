import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-secondary/40">
      {/* Callout strip */}
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-primary md:text-3xl">
              The world’s first prebiotic printing studio. Try it today!
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div>
              <span className="mb-2 inline-block rounded-full bg-muted px-3 py-1 text-xs">Shop</span>
              <ul className="mt-2 space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Visiting Cards</a></li>
                <li><a href="#" className="hover:underline">Brochures</a></li>
                <li><a href="#" className="hover:underline">Banners</a></li>
                <li><a href="#" className="hover:underline">Stickers</a></li>
              </ul>
            </div>
            <div>
              <span className="mb-2 inline-block rounded-full bg-muted px-3 py-1 text-xs">Orders</span>
              <ul className="mt-2 space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Shipping Policy</a></li>
                <li><a href="#" className="hover:underline">Return & Refund Policy</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">Wholesale</a></li>
              </ul>
            </div>
            <div>
              <span className="mb-2 inline-block rounded-full bg-muted px-3 py-1 text-xs">Newsletter</span>
              <p className="mb-3 text-sm text-muted-foreground">
                Receive special offers and first look at new products.
              </p>
              <form className="group" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="footer-email" className="sr-only">Email address</label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Enter your email address"
                  className="h-16 w-full rounded-xl border border-border bg-background px-6 text-lg placeholder:text-lg shadow-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring"
                  required
                />
                <div className="mt-4">
                  <Button type="submit" className="h-12 w-full rounded-xl px-8 text-base sm:w-auto">Subscribe</Button>
                </div>
                <p className="mt-2 text-[11px] text-muted-foreground">
                  By subscribing, you agree to our <a href="#" className="underline">Privacy Policy</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Incuva-kinG</p>
          <nav className="flex flex-wrap items-center gap-4">
            <a href="#" className="hover:underline">Accessibility</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}


