export default function BrochureDesignPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-14">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight text-primary md:text-4xl">Brochure Design (2‑sided)</h1>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Clean, print‑ready layouts with proper margins, bleed, and export profiles.
        </p>
      </header>
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="aspect-[4/3] rounded-lg border bg-muted" />
        <div className="aspect-[4/3] rounded-lg border bg-muted" />
        <div className="aspect-[4/3] rounded-lg border bg-muted" />
      </section>
    </main>
  );
}


