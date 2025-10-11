export default function BannerHoardingDesignPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-14">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight text-primary md:text-4xl">Banner & Hoarding Design</h1>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Large‑format layouts designed for distance visibility, modular sizes, and consistent branding.
        </p>
      </header>
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
          <img 
            src="/assets/flex1.jpg" 
            alt="Flex Banner Design 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
          <img 
            src="/assets/flex2.jpg" 
            alt="Flex Banner Design 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
          <img 
            src="/assets/flex3.jpg" 
            alt="Flex Banner Design 3"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </main>
  );
}


