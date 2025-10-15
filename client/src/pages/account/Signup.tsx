import { Button } from "@/components/ui/button";
import { useEffect, useMemo, useState } from "react";

export default function AccountSignupPage() {
  // Sidebar rotating images (same list used in Login)
  const sidebarImages = useMemo(
    () => [
      "/assets/_Blue and White Illustrated Earth Hour Facebook Post.png",
      "/assets/Biru Hijau Selamat Hari Perawat Nasional Konten Instagram.png",
      "/assets/broucher.png",
      "/assets/broucher2.png",
      "/assets/broucher3.png",
      
      "/assets/buisnesscard1.png",
      "/assets/buisnesscard2.png",
      "/assets/buisnesscard4.png",
      "/assets/buisnesscard5.png",
      "/assets/canverastylealbum1.png",
      "/assets/canverastylealbum2.png",
      "/assets/canverastylealbum3.png",
      "/assets/canverastylealbum4.png",
      "/assets/canverastylealbum5.png",
      "/assets/canverastylealbum6.png",
      "/assets/doublesidedbanner.png",
      "/assets/Earth Hour (Konten Instagram).png",
      "/assets/flex1.jpg",
      "/assets/flex2.jpg",
      "/assets/flex3.jpg",
      "/assets/free.png",
      "/assets/GIVEAWAY (Konten Instagram).png",
      "/assets/logo.png",
      "/assets/logobanner.png",
      "/assets/poster1.png",
      "/assets/poster2.png",
      "/assets/poster3.png",
      "/assets/poster4.png",
      "/assets/poster5.png",
      "/assets/poster67.png",
      "/assets/poster7.png",
      "/assets/Red Black and White Dynamic Boxing Presentation.png",
      "/assets/resumebanner.png",
      "/assets/showlogo1.png",
      "/assets/showlogo2.png",
      "/assets/showlogo3.png",
      "/assets/TIME TO HOLIDAY (Konten Instagram).png",
      "/assets/White Modern Travel Instagram Post.png"
    ],
    []
  );

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (sidebarImages.length === 0) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        if (sidebarImages.length <= 1) return prev;
        let next = prev;
        while (next === prev) {
          next = Math.floor(Math.random() * sidebarImages.length);
        }
        return next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [sidebarImages.length]);
  return (
    <main className="w-full">
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2">
        <section className="px-4 sm:px-6 py-8 sm:py-14 md:px-10">
          <h1 className="text-3xl sm:text-4xl font-normal tracking-tight text-primary">Create account</h1>
          <form className="mt-6 sm:mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input placeholder="First name" className="h-12 w-full rounded-md border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring" required />
              <input placeholder="Last name" className="h-12 w-full rounded-md border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring" required />
            </div>
            <input type="email" placeholder="Email" className="h-12 w-full rounded-md border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring" required />
            <input type="tel" placeholder="Phone Number" className="h-12 w-full rounded-md border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring" required />
            <input type="password" placeholder="Password" className="h-12 w-full rounded-md border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring" required />
            <Button type="submit" className="h-12 w-full md:w-auto">Create</Button>
          </form>
          <p className="mt-6 text-sm">
            Already have an account? <a href="/account/login" className="underline">Login</a>
          </p>
        </section>
        <aside className="hidden items-center justify-center md:flex">
          <div className="m-4 sm:m-8 aspect-[4/5] w-full max-w-md rounded-xl overflow-hidden">
            <img 
              src={sidebarImages[currentImageIndex]} 
              alt="Gallery"
              className="w-full h-full object-cover transition-opacity duration-700"
            />
          </div>
        </aside>
      </div>
    </main>
  );
}


