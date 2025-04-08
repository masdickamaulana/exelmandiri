import Image from "next/image";
import Link from "next/link";
import useInView from "@/hooks/useInView"; // Pastikan path sesuai
import { useLanguage } from "@/context/LanguageContext"; // ✅ Import Language Context

export default function Information() {
  const { language } = useLanguage(); // ✅ Ambil bahasa yang dipilih

  // Fungsi format tanggal
  const formatDate = (dateStr) => {
    if (!dateStr) return "-"; // Jika kosong/null
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return "-"; // Jika tidak valid
    return new Intl.DateTimeFormat(language === "id" ? "id-ID" : "en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  // Data berita perusahaan
  const news = [
    {
      id: 1,
      title: language === "id" 
        ? "PT Exel Mandiri Inovasi Juara Nasional Olimpiade Kemenaker RI" 
        : "PT Exel Mandiri Inovasi Wins National Kemenaker RI Olympiad",
      image: "/images/information/news1.jpg",
      description: language === "id" 
        ? "Prestasi membanggakan diraih PT Exel Mandiri Inovasi sebagai Teladan 2 Nasional Olimpiade Pengupahan Berbasis Produktivitas Kemenaker RI."
        : "A proud achievement by PT Exel Mandiri Inovasi as the 2nd National Role Model in the Kemenaker RI Productivity-Based Wage Olympiad.",
      date: "",
    },
    {
      id: 2,
      title: language === "id" 
        ? "PT. Exel Mandiri Inovasi Memberangkatkan 14 Karyawan Umroh, Semoga Menjadi Motivasi Karyawan dan Keberkahan Kita Semua"
        : "PT. Exel Mandiri Inovasi Sends 14 Employees for Umrah, Hoping to Inspire and Bring Blessings to All",
      image: "/images/information/news2.jpg",
      description: language === "id" 
        ? "PT Exel Mandiri Inovasi memberangkatkan 14 karyawan dan tokoh masyarakat untuk menunaikan ibadah umroh sebagai bentuk apresiasi dan motivasi."
        : "PT Exel Mandiri Inovasi sends 14 employees and community leaders for Umrah as a form of appreciation and motivation.",
      date: "",
    },
    {
      id: 3,
      title: language === "id" 
        ? "PT. Exel Mandiri Inovasi Gelar Pengajian Akbar Sambut Tahun Baru 2024"
        : "PT. Exel Mandiri Inovasi Holds Grand Recitation to Welcome 2024",
      image: "/images/information/news3.jpg",
      description: language === "id" 
        ? "Pengajian akbar digelar PT Exel Mandiri Inovasi dalam rangka menyambut tahun baru 2024 sebagai sarana mempererat silaturahmi dan meningkatkan keimanan."
        : "A grand recitation was held by PT Exel Mandiri Inovasi to welcome 2024, strengthening bonds and faith.",
      date: "",
    },
  ];

  // Observer untuk animasi saat elemen terlihat di layar
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  return (
    <section
      id="information"
      ref={ref}
      className="bg-gray-100 pt-32 pb-20 overflow-hidden px-4 sm:px-8"
    >
      <div className="container mx-auto px-6">
        {/* Judul Section */}
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          {language === "id" ? "Informasi Perusahaan" : "Company Information"}
        </h2>

        {/* Grid Berita */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, idx) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden flex flex-col 
                transition-all duration-700 ease-out
                ${isVisible ? "animate-fade-in-up opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{
                animationDelay: `${idx * 200}ms`,
                animationFillMode: "forwards",
              }}
            >
              {/* Gambar Berita */}
              <div className="relative h-52 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Konten Berita */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Footer Berita */}
                <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-100">
                  <p className="text-gray-400 text-xs">{formatDate(item.date)}</p>
                  <Link href={`/news/company/${item.id}`} passHref>
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
