import { Mail, Phone, MapPin, Clock } from "lucide-react";
import useInView from "@/hooks/useInView"; // Hook observer custom
import { useLanguage } from "@/context/LanguageContext"; // ✅ Import context bahasa

export default function ContactUs() {
  const { language } = useLanguage(); // ✅ Ambil bahasa aktif

  // Hook intersection observer
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-gray-100 pt-32 pb-20 overflow-hidden px-4 sm:px-8"
    >
      <div className="container mx-auto px-6">
        {/* Judul Section */}
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          {language === "id" ? "Hubungi Kami" : "Contact Us"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Informasi Kontak */}
          <div
            className={`space-y-6 transition-all duration-700 ease-out
              ${isVisible ? "animate-fade-in opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h3 className="text-2xl font-semibold text-gray-700 mb-6">
              {language === "id" ? "Kantor Pusat" : "Head Office"}
            </h3>

            {/* Alamat */}
            <ContactItem
              icon={<MapPin className="text-primary w-6 h-6 mt-1" />}
              title={language === "id" ? "Alamat" : "Address"}
              description="Jl. Tawang Argo No.9, Lawang, Kabupaten Malang, Jawa Timur"
            />

            {/* Telepon */}
            <ContactItem
              icon={<Phone className="text-primary w-6 h-6 mt-1" />}
              title={language === "id" ? "Telepon" : "Phone"}
              description="(0341) 426.760, Fax (0341) 427.273"
            />

            {/* WhatsApp */}
            <ContactItem
              icon={<Phone className="text-primary w-6 h-6 mt-1" />}
              title="WhatsApp"
              description="+62-811-357-3000"
            />

            {/* Email */}
            <ContactItem
              icon={<Mail className="text-primary w-6 h-6 mt-1" />}
              title="Email"
              description="info@exelmandiri.co.id"
            />

            {/* Jam Operasional */}
            <ContactItem
              icon={<Clock className="text-primary w-6 h-6 mt-1" />}
              title={language === "id" ? "Jam Operasional" : "Operating Hours"}
              description={
                language === "id"
                  ? "Senin - Jumat (08:00 - 17:00)"
                  : "Monday - Friday (08:00 AM - 05:00 PM)"
              }
            />
          </div>

          {/* Google Map */}
          <div
            className={`rounded-2xl overflow-hidden shadow-md h-[450px] border border-gray-200
              transition-all duration-700 ease-out
              ${isVisible ? "animate-zoom-in opacity-100 scale-100" : "opacity-0 scale-90"}`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4914.101897055508!2d112.6949731567047!3d-7.835881872355089!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7d5e2fd9e62a9%3A0x318c8620243e63dc!2sPT.%20Exel%20Mandiri%20Inovasi%20-%20Head%20Office!5e0!3m2!1sid!2sid!4v1741663459880!5m2!1sid!2sid"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

// ✅ Komponen Reusable untuk item kontak
function ContactItem({ icon, title, description }) {
  return (
    <div className="flex items-start space-x-4">
      {icon}
      <div>
        <h4 className="font-semibold text-lg text-gray-800">{title}</h4>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
