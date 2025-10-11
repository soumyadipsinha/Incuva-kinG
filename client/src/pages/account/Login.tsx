import { Button } from "@/components/ui/button";

export default function AccountLoginPage() {
  return (
    <main className="w-full">
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2">
        <section className="px-4 sm:px-6 py-8 sm:py-14 md:px-10">
          <h1 className="text-3xl sm:text-4xl font-normal tracking-tight text-primary">Login</h1>
          <form className="mt-6 sm:mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email"
              className="h-12 w-full rounded-md border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="h-12 w-full rounded-md border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring"
              required
            />
            <div className="text-right text-sm">
              <a href="#" className="text-muted-foreground hover:underline">Forgot your password?</a>
            </div>
            <Button type="submit" className="h-12 w-full md:w-auto">Sign in</Button>
          </form>
          <div className="mt-6 space-y-2 text-sm">
            <p>
              Don&apos;t have an account? <a href="/account/signup" className="underline">Sign up</a>
            </p>
            <a href="#" className="underline">Manage Subscriptions</a>
          </div>
        </section>
        <aside className="hidden items-center justify-center md:flex">
          <div className="m-4 sm:m-8 aspect-[4/5] w-full max-w-md rounded-xl overflow-hidden">
            <img 
              src="/assets/buisnesscard1.png" 
              alt="Professional Business Card Design"
              className="w-full h-full object-cover"
            />
          </div>
        </aside>
      </div>
    </main>
  );
}


