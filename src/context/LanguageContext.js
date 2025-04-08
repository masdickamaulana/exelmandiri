import { createContext, useContext, useState, useEffect } from 'react';

// ✅ HARUS dideklarasi dulu
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('id');

  useEffect(() => {
    if (typeof window !== "undefined") {
      const lang = localStorage.getItem('lang');
      if (lang) setLanguage(lang);
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem('lang', lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// ✅ Export context-nya juga kalau kamu pakai di file lain
export const useLanguage = () => useContext(LanguageContext);
