import Image from "next/image";
import { useRouter } from "next/router";
import { useLanguage } from "@/context/LanguageContext";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"; // ✅ Import icon

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
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">
        
        {/* Logo & Social Media */}
        <div className="flex flex-col gap-4">
          <Image
            src="/images/logo.png"
            alt="Exel Mandiri Inovasi"
            width={150}
            height={80}
          />
          {/* Ikon Sosial Media */}
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <Instagram size={24} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <Youtube size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <Linkedin size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <Facebook size={24} />
            </a>
          </div>
        </div>

        {/* Tautan Cepat */}
        <div className="flex-grow">
          <h3 className="text-xl font-semibold mb-4">
            {language === "id" ? "Tautan Cepat" : "Quick Links"}
          </h3>
          <div className="grid grid-cols-2 gap-4 text-gray-400">
            <ul className="space-y-3">
              <li><button onClick={handleHomeClick} className="hover:text-white">{language === "id" ? "Beranda" : "Home"}</button></li>
              <li><button onClick={() => handleScroll("profile")} className="hover:text-white">{language === "id" ? "Profil" : "Profile"}</button></li>
              <li><button onClick={() => handleScroll("products")} className="hover:text-white">{language === "id" ? "Produk" : "Products"}</button></li>
              <li><button onClick={() => handleScroll("clients")} className="hover:text-white">{language === "id" ? "Klien" : "Clients"}</button></li>
            </ul>
            <ul className="space-y-3">
              <li><button onClick={() => handleScroll("information")} className="hover:text-white">{language === "id" ? "Informasi" : "Information"}</button></li>
              <li><button onClick={() => handleScroll("csr")} className="hover:text-white">CSR</button></li>
              <li><button onClick={() => router.push("/news?tab=all")} className="hover:text-white">{language === "id" ? "Berita" : "News"}</button></li>
              <li><button onClick={() => handleScroll("contact")} className="hover:text-white">{language === "id" ? "Kontak" : "Contact"}</button></li>
            </ul>
          </div>
        </div>

        {/* Kontak */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <h3 className="text-xl font-semibold mb-4">
            {language === "id" ? "Informasi Kontak" : "Contact Information"}
          </h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><span className="block font-semibold text-white">{language === "id" ? "Alamat" : "Address"}</span><p>Jl. Tawang Argo No.9, Lawang, Kabupaten Malang, Jawa Timur</p></li>
            <li><span className="block font-semibold text-white">{language === "id" ? "Telepon" : "Phone"}</span><p>(0341) 426.760, Fax (0341) 427.273</p></li>
            <li><span className="block font-semibold text-white">WhatsApp</span><p>+62-811-357-3000</p></li>
            <li><span className="block font-semibold text-white">Email</span><p>info@exelmandiri.co.id</p></li>
          </ul>
        </div>
      </div>

      {/* Hak Cipta */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Exel Mandiri Inovasi.{" "}
        {language === "id" ? "All rights reserved." : "All rights reserved."}
      </div>
    </footer>
  );
}
