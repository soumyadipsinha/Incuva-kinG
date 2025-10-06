import { Button } from "@/components/ui/button";

export default function AccountSignupPage() {
  return (
    <main className="w-full">
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2">
        <section className="px-6 py-14 md:px-10">
          <h1 className="text-4xl font-normal tracking-tight text-primary">Create account</h1>
          <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input placeholder="First name" className="h-12 w-full rounded-md border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring" required />
              <input placeholder="Last name" className="h-12 w-full rounded-md border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring" required />
            </div>
            <input type="email" placeholder="Email" className="h-12 w-full rounded-md border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring" required />
            <input type="password" placeholder="Password" className="h-12 w-full rounded-md border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring" required />
            <Button type="submit" className="h-12 w-full md:w-auto">Create</Button>
          </form>
          <p className="mt-6 text-sm">
            Already have an account? <a href="/account/login" className="underline">Login</a>
          </p>
        </section>
        <aside className="hidden items-center justify-center md:flex">
          <div className="m-8 aspect-[4/5] w-full max-w-md rounded-xl border bg-muted" />
        </aside>
      </div>
    </main>
  );
}


