import Image from "next/image";
import { useRouter } from "next/router";
import { useLanguage } from "@/context/LanguageContext";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const router = useRouter();
  const isHome = router.pathname === "/";
  const { language } = useLanguage();

  const t = (id, en) => (language === "id" ? id : en);

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
      className="relative text-white py-16"
      style={{
        backgroundImage: "url('/images/exel4.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/images/logo.png"
              alt="Exel Mandiri Inovasi"
              width={200}
              height={100}
              className="object-contain"
            />
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">
              {t("Tautan Cepat", "Quick Links")}
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <ul className="space-y-3">
                <li><button onClick={handleHomeClick} className="hover:text-gray-300">{t("Beranda", "Home")}</button></li>
                <li><button onClick={() => handleScroll("profile")} className="hover:text-gray-300">{t("Profil", "Profile")}</button></li>
                <li><button onClick={() => handleScroll("products")} className="hover:text-gray-300">{t("Produk", "Products")}</button></li>
                <li><button onClick={() => handleScroll("clients")} className="hover:text-gray-300">{t("Klien", "Clients")}</button></li>
              </ul>
              <ul className="space-y-3">
                <li><button onClick={() => handleScroll("information")} className="hover:text-gray-300">{t("Informasi", "Information")}</button></li>
                <li><button onClick={() => handleScroll("csr")} className="hover:text-gray-300">CSR</button></li>
                <li><button onClick={() => router.push("/news?tab=all")} className="hover:text-gray-300">{t("Berita", "News")}</button></li>
                <li><button onClick={() => handleScroll("contact")} className="hover:text-gray-300">{t("Kontak", "Contact")}</button></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">
              {t("Informasi Kontak", "Contact Information")}
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="block font-semibold">{t("Alamat", "Address")}</span>
                <p>Jl. Tawang Argo No.9, Lawang, Kabupaten Malang, Jawa Timur</p>
              </li>
              <li>
                <span className="block font-semibold">{t("Telepon", "Phone")}</span>
                <p>(0341) 426.760, Fax (0341) 427.273</p>
              </li>
              <li>
                <span className="block font-semibold">WhatsApp</span>
                <p>+62-811-357-3000</p>
              </li>
              <li>
                <span className="block font-semibold">Email</span>
                <p>info@exelmandiri.co.id</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-white text-sm">
          © {new Date().getFullYear()} Exel Mandiri Inovasi. {t("Hak cipta dilindungi.", "All rights reserved.")}
        </div>
      </div>
    </footer>
  );
  }