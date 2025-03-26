import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function NewsPage() {
  const router = useRouter();
  const { tab } = router.query;

  const { language } = useLanguage();

  // Handle active tab with fallback if invalid
  const activeTab = tab && ["all", "company", "csr"].includes(tab) ? tab : "all";

  // Function to change tab and update URL
  const handleTabChange = (selectedTab) => {
    router.push(
      {
        pathname: "/news",
        query: { tab: selectedTab },
      },
      undefined,
      { shallow: true }
    );
  };

  // Data berita lengkap
  const data = {
    company: [
      {
        id: 1,
        title: {
          id: "PT Exel Mandiri Inovasi Juara Nasional Olimpiade Kemenaker RI",
          en: "PT Exel Mandiri Inovasi Wins National Kemenaker RI Olympiad",
        },
        description: {
          id: "Prestasi membanggakan diraih PT Exel Mandiri Inovasi sebagai Teladan 2 Nasional Olimpiade Pengupahan Berbasis Produktivitas Kemenaker RI.",
          en: "A proud achievement by PT Exel Mandiri Inovasi as 2nd National Role Model in the Productivity-Based Wage Olympiad by Kemenaker RI.",
        },
        image: "/images/information/news1.jpg",
        category: "company",
        date: "2025-03-12"
      },
      {
        id: 2,
        title: {
          id: "PT. Exel Mandiri Inovasi Memberangkatkan 14 Karyawan Umroh",
          en: "PT. Exel Mandiri Inovasi Sends 14 Employees for Umrah",
        },
        description: {
          id: "PT Exel Mandiri Inovasi memberangkatkan 14 karyawan dan tokoh masyarakat untuk menunaikan ibadah umroh sebagai bentuk apresiasi dan motivasi.",
          en: "PT Exel Mandiri Inovasi sends 14 employees and community leaders for Umrah as a form of appreciation and motivation.",
        },
        image: "/images/information/news2.jpg",
        category: "company",
        date: "2025-03-12"
      },
      {
        id: 3,
        title: {
          id: "PT. Exel Mandiri Inovasi Gelar Pengajian Akbar Sambut Tahun Baru 2024",
          en: "PT. Exel Mandiri Inovasi Holds Grand Recitation to Welcome 2024 New Year",
        },
        description: {
          id: "Pengajian akbar digelar PT Exel Mandiri Inovasi dalam rangka menyambut tahun baru 2024 sebagai sarana mempererat silaturahmi dan meningkatkan keimanan.",
          en: "Grand recitation event held by PT Exel Mandiri Inovasi to welcome 2024 as a way to strengthen ties and faith.",
        },
        image: "/images/information/news3.jpg",
        category: "company",
        date: "2025-03-12"
      },
      {
        id: 4,
        title: {
          id: "Sambut Tahun Baru 2025, Lawang Bersholawat Didukung PT. Exel Mandiri Inovasi",
          en: "Welcoming 2025, Lawang Bersholawat Supported by PT. Exel Mandiri Inovasi",
        },
        description: {
          id: "PT Exel Mandiri Inovasi mendukung kegiatan Lawang Bersholawat untuk sambut tahun baru 2025, wujud kepedulian sosial dan spiritual kepada masyarakat.",
          en: "PT Exel Mandiri Inovasi supports Lawang Bersholawat to welcome 2025, as a form of social and spiritual care for the community.",
        },
        image: "/images/information/news4.jpg",
        category: "company",
        date: "2025-03-12"
      },
    ],
    csr: [
      {
        id: 1,
        title: {
          id: "Bantuan kemanusiaan untuk bencana banjir di Pasuruan",
          en: "Humanitarian Aid for Flood Disaster in Pasuruan",
        },
        description: {
          id: "Exel Mandiri Inovasi aktif dalam program kemanusiaan untuk membantu masyarakat terdampak banjir.",
          en: "Exel Mandiri Inovasi actively engages in humanitarian programs to assist communities affected by floods.",
        },
        image: "/images/csr/csr123.jpeg",
        category: "csr",
        date: "2025-03-12"
      },
      {
        id: 2,
        title: {
          id: "Bantuan kemanusiaan untuk bencana gempa bumi di Lombok",
          en: "Humanitarian Aid for Earthquake Disaster in Lombok",
        },
        description: {
          id: "Exel Mandiri Inovasi turut membantu korban gempa bumi di Lombok melalui program kemanusiaan.",
          en: "Exel Mandiri Inovasi contributes to helping earthquake victims in Lombok through humanitarian programs.",
        },
        image: "/images/csr/csr2.jpg",
        category: "csr",
        date: "2025-03-12"
      },
      {
        id: 3,
        title: {
          id: "Dukungan untuk para guru di SD Srigading",
          en: "Support for Teachers at SD Srigading",
        },
        description: {
          id: "Exel Mandiri Inovasi mendukung dunia pendidikan melalui bantuan kepada para guru di SD Srigading.",
          en: "Exel Mandiri Inovasi supports the education sector through assistance to teachers at SD Srigading.",
        },
        image: "/images/csr/csr3.jpeg",
        category: "csr",
        date: "2025-03-12"
      },
    ],
  };

  // Gabungkan semua berita untuk tab 'all'
  const allNews = [...data.company, ...data.csr];
  const filteredData = activeTab === "all" ? allNews : data[activeTab] || [];

  const formatDate = (dateStr) => {
  const date = new Date(dateStr); // Konversi string ke Date object
  return new Intl.DateTimeFormat(language === "id" ? "id-ID" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
};


return (
  <div className="min-h-screen bg-gray-100 flex flex-col">
    <Header />

    <main className="flex-grow">
      {/* Hero */}
      <section
        className="relative h-[300px] md:h-[400px] bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/images/exel.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <h1 className="relative text-4xl font-bold text-white z-10 text-center">
          {language === "id" ? "Berita & Kegiatan" : "News & Activities"}
        </h1>
        {/* Breadcrumb */}
        <nav className="relative mt-2 text-white text-sm z-10">
          <Link href="/" className="hover:underline">Home</Link> 
          <span className="mx-2">/</span> 
          <span className="font-semibold">{language === "id" ? "Berita & Kegiatan" : "News & Activities"}</span>
        </nav>
      </section>

      {/* Tabs */}
      <div className="flex justify-center space-x-8 border-b py-4 bg-white shadow">
        {["all", "company", "csr"].map((tabKey) => (
          <button
            key={tabKey}
            onClick={() => handleTabChange(tabKey)}
            className={`pb-2 px-4 ${
              activeTab === tabKey
                ? "border-b-4 border-yellow-500 text-black font-semibold"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {tabKey === "all"
              ? language === "id"
                ? "Semua"
                : "All"
              : tabKey === "company"
              ? language === "id"
                ? "Berita Perusahaan"
                : "Company News"
              : "CSR"}
          </button>
        ))}
      </div>

      {/* News Cards */}
      <div className="container mx-auto px-4 py-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition-all"
            >
              <div
                className="h-40 bg-cover bg-center"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <div className="p-6 flex flex-col justify-between min-h-[250px]">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title[language]}</h3>
                  <p className="text-gray-600 mb-4">{item.description[language]}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{formatDate(item.date)}</span>
                  <Link
                    href={`/news/${item.category}/${item.id}`}
                    className="text-yellow-600 hover:underline font-medium"
                  >
                    {language === "id" ? "Baca Selengkapnya →" : "Read More →"}
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">No news available.</div>
        )}
      </div>
    </main>

    <Footer />
  </div>
);
}