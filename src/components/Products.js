import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext"; // ✅ Import context bahasa

export default function Products() {
  const { language } = useLanguage(); // ✅ Ambil bahasa dari context

  // Data produk
  const products = [
    { name: "Pipe Holder High Pressure", image: "/images/products/produk1.jpg" },
    { name: "Pipe Holder 4", image: "/images/products/produk2.jpg" },
    { name: "Ball Feet", image: "/images/products/produk3.jpg" },
    { name: "Pipe Nipple", image: "/images/products/produk4.jpg" },
    { name: "Handle Batterfly Valve", image: "/images/products/produk5.jpg" },
    { name: "Tee Reducer & Reducer", image: "/images/products/produk6.jpg" },
    { name: "Ferrule", image: "/images/products/produk7.jpg" },
    { name: "Chuck Cut", image: "/images/products/produk8.jpg" },
    { name: "Ball Feet Teflon Anvil", image: "/images/products/produk9.jpg" },
    { name: "Orifice", image: "/images/products/produk10.jpg" },
    { name: "Cup Pipa Sanitari", image: "/images/products/produk11.jpg" },
    { name: "Cup Pipa Sanitari", image: "/images/products/produk12.jpg" },
    { name: "Tangki", image: "/images/products/produk13.jpg" },
    { name: "Manhole", image: "/images/products/produk14.jpg" },
    { name: "Manhole", image: "/images/products/produk15.jpg" },
  ];

  // Dictionary untuk teks "Produk Kami"
  const dictionary = {
    id: 'Produk Kami',
    en: 'Our Products',
  };

  // Inisialisasi slider
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1.1,
      spacing: 12,
    },
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 2.2, spacing: 16 } },
      "(min-width: 1024px)": { slides: { perView: 3.2, spacing: 20 } },
      "(min-width: 1280px)": { slides: { perView: 4, spacing: 24 } },
    },
  });

  // Auto-slide 4 detik, berhenti saat hover
  const sliderContainerRef = useRef(null);

  useEffect(() => {
    const slider = instanceRef.current;
    let interval;

    const startAutoSlide = () => {
      interval = setInterval(() => {
        slider?.next();
      }, 4000);
    };

    const stopAutoSlide = () => clearInterval(interval);

    startAutoSlide();

    const sliderEl = sliderContainerRef.current;
    if (sliderEl) {
      sliderEl.addEventListener("mouseover", stopAutoSlide);
      sliderEl.addEventListener("mouseout", startAutoSlide);
    }

    return () => {
      stopAutoSlide();
      if (sliderEl) {
        sliderEl.removeEventListener("mouseover", stopAutoSlide);
        sliderEl.removeEventListener("mouseout", startAutoSlide);
      }
    };
  }, [instanceRef]);

  return (
    <section id="products" className="bg-white pt-32 pb-20 overflow-hidden px-4 sm:px-8">
      <div className="container mx-auto relative">
        {/* ✅ Judul Section pakai bahasa dinamis */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          {dictionary[language]}
        </h2>

        {/* Slider Produk */}
        <div ref={sliderContainerRef} className="relative">
          <div ref={sliderRef} className="keen-slider">
            {products.map((product, index) => (
              <div key={index} className="keen-slider__slide animate-fade-in">
                <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
                  {/* Gambar Produk */}
                  <div className="aspect-[4/3] w-full bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  {/* Nama Produk */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-center text-gray-700">
                      {product.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tombol Navigasi Slider */}
          <button
            onClick={() => instanceRef.current?.prev()}
            aria-label="Sebelumnya"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-3 rounded-full hover:bg-gray-100"
          >
            ◀
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            aria-label="Selanjutnya"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-3 rounded-full hover:bg-gray-100"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}
