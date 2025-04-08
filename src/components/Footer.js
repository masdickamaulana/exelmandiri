import Image from "next/image";
import { useRouter } from "next/router";
import { useLanguage } from "@/context/LanguageContext";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const router = useRouter();
  const isHome = router.pathname === "/";
  const { language } = useLanguage();

  const handleScroll = (id) => {
    if (isHome) {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
  };

  const handleHomeClick = () => {
    window.location.href = "/";
  };

  return (
    <footer
      className="relative text-white py-12"
      style={{
        backgroundImage: "url('/images/exel4.jpg')", // Ganti nama sesuai file gambar kamu
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0" />

      {/* Konten footer */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">

        {/* Logo & Sosial Media */}
        <div className="flex flex-col gap-4">
          <Image
            src="/images/logo.png"
            alt="Exel Mandiri Inovasi"
            width={150}
            height={80}
          />
        </div>

        {/* Tautan Cepat */}
        <div className="flex-grow">
          <h3 className="text-xl font-semibold mb-4">
            {language === "id" ? "Tautan Cepat" : "Quick Links"}
          </h3>
          <div className="grid grid-cols-2 gap-4 text-white">
            <ul className="space-y-3">
              <li><button onClick={handleHomeClick} className="hover:text-gray-300">Beranda</button></li>
              <li><button onClick={() => handleScroll("profile")} className="hover:text-gray-300">Profil</button></li>
              <li><button onClick={() => handleScroll("products")} className="hover:text-gray-300">Produk</button></li>
              <li><button onClick={() => handleScroll("clients")} className="hover:text-gray-300">Klien</button></li>
            </ul>
            <ul className="space-y-3">
              <li><button onClick={() => handleScroll("information")} className="hover:text-gray-300">Informasi</button></li>
              <li><button onClick={() => handleScroll("csr")} className="hover:text-gray-300">CSR</button></li>
              <li><button onClick={() => router.push("/news?tab=all")} className="hover:text-gray-300">Berita</button></li>
              <li><button onClick={() => handleScroll("contact")} className="hover:text-gray-300">Kontak</button></li>
            </ul>
          </div>
        </div>

        {/* Informasi Kontak */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <h3 className="text-xl font-semibold mb-4">
            {language === "id" ? "Informasi Kontak" : "Contact Information"}
          </h3>
          <ul className="space-y-4 text-white text-sm">
            <li>
              <span className="block font-semibold text-white">Alamat</span>
              <p>Jl. Tawang Argo No.9, Lawang, Kabupaten Malang, Jawa Timur</p>
            </li>
            <li>
              <span className="block font-semibold text-white">Telepon</span>
              <p>(0341) 426.760, Fax (0341) 427.273</p>
            </li>
            <li>
              <span className="block font-semibold text-white">WhatsApp</span>
              <p>+62-811-357-3000</p>
            </li>
            <li>
              <span className="block font-semibold text-white">Email</span>
              <p>info@exelmandiri.co.id</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Hak Cipta */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-white text-sm">
        © {new Date().getFullYear()} Exel Mandiri Inovasi. All rights reserved.
      </div>
    </footer>
  );
}
