import { useEffect } from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import heroImage from '../images/las.jpg';
import Profile from '../components/Profile';
import Products from '../components/Products';
import AwardsCertificate from '../components/AwardsCertificate';
import Information from '../components/Information';
import CSR from '../components/CSR';
import Clients from '../components/Clients';
import ContactUs from "../components/ContactUs";
import Footer from '@/components/Footer';
import { useLanguage } from '../context/LanguageContext'; // Import Context

export default function Home() {
  const { language } = useLanguage(); // Ambil language dari context

  // Force reload to top without scrolling effect
  useEffect(() => {
    history.scrollRestoration = 'manual';
  }, []);

  return (
    <>
      <Header />
      <main className="space-y-20">
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen w-full overflow-hidden">
          <Image src={heroImage} alt="PT. Exel Mandiri Inovasi" layout="fill" objectFit="cover" quality={100} priority />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4 z-10">
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 animate-fade-in-up">
              PT. EXEL MANDIRI INOVASI
            </h1>
            <div className="w-32 md:w-48 h-1 bg-white mb-4 animate-fade-in-up delay-200"></div>
            <p className="text-white text-sm md:text-lg max-w-3xl leading-relaxed animate-fade-in-up delay-500">
              {language === 'id'
                ? 'PT Exel Mandiri Inovasi adalah perusahaan yang bergerak di bidang jasa teknik mesin dan kontraktor, yang mencakup pekerjaan instalasi, manufaktur, dan fabrikasi.'
                : 'PT Exel Mandiri Inovasi is a company engaged in mechanical engineering services and contractors, including installation, manufacturing, and fabrication works.'}
            </p>
          </div>
        </section>

        {/* Other Sections */}
        <Profile />
        <Products />
        <Clients />
        <Information />
        <CSR />
        <ContactUs />
        {/* <AwardsCertificate /> */}
      </main>
      <Footer />
    </>
  );
}
