import Image from "next/image";
import Link from "next/link";
import useInView from "@/hooks/useInView"; // Hook observer
import { useLanguage } from "@/context/LanguageContext"; // ✅ Import context bahasa

export default function CSR() {
  const { language } = useLanguage(); // ✅ Ambil bahasa aktif

  const csrPrograms = [
    {
      id: 1,
      title: language === "id" 
        ? "Bantuan Kemanusiaan untuk Bencana Banjir di Pasuruan"
        : "Humanitarian Aid for Flood Disaster in Pasuruan",
      image: "/images/csr/csr123.jpeg",
      description: language === "id" 
        ? "Exel Mandiri Inovasi aktif dalam program kemanusiaan untuk membantu masyarakat yang terdampak banjir."
        : "Exel Mandiri Inovasi is active in humanitarian programs to assist communities affected by floods.",
      date: "2025-02-15",
    },
    {
      id: 2,
      title: language === "id" 
        ? "Bantuan Kemanusiaan untuk Bencana Gempa Bumi di Lombok"
        : "Humanitarian Aid for Earthquake Disaster in Lombok",
      image: "/images/csr/csr2.jpg",
      description: language === "id" 
        ? "Exel Mandiri Inovasi turut serta membantu korban gempa bumi di Lombok melalui program kemanusiaan."
        : "Exel Mandiri Inovasi participates in helping earthquake victims in Lombok through humanitarian programs.",
      date: "2025-01-28",
    },
    {
      id: 3,
      title: language === "id" 
        ? "Dukungan untuk Para Guru di SD Srigading"
        : "Support for Teachers at Srigading Elementary School",
      image: "/images/csr/csr3.jpeg",
      description: language === "id" 
        ? "Exel Mandiri Inovasi mendukung dunia pendidikan melalui bantuan kepada para guru di SD Srigading."
        : "Exel Mandiri Inovasi supports education by assisting teachers at Srigading Elementary School.",
      date: "2024-12-10",
    },
  ];

  // Fungsi untuk format tanggal
  const formatDate = (dateString) => {
    if (!dateString) return "";
    
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return new Intl.DateTimeFormat(language === "id" ? "id-ID" : "en-US", options).format(new Date(dateString));
  };

  // Hook intersection observer untuk mendeteksi scroll
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  return (
    <section
      id="csr"
      ref={ref}
      className="bg-white pt-24 pb-20 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Judul Section */}
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          {language === "id" 
            ? "Tanggung Jawab Sosial Perusahaan (CSR)" 
            : "Corporate Social Responsibility (CSR)"
          }
        </h2>

        {/* Grid CSR Program */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {csrPrograms.map((program, idx) => (
            <div
              key={program.id}
              className={`bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden flex flex-col 
                transition-all duration-700 ease-out
                ${isVisible ? "animate-fade-in-up opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{
                animationDelay: `${idx * 200}ms`,
                animationFillMode: "forwards",
              }}
            >
              {/* Gambar Program */}
              <div className="relative h-52 w-full">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Konten Program */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 leading-snug">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {program.description}
                  </p>
                </div>

                {/* Footer Program */}
                <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-100">
                  <p className="text-gray-400 text-xs">{formatDate(program.date)}</p>
                  <Link href={`/news/csr/${program.id}`} passHref>
                    <span className="text-primary hover:underline text-sm font-medium cursor-pointer">
                      {language === "id" ? "Baca Selengkapnya →" : "Read More →"}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
