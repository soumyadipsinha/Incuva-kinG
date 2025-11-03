import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { useToast } from "@/context/ToastContext";

export default function AccountLoginPage() {
  const { login, logout, isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation() as any;
  const from = location.state?.from?.pathname || "/services";
  const { show } = useToast();

  // All asset images to rotate on the sidebar (png/jpg only)
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
    
    
      "/assets/poster1.png",
      "/assets/poster2.png",
      "/assets/poster3.png",
      "/assets/poster4.png",
      "/assets/poster5.png",
      "/assets/poster67.png",
      "/assets/poster7.png",
      "/assets/Red Black and White Dynamic Boxing Presentation.png",
      
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

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    // Validation: either email or phone must be provided
    if (!email && !phone) {
      setError("Please provide either email or phone number");
      show("Please provide either email or phone number", "error");
      return;
    }

    if (!password) {
      setError("Password is required");
      show("Password is required", "error");
      return;
    }

    setIsLoading(true);

    try {
      await login(email, phone, password);
      show("Login successful");
      navigate(from, { replace: true });
    } catch (err: any) {
      setError(err.message || "Login failed. Please try again.");
      show(err.message || "Login failed", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      show("Logged out successfully");
      navigate("/", { replace: true });
    } catch (err: any) {
      console.error("Logout error:", err);
      // Even if logout fails on server, clear local state
      navigate("/", { replace: true });
    }
  };

  return (
    <main className="w-full">
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2">
        <section className="px-4 sm:px-6 py-8 sm:py-14 md:px-10">
          <h1 className="text-3xl sm:text-4xl font-normal tracking-tight text-primary">Login</h1>
          {isAuthenticated && user && (
            <div className="mt-4 p-4 rounded-md bg-green-50 border border-green-200">
              <p className="text-sm font-medium text-green-800">
                Welcome back, {user.firstName} {user.lastName}!
              </p>
              <p className="text-xs text-green-600 mt-1">{user.email}</p>
            </div>
          )}
          <form className="mt-6 sm:mt-8 space-y-4" onSubmit={handleSubmit}>
            {error && (
              <div className="p-3 rounded-md bg-red-50 border border-red-200 text-red-600 text-sm">
                {error}
              </div>
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 w-full rounded-md border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <div className="text-xs text-muted-foreground text-center">OR</div>
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="h-12 w-full rounded-md border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 w-full rounded-md border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring"
              required
            />
            <div className="text-right text-sm">
              <a href="#" className="text-muted-foreground hover:underline">Forgot your password?</a>
            </div>
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
              <Button type="submit" className="h-12 w-full md:w-auto" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
              {isAuthenticated && (
                <Button type="button" variant="outline" className="h-12 w-full md:w-auto" onClick={handleLogout}>
                  Logout
                </Button>
              )}
            </div>
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


