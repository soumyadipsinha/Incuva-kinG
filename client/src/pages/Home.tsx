import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="min-h-svh w-full bg-background">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 pb-10 pt-12 md:pt-20">
        <h1 className="text-center text-4xl font-normal leading-tight text-primary md:text-6xl">
          Your design format
        </h1>
      </section>

      {/* Product grid */}
      <section className="mx-auto max-w-7xl px-4 pb-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <article key={idx} className="rounded-lg border bg-card p-6">
              <div className="aspect-[3/4] w-full rounded-md bg-[url('/vite.svg')] bg-contain bg-center bg-no-repeat" />
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-primary">CALM</h3>
                  <p className="text-xs text-muted-foreground">Organic tincture</p>
                </div>
                <Button size="sm">Add</Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Themed articles section */}
      <section className="w-full bg-[#bfe0dd] py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "The Magic of Mucilage: How Demulcent Herbs Improve Digestion",
                desc:
                  "In the world of herbal medicine, demulcent herbs hold a special place due to their unique ability to soothe and protect the mucous membranes of the body. These herbs are...",
              },
              {
                title: "Medicinal Mushrooms For Arthritis Management",
                desc:
                  "Living with arthritis can be challenging, with pain and inflammation often making everyday tasks difficult. Adaptogenic mushrooms like reishi, chaga, and lion's mane offer promising benefits for managing arthritis.",
              },
              {
                title: "One for herbalism fans: Juliette of the Herbs",
                desc:
                  "Juliette of the Herbs (1998) is a captivating documentary that delves into the extraordinary life of Juliette de Bairacli Levy, an influential herbalist and natural healer...",
              },
              {
                title: "The most effective herbs to help combat stress",
                desc:
                  "Scientifically proven to influence neurotransmitters, these herbs offer a holistic approach to calming the mind and promoting emotional well-being.",
              },
            ].map((item, i) => (
              <article key={i} className="space-y-3">
                <div className="aspect-[4/3] w-full bg-muted" />
                <h3 className="text-lg font-medium leading-snug text-primary md:text-xl">{item.title}</h3>
                <p className="text-sm text-primary/80">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
