export default function PosterFlyerDesignPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-14">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight text-primary md:text-4xl">Poster / Pamphlet / Flyer Design</h1>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Attention‑grabbing compositions and messaging optimized for reach and recall.
        </p>
      </header>
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
          <img 
            src="/assets/poster1.png" 
            alt="Poster Design 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
          <img 
            src="/assets/poster2.png" 
            alt="Poster Design 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
          <img 
            src="/assets/poster3.png" 
            alt="Poster Design 3"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-primary/5 rounded-lg p-6 sm:p-8 mt-12">
        <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3 sm:mb-4">Ready to Order Your Poster/Flyer Design?</h3>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">Get professional poster and flyer designs that capture attention and drive results</p>
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


