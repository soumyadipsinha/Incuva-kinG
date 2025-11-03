import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { useToast } from "@/context/ToastContext";

export default function AccountSignupPage() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const { show } = useToast();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await signup(firstName, lastName, email, phone, password);
      show("Account created successfully!");
      navigate("/services", { replace: true });
    } catch (err: any) {
      setError(err.message || "Signup failed. Please try again.");
      show(err.message || "Signup failed", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="w-full">
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2">
        <section className="px-4 sm:px-6 py-8 sm:py-14 md:px-10">
          <h1 className="text-3xl sm:text-4xl font-normal tracking-tight text-primary">Create account</h1>
          <form className="mt-6 sm:mt-8 space-y-4" onSubmit={handleSubmit}>
            {error && (
              <div className="p-3 rounded-md bg-red-50 border border-red-200 text-red-600 text-sm">
                {error}
              </div>
            )}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input 
                placeholder="First name" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="h-12 w-full rounded-md border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring" 
                required 
              />
              <input 
                placeholder="Last name" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="h-12 w-full rounded-md border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring" 
                required 
              />
            </div>
            <input 
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 w-full rounded-md border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring" 
              required 
            />
            <input 
              type="tel" 
              placeholder="Phone Number" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="h-12 w-full rounded-md border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring" 
              required 
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 w-full rounded-md border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring" 
              required 
            />
            <Button type="submit" className="h-12 w-full md:w-auto" disabled={isLoading}>
              {isLoading ? "Creating account..." : "Create"}
            </Button>
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


