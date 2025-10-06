import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-semibold tracking-tight text-primary md:text-4xl">Contact Us</h1>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
        Have a project or question? Drop us a message—our team will respond promptly.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <section className="rounded-xl border bg-card p-6 lg:col-span-2">
          <form className="grid grid-cols-1 gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input required placeholder="Full name" className="h-12 rounded-md border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring" />
              <input required type="email" placeholder="Email" className="h-12 rounded-md border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <input placeholder="Phone (optional)" className="h-12 rounded-md border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring" />
            <textarea rows={6} placeholder="How can we help?" className="rounded-md border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring" />
            <Button type="submit" className="h-12">Send message</Button>
          </form>
        </section>

        <aside className="rounded-xl border bg-card p-6">
          <h2 className="text-lg font-medium text-primary">Reach us</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Email: support@example.com</li>
            <li>Phone: +91 00000 00000</li>
            <li>Hours: Mon–Sat, 10am–7pm</li>
          </ul>
        </aside>
      </div>
    </main>
  );
}


