export default function ServicesPage() {
  const categories: Array<{ id: string; title: string; items: string[]; blurb: string }> = [
    {
      id: "flex-printing",
      title: "Flex Printing",
      blurb:
        "Durable frontlit/backlit flex banners and outdoor hoardings with vivid color and weather resistance.",
      items: ["Frontlit Banners", "Backlit Banners", "Hoardings"],
    },
    {
      id: "vinyl-printing",
      title: "Vinyl Printing",
      blurb: "High-resolution posters, labels, and die-cut stickers with premium adhesive vinyl.",
      items: ["Posters", "Stickers"],
    },
    {
      id: "album-printing",
      title: "Canvera-style Album Printing",
      blurb:
        "Lay‑flat albums with archival papers and protective lamination—perfect for weddings and events.",
      items: ["Premium Lay‑flat Albums", "Photo Books"],
    },
    {
      id: "catalog-brochure",
      title: "Catalog & Brochure Printing",
      blurb: "Multi‑page catalogs and brochures with vibrant color management and clean finishing.",
      items: ["Catalogs", "Tri‑fold Brochures", "Bi‑fold Brochures"],
    },
    {
      id: "visiting-cards",
      title: "Visiting Card Printing",
      blurb: "Textured, matte, or glossy business cards with sharp typography and brand colors.",
      items: ["Matte/Glossy", "Textured", "Spot UV"],
    },
    {
      id: "logo-design",
      title: "Logo Design",
      blurb: "Distinctive brand marks crafted for clarity, scalability, and memorability.",
      items: ["Brand Discovery", "Concepts & Revisions", "Final Assets"],
    },
    {
      id: "brochure-design",
      title: "Brochure Design (2‑sided)",
      blurb: "Crisp layouts, grid systems, and print‑ready files aligned to your brand.",
      items: ["A4/A5 Single Sheet", "Custom Sizes"],
    },
    {
      id: "poster-flyer-design",
      title: "Poster / Pamphlet / Flyer Design",
      blurb: "Attention‑grabbing creative for promos, events, and campaigns across formats.",
      items: ["A3/A4 Posters", "Pamphlets", "Flyers"],
    },
    {
      id: "banner-hoarding-design",
      title: "Banner & Hoarding Design",
      blurb: "Large‑format compositions designed for distance readability and high impact.",
      items: ["Outdoor Hoardings", "Retail Banners"],
    },
    {
      id: "corporate-branding",
      title: "Corporate Branding Collateral",
      blurb:
        "Complete business stationery and event kits: letterheads, envelopes, ID cards, lanyards, and more.",
      items: ["Letterheads", "Envelopes", "ID Cards", "Lanyards"],
    },
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 py-14">
      <header className="mb-8 text-center">
        <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">Services</p>
        <h1 className="text-3xl font-semibold tracking-tight text-primary md:text-4xl">
          Printing and Graphics Hub
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
          From high‑impact outdoor banners to premium catalogs and brand design, we deliver end‑to‑end
          print quality, color accuracy, and impeccable finishing.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {categories.map((cat) => (
          <section key={cat.id} id={cat.id} className="rounded-xl border bg-card p-6">
            <h2 className="text-xl font-medium text-primary">{cat.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{cat.blurb}</p>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {cat.items.map((item) => (
                <li key={item} className="text-sm">• {item}</li>
              ))}
            </ul>
            <div className="mt-4">
              <a href={`/services/${cat.id}`} className="text-sm font-medium text-primary hover:underline">View details</a>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}


