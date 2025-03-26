import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext"; // ✅ Import Language Context

export default function Clients() {
  const { language } = useLanguage(); // ✅ Get selected language

  // Clients data (logo and name)
  const clients = [
    { id: 1, logo: "/images/clients/logo1.png", name: "Client 1" },
    { id: 2, logo: "/images/clients/logo2.jpg", name: "Client 2" },
    { id: 3, logo: "/images/clients/logo3.png", name: "Client 3" },
    { id: 4, logo: "/images/clients/logo4.png", name: "Client 4" },
    { id: 5, logo: "/images/clients/logo5.png", name: "Client 5" },
    { id: 6, logo: "/images/clients/logo6.jpg", name: "Client 6" },
    { id: 7, logo: "/images/clients/logo7.png", name: "Client 7" },
    { id: 8, logo: "/images/clients/logo8.jpg", name: "Client 8" },
    { id: 9, logo: "/images/clients/logo9.jpg", name: "Client 9" },
    { id: 10, logo: "/images/clients/logo10.jpg", name: "Client 10" },
    { id: 11, logo: "/images/clients/logo11.png", name: "Client 11" },
    { id: 12, logo: "/images/clients/logo12.png", name: "Client 12" },
    { id: 13, logo: "/images/clients/logo13.png", name: "Client 13" },
    { id: 14, logo: "/images/clients/logo14.png", name: "Client 14" },
    { id: 15, logo: "/images/clients/logo15.png", name: "Client 15" },
    { id: 16, logo: "/images/clients/logo16.png", name: "Client 16" },
    { id: 17, logo: "/images/clients/logo17.png", name: "Client 17" },
    { id: 18, logo: "/images/clients/logo18.jpg", name: "Client 18" },
    { id: 19, logo: "/images/clients/logo19.jpg", name: "Client 19" },
    { id: 20, logo: "/images/clients/logo20.jpg", name: "Client 20" },
    { id: 21, logo: "/images/clients/logo21.png", name: "Client 21" },
    { id: 22, logo: "/images/clients/logo22.png", name: "Client 22" },
    { id: 23, logo: "/images/clients/logo23.jpg", name: "Client 23" },
    { id: 24, logo: "/images/clients/logo24.png", name: "Client 24" },
    { id: 25, logo: "/images/clients/logo25.png", name: "Client 25" },
    { id: 26, logo: "/images/clients/logo26.jpg", name: "Client 26" },
    { id: 27, logo: "/images/clients/logo27.png", name: "Client 27" },
    { id: 28, logo: "/images/clients/logo28.jpg", name: "Client 28" },
    { id: 29, logo: "/images/clients/logo29.png", name: "Client 29" },
    { id: 30, logo: "/images/clients/logo30.png", name: "Client 30" },
    { id: 31, logo: "/images/clients/logo31.png", name: "Client 31" },
    { id: 32, logo: "/images/clients/logo32.png", name: "Client 32" },
    { id: 33, logo: "/images/clients/logo33.png", name: "Client 33" },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Show animation when section is in viewport (scroll into view)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="clients"
      ref={sectionRef}
      className="bg-white pt-24 pb-20 px-4 md:px-10 overflow-hidden"
    >
      <div className="container mx-auto">
        {/* Section title (Dynamic based on selected language) */}
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          {language === "id" ? "Klien Kami" : "Our Clients"}
        </h2>

        {/* Logo grid (Full color, scale up on hover) */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center 
          transition-all duration-700 ease-out 
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {clients.map((client) => (
            <div
              key={client.id}
              className="w-32 h-20 md:w-40 md:h-24 relative flex items-center justify-center transition-transform duration-300 hover:scale-110"
            >
              {/* Client logo */}
              <Image
                src={client.logo}
                alt={client.name}
                fill
                sizes="(max-width: 768px) 80px, (max-width: 1200px) 100px, 120px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
