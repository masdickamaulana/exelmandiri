import { createContext, useContext, useState, useEffect } from 'react';

// Buat Context
const LanguageContext = createContext();

// Provider
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('id');

  // Ambil dari localStorage saat load awal
  useEffect(() => {
    const lang = localStorage.getItem('lang') || 'id';
    setLanguage(lang);
  }, []);

  // Update localStorage setiap kali language berubah
  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom Hook untuk pakai context
export const useLanguage = () => useContext(LanguageContext);
