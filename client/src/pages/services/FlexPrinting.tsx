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

      {/* Call to Action */}
      <section className="text-center bg-primary/5 rounded-lg p-6 sm:p-8 mt-12">
        <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3 sm:mb-4">Ready to Order Your Flex Printing?</h3>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">Get durable flex banners and hoardings with vivid colors and weather resistance</p>
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


