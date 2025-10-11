export default function VisitingCardsPage() {
  const businessCards = [
    {
      id: 1,
      title: "Executive Business Card",
      description: "Professional design with elegant typography and premium finish",
      image: "/assets/buisnesscard1.png",
      price: "₹99",
      features: ["Single-sided", "300 GSM", "Matte finish"]
    },
    {
      id: 2,
      title: "Creative Agency Card",
      description: "Bold and modern design perfect for creative agencies",
      image: "/assets/buisnesscard2.png",
      price: "₹149",
      features: ["Double-sided", "300 GSM", "Glossy finish"]
    },
    {
      id: 3,
      title: "Corporate Business Card",
      description: "Clean and professional design for corporate clients",
      image: "/assets/buisnesscard4.png",
      price: "₹199",
      features: ["Double-sided", "350 GSM", "Spot UV"]
    },
    {
      id: 4,
      title: "Premium Business Card",
      description: "Luxury design with special finishes and premium materials",
      image: "/assets/buisnesscard5.png",
      price: "₹299",
      features: ["Double-sided", "400 GSM", "Embossed"]
    }
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:py-12 md:py-14">
      <header className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-primary">Visiting Card Printing</h1>
        <p className="mt-2 max-w-3xl text-sm sm:text-base text-muted-foreground px-4 sm:px-0">
          Textured, matte, or glossy business cards with sharp typography and spot finishes.
        </p>
      </header>
      
      {/* Business Cards Grid */}
      <section className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8 sm:mb-12">
        {businessCards.map((card) => (
          <div key={card.id} className="group cursor-pointer">
            <div className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <img 
                src={card.image} 
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-3 sm:mt-4">
              <h3 className="text-base sm:text-lg font-semibold text-primary">{card.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">{card.description}</p>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2 gap-2">
                <span className="text-lg sm:text-xl font-bold text-primary">{card.price}</span>
                <div className="flex flex-wrap gap-1">
                  {card.features.map((feature, index) => (
                    <span key={index} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Additional Design Showcase */}
      <section className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 sm:mb-6">More Business Card Designs</h2>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
            <img 
              src="/assets/buisnesscard1.png" 
              alt="Business Card Design 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
            <img 
              src="/assets/buisnesscard2.png" 
              alt="Business Card Design 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
            <img 
              src="/assets/buisnesscard4.png" 
              alt="Business Card Design 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-primary/5 rounded-lg p-6 sm:p-8">
        <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3 sm:mb-4">Ready to Order Your Business Cards?</h3>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">Get professional business cards that make a lasting impression</p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto">
          <a href="/quote" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors w-full sm:w-auto">
            Get Quote
          </a>
          <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors w-full sm:w-auto">
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}


