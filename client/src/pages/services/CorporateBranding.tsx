export default function CorporateBrandingPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-14">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight text-primary md:text-4xl">Corporate Branding Collateral</h1>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Complete office and event essentials: letterheads, envelopes, ID cards, lanyards, notebooks, and more.
        </p>
      </header>
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
          <img 
            src="/assets/buisnesscard1.png" 
            alt="Corporate Business Card"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
          <img 
            src="/assets/showlogo1.png" 
            alt="Corporate Logo Design"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
          <img 
            src="/assets/broucher.png" 
            alt="Corporate Brochure"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-primary/5 rounded-lg p-6 sm:p-8 mt-12">
        <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3 sm:mb-4">Ready to Order Your Corporate Branding?</h3>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">Get complete office and event essentials with professional branding</p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto">
          <a href="/requirements" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors w-full sm:w-auto">
            Order Now
          </a>
          <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors w-full sm:w-auto">
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}


