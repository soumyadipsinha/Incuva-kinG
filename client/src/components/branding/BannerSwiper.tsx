import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function BannerSwiper() {
  const slides = [
    {
      src: "/assets/logobanner.png",
      alt: "Custom logo and branding",
      title: "Build a memorable brand",
      desc: "Professional logo and identity design tailored to your business.",
      href: "/services#logo-design",
      cta: "Explore Logo Design",
    },
    {
      src: "/assets/buisnessbanner.png",
      alt: "Business collateral and cards",
      title: "Business cards that impress",
      desc: "Premium single/double-sided designs, print‑ready in hours.",
      href: "/services/visiting-cards",
      cta: "Order Cards",
    },
    {
      src: "/assets/doublesidedbanner.png",
      alt: "Event banners and hoardings",
      title: "Banners that get noticed",
      desc: "Eye‑catching flex and vinyl for promotions, events, and storefronts.",
      href: "/services/flex-printing",
      cta: "Print Flex/Vinyl",
    },
    {
      src: "/assets/resumebanner.png",
      alt: "Brochures and catalogs",
      title: "Brochures that tell your story",
      desc: "Clean, compelling layouts for catalogs and marketing handouts.",
      href: "/services/catalog-brochure",
      cta: "Browse Brochures",
    },
  ];

  return (
    <div className="w-full">
      <div className="w-full group">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          pagination={{ clickable: true }}
          navigation
          slidesPerView={1}
          className="w-full [&_.swiper-button-next]:opacity-0 [&_.swiper-button-prev]:opacity-0 group-hover:[&_.swiper-button-next]:opacity-100 group-hover:[&_.swiper-button-prev]:opacity-100 [&_.swiper-button-next]:transition-opacity [&_.swiper-button-prev]:transition-opacity [&_.swiper-button-next]:duration-300 [&_.swiper-button-prev]:duration-300"
        >
          {slides.map((s, idx) => (
            <SwiperSlide key={idx}>
              <div className="w-full">
                <div className="relative mx-auto w-full">
                  <img
                    src={s.src}
                    alt={s.alt}
                    className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-[32rem] rounded-2xl"
                    loading="eager"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}


