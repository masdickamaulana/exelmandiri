// src/components/Profile.js

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext'; // Import Context

// === Kamus Bahasa (ID & EN) ===
const dictionary = {
  id: {
    title: 'Profil Perusahaan',
    about:
      'PT. Exel Mandiri Inovasi adalah perusahaan yang bergerak di bidang jasa teknik mesin dan kontraktor, fokus pada instalasi, manufaktur, dan fabrikasi. Didirikan pada 2 Desember 2009, kami telah berkembang menjadi salah satu perusahaan yang paling terpercaya dan kompeten di Indonesia. Dengan pengalaman bertahun-tahun, PT Exel Mandiri Inovasi tetap berkomitmen untuk memberikan layanan terbaik kepada pelanggan melalui teknologi modern, tenaga kerja profesional, dan standar kualitas internasional.',
    visionTitle: 'Visi',
    vision:
      'Menjadi perusahaan terbaik di Indonesia dalam bidang Processing, Pengadaan, Fabrikasi, Instalasi, Perawatan material dan Equipment untuk Perusahaan Food Industri dan Industri lainnya.',
    missionTitle: 'Misi',
    missionList: [
      'Menerapkan sistem manajemen mutu dan K3.',
      'Meningkatkan kompetensi SDM secara berkelanjutan.',
      'Meningkatkan kualitas dan memberikan pelayanan yang terbaik pada pelanggan.',
      'Mematuhi dan melaksanakan peraturan perundangan yang berlaku.',
      'Melakukan inovasi secara berkelanjutan.',
    ],
  },
  en: {
    title: 'Company Profile',
    about:
      'PT. Exel Mandiri Inovasi is a company engaged in mechanical engineering services and contractors, focusing on installation, manufacturing, and fabrication. Established on December 2, 2009, we have grown into one of the most trusted and competent companies in Indonesia. With years of experience, PT Exel Mandiri Inovasi remains committed to providing the best services to customers through modern technology, professional workforce, and international quality standards.',
    visionTitle: 'Vision',
    vision:
      'To become the best company in Indonesia in the field of Processing, Procurement, Fabrication, Installation, Maintenance of materials and Equipment for the Food Industry and other Industries.',
    missionTitle: 'Mission',
    missionList: [
      'Implement quality management and K3 systems.',
      'Continuously improve human resource competencies.',
      'Improve quality and provide the best service to customers.',
      'Comply with and implement applicable laws and regulations.',
      'Continuously innovate.',
    ],
  },
};

export default function Profile() {
  const { language } = useLanguage(); // Ambil bahasa dari Context
  const t = dictionary[language]; // Kamus sesuai bahasa

  return (
      <section
        id="profile"
        className="min-h-screen bg-white flex items-center justify-center pt-24 pb-20 overflow-hidden"
      >
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          {/* Judul */}
          <motion.h2
            className="text-4xl font-semibold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t.title}
          </motion.h2>

          {/* Konten */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Kolom Gambar */}
            <motion.div
              className="flex flex-col items-center w-full space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Gambar 1 */}
              <div className="relative overflow-hidden rounded-lg shadow-lg max-w-md w-full">
                <img
                  src="/images/exel.jpg"
                  alt="Tentang Kami"
                  className="object-cover w-full h-auto hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Gambar 2 */}
              <motion.div
                className="relative overflow-hidden rounded-lg shadow-lg max-w-md w-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src="/images/exel3.jpg"
                  alt="Aktivitas Perusahaan"
                  className="object-cover w-full h-auto hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            </motion.div>

            {/* Kolom Teks */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 max-w-3xl lg:pr-10"
            >
              <p className="text-lg leading-relaxed text-justify text-gray-700">
                {t.about}
              </p>

              <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{t.visionTitle}</h3>
                <p className="italic text-gray-700">{t.vision}</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{t.missionTitle}</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {t.missionList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

  );
}
