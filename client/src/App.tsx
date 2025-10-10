import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import HomePage from "@/pages/Home"
import ServicesPage from "@/pages/Services"
import { BrowserRouter, Routes, Route } from "react-router-dom"
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
      <div className="min-h-svh w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/explore/flex-printing" element={<FlexPrintingExplore />} />
          <Route path="/explore/logo-design" element={<LogoDesignExplore />} />
          <Route path="/explore/business-cards" element={<BusinessCardsExplore />} />
          <Route path="/explore/banners" element={<BannersExplore />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/banners" element={<BannersPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/account/login" element={<AccountLoginPage />} />
          <Route path="/account/signup" element={<AccountSignupPage />} />
          <Route path="/services/flex-printing" element={<FlexPrintingPage />} />
          <Route path="/services/vinyl-printing" element={<VinylPrintingPage />} />
          <Route path="/services/album-printing" element={<AlbumPrintingPage />} />
          <Route path="/services/catalog-brochure" element={<CatalogBrochurePage />} />
          <Route path="/services/visiting-cards" element={<VisitingCardsPage />} />
          <Route path="/services/logo-design" element={<LogoDesignPage />} />
          <Route path="/services/brochure-design" element={<BrochureDesignPage />} />
          <Route path="/services/poster-flyer-design" element={<PosterFlyerDesignPage />} />
          <Route path="/services/banner-hoarding-design" element={<BannerHoardingDesignPage />} />
          <Route path="/services/corporate-branding" element={<CorporateBrandingPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App