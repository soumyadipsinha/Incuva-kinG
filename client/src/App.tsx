import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ShippingNotice from "@/components/layout/ShippingNotice"
import HomePage from "@/pages/Home"
import ServicesPage from "@/pages/Services"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "@/context/AuthContext"
import { ToastProvider } from "@/context/ToastContext"
import { CartProvider } from "@/context/CartContext"
import ProtectedRoute from "@/components/ProtectedRoute"
import FlexPrintingPage from "@/pages/services/FlexPrinting"
import VinylPrintingPage from "@/pages/services/VinylPrinting"
import AlbumPrintingPage from "@/pages/services/AlbumPrinting"
import CatalogBrochurePage from "@/pages/services/CatalogBrochure"
import VisitingCardsPage from "@/pages/services/VisitingCards"
import LogoDesignPage from "@/pages/services/LogoDesign"
import BrochureDesignPage from "@/pages/services/BrochureDesign"
import PosterFlyerDesignPage from "@/pages/services/PosterFlyerDesign"
import BannerHoardingDesignPage from "@/pages/services/BannerHoardingDesign"
import CorporateBrandingPage from "@/pages/services/CorporateBranding"
import QuotePage from "@/pages/Quote"
import ContactPage from "@/pages/Contact"
import AboutPage from "@/pages/About"
import OurWorksPage from "@/pages/OurWorks"
import CartPage from "@/pages/Cart"
import AccountLoginPage from "@/pages/account/Login"
import AccountSignupPage from "@/pages/account/Signup"
import BannersPage from "@/pages/Banners"
import ExplorePage from "@/pages/Explore"
import FlexPrintingExplore from "@/pages/explore/FlexPrinting"
import LogoDesignExplore from "@/pages/explore/LogoDesign"
import BusinessCardsExplore from "@/pages/explore/BusinessCards"
import BannersExplore from "@/pages/explore/Banners"
import PricingPage from "@/pages/Pricing"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastProvider>
          <CartProvider>
        <div className="min-h-svh w-full">
          <ShippingNotice />
          <Navbar />
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/account/login" element={<AccountLoginPage />} />
            <Route path="/account/signup" element={<AccountSignupPage />} />

            {/* Protected routes */}
            <Route path="/explore" element={<ProtectedRoute><ExplorePage /></ProtectedRoute>} />
            <Route path="/explore/flex-printing" element={<ProtectedRoute><FlexPrintingExplore /></ProtectedRoute>} />
            <Route path="/explore/logo-design" element={<ProtectedRoute><LogoDesignExplore /></ProtectedRoute>} />
            <Route path="/explore/business-cards" element={<ProtectedRoute><BusinessCardsExplore /></ProtectedRoute>} />
            <Route path="/explore/banners" element={<ProtectedRoute><BannersExplore /></ProtectedRoute>} />
            <Route path="/pricing" element={<ProtectedRoute><PricingPage /></ProtectedRoute>} />
            <Route path="/banners" element={<ProtectedRoute><BannersPage /></ProtectedRoute>} />
            <Route path="/services" element={<ProtectedRoute><ServicesPage /></ProtectedRoute>} />
            <Route path="/quote" element={<ProtectedRoute><QuotePage /></ProtectedRoute>} />
            <Route path="/contact" element={<ProtectedRoute><ContactPage /></ProtectedRoute>} />
            <Route path="/about" element={<ProtectedRoute><AboutPage /></ProtectedRoute>} />
            <Route path="/our-works" element={<ProtectedRoute><OurWorksPage /></ProtectedRoute>} />
            <Route path="/cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
            <Route path="/services/flex-printing" element={<ProtectedRoute><FlexPrintingPage /></ProtectedRoute>} />
            <Route path="/services/vinyl-printing" element={<ProtectedRoute><VinylPrintingPage /></ProtectedRoute>} />
            <Route path="/services/album-printing" element={<ProtectedRoute><AlbumPrintingPage /></ProtectedRoute>} />
            <Route path="/services/catalog-brochure" element={<ProtectedRoute><CatalogBrochurePage /></ProtectedRoute>} />
            <Route path="/services/visiting-cards" element={<ProtectedRoute><VisitingCardsPage /></ProtectedRoute>} />
            <Route path="/services/logo-design" element={<ProtectedRoute><LogoDesignPage /></ProtectedRoute>} />
            <Route path="/services/brochure-design" element={<ProtectedRoute><BrochureDesignPage /></ProtectedRoute>} />
            <Route path="/services/poster-flyer-design" element={<ProtectedRoute><PosterFlyerDesignPage /></ProtectedRoute>} />
            <Route path="/services/banner-hoarding-design" element={<ProtectedRoute><BannerHoardingDesignPage /></ProtectedRoute>} />
            <Route path="/services/corporate-branding" element={<ProtectedRoute><CorporateBrandingPage /></ProtectedRoute>} />
          </Routes>
          <Footer />
        </div>
          </CartProvider>
        </ToastProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App