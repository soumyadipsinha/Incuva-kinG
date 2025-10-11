export default function VinylPrintingPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-14">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight text-primary md:text-4xl">Vinyl Printing</h1>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          High‑resolution posters and custom stickers with premium adhesive and precise die‑cutting.
        </p>
      </header>
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
          <img 
            src="/assets/poster1.png" 
            alt="Vinyl Poster 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
          <img 
            src="/assets/poster2.png" 
            alt="Vinyl Poster 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
          <img 
            src="/assets/poster3.png" 
            alt="Vinyl Poster 3"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </main>
  );
}


