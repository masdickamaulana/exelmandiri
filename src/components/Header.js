import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext'; // Import context

const dictionaryList = {
  id: {
    home: 'Beranda',
    profile: 'Profil',
    products: 'Produk',
    clients: 'Klien',
    information: 'Informasi',
    csr: 'CSR',
    contact: 'Kontak Kami',
    news: 'Berita'
  },
  en: {
    home: 'Home',
    profile: 'Profile',
    products: 'Products',
    clients: 'Clients',
    information: 'Information',
    csr: 'CSR',
    contact: 'Contact Us',
    news: 'News'
  }
};

export default function Header() {
  const { language, changeLanguage } = useLanguage(); // Pakai context
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const router = useRouter();
  const isHome = router.pathname === '/';

  // Efek scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Translate function
  const t = (key) => dictionaryList[language][key];

  // Scroll ke section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, null, window.location.pathname);
      setMenuOpen(false);
    }
  };

  // Kembali ke home (force reload)
  const handleHomeClick = () => {
    window.location.href = '/'; // Pakai window.location agar reload penuh
    setMenuOpen(false);
  };

  const menuItems = [
    { label: t('home'), id: 'home' },
    { label: t('profile'), id: 'profile' },
    { label: t('products'), id: 'products' },
    { label: t('clients'), id: 'clients' },
    { label: t('information'), id: 'information' },
    { label: t('csr'), id: 'csr' },
    { label: t('contact'), id: 'contact' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="relative w-36 h-10 md:w-40 md:h-12">
          <Image src="/images/logo1.png" alt="Exel Mandiri Inovasi" fill className="object-contain" priority />
        </Link>

        {/* Tombol Menu Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden focus:outline-none transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}
        >
          {menuOpen ? <span className="text-3xl">&times;</span> : <span className="text-3xl">&#9776;</span>}
        </button>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-6 text-sm font-medium">
            {menuItems.map((item) => (
              <li key={item.id}>
                {item.id === 'home' ? (
                  // Beranda reload halaman
                  <button
                    onClick={handleHomeClick}
                    className={`hover:text-blue-500 transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}
                  >
                    {item.label}
                  </button>
                ) : isHome ? (
                  // Scroll ke section jika di halaman home
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`hover:text-blue-500 transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}
                  >
                    {item.label}
                  </button>
                ) : (
                  // Link ke section dari halaman lain
                  <Link
                    href={`/#${item.id}`}
                    className={`hover:text-blue-500 transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            {/* Menu Berita */}
            <li>
              <Link href="/news?tab=all" className={`hover:text-blue-500 ${isScrolled ? 'text-black' : 'text-white'}`}>
                {t('news')}
              </Link>
            </li>
          </ul>

          {/* Dropdown Bahasa */}
          <div className="relative ml-4">
            <button
              onClick={() => setLanguageDropdown(!languageDropdown)}
              className="text-sm flex items-center hover:text-blue-500 space-x-2"
            >
              {language === 'id' ? <span>🇮🇩</span> : <span>🇺🇸</span>}
            </button>
            {languageDropdown && (
              <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md py-2 w-32 text-center text-sm">
                <button
                  onClick={() => { changeLanguage('id'); setLanguageDropdown(false); }}
                  className="block w-full px-4 py-2 hover:bg-gray-100 flex items-center space-x-3"
                >
                  🇮🇩 <span>‎ Indonesia</span>
                </button>
                <button
                  onClick={() => { changeLanguage('en'); setLanguageDropdown(false); }}
                  className="block w-full px-4 py-2 hover:bg-gray-100 flex items-center space-x-3"
                >
                  🇺🇸 <span>‎ English</span>
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-50">
          <ul className="flex flex-col divide-y divide-gray-200 p-4 text-sm font-medium max-h-[80vh] overflow-y-auto">
            {menuItems.map((item) => (
              <li key={item.id} className="py-2">
                {item.id === 'home' ? (
                  <button onClick={handleHomeClick} className="w-full text-left text-gray-800 hover:text-blue-500 transition-colors">
                    {item.label}
                  </button>
                ) : isHome ? (
                  <button onClick={() => scrollToSection(item.id)} className="w-full text-left text-gray-800 hover:text-blue-500 transition-colors">
                    {item.label}
                  </button>
                ) : (
                  <Link href={`/#${item.id}`} onClick={() => setMenuOpen(false)} className="block text-gray-800 hover:text-blue-500 transition-colors">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}

            {/* Menu Berita */}
            <li className="py-2">
              <Link href="/news?tab=all" onClick={() => setMenuOpen(false)} className="block text-gray-800 hover:text-blue-500 transition-colors">
                {t('news')}
              </Link>
            </li>

            {/* Language selector - lebih rapi */}
            <li className="pt-4">
              <div className="text-gray-600 font-semibold mb-2">Pilih Bahasa</div>
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => { changeLanguage('id'); setMenuOpen(false); }}
                  className="flex items-center space-x-2 text-left px-4 py-2 rounded hover:bg-gray-100"
                >
                  <span>🇮🇩</span>
                  <span>Indonesia</span>
                </button>
                <button
                  onClick={() => { changeLanguage('en'); setMenuOpen(false); }}
                  className="flex items-center space-x-2 text-left px-4 py-2 rounded hover:bg-gray-100"
                >
                  <span>🇺🇸</span>
                  <span>English</span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      )}

    </header>
  );
}
