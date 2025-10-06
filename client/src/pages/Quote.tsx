import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-16 text-center">
        <h1 className="text-3xl font-semibold text-primary">Request received</h1>
        <p className="mt-2 text-muted-foreground">
          Thanks! We’ll get back to you shortly with a quote.
        </p>
        <Button className="mt-6" onClick={() => setSubmitted(false)}>Submit another request</Button>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-semibold tracking-tight text-primary md:text-4xl">Get a Quote</h1>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
        Share your specs and files. We’ll review paper/finish options and reply with timelines and pricing.
      </p>

      <form className="mt-8 grid grid-cols-1 gap-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input required placeholder="Full name" className="h-12 rounded-md border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring" />
          <input required type="email" placeholder="Email" className="h-12 rounded-md border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring" />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input placeholder="Phone (optional)" className="h-12 rounded-md border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring" />
          <select className="h-12 rounded-md border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring">
            <option>Service type</option>
            <option>Flex Printing</option>
            <option>Vinyl Printing</option>
            <option>Canvera-style Album</option>
            <option>Catalog & Brochure</option>
            <option>Visiting Cards</option>
            <option>Logo Design</option>
            <option>Brochure Design (2-sided)</option>
            <option>Poster / Pamphlet / Flyer Design</option>
            <option>Banner & Hoarding Design</option>
            <option>Corporate Branding</option>
          </select>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <input placeholder="Quantity" className="h-12 rounded-md border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring" />
          <input placeholder="Size (e.g., A4, 6x4 ft)" className="h-12 rounded-md border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring" />
          <select className="h-12 rounded-md border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring">
            <option>Finish</option>
            <option>Matte</option>
            <option>Gloss</option>
            <option>Textured</option>
          </select>
        </div>
        <textarea rows={5} placeholder="Notes / requirements" className="rounded-md border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring" />
        <div>
          <label className="mb-1 block text-sm">Upload reference files (optional)</label>
          <input type="file" multiple className="block w-full rounded-md border bg-background p-2 text-sm" />
        </div>
        <Button type="submit" className="h-12">Submit request</Button>
      </form>
    </main>
  );
}


