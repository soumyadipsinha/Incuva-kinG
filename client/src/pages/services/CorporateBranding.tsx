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
    </main>
  );
}


