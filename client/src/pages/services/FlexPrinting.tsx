export default function FlexPrintingPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:py-12 md:py-14">
      <header className="mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-primary">Flex Printing</h1>
        <p className="mt-2 max-w-3xl text-sm sm:text-base text-muted-foreground px-4 sm:px-0">
          Durable frontlit/backlit banners and outdoor hoardings engineered for vivid color and long‑lasting weather resistance.
        </p>
      </header>
      <section className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
        <div className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
          <img 
            src="/assets/flex1.jpg" 
            alt="Flex Banner Printing 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
          <img 
            src="/assets/flex2.jpg" 
            alt="Flex Banner Printing 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
          <img 
            src="/assets/flex3.jpg" 
            alt="Flex Banner Printing 3"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </main>
  );
}


