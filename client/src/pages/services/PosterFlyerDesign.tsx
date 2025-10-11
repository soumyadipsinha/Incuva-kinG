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
    </main>
  );
}


