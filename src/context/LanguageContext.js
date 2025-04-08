import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(null); // ⬅️ null dulu, bukan 'id'

  useEffect(() => {
    if (typeof window !== "undefined") {
      const lang = localStorage.getItem('lang') || 'id';
      setLanguage(lang);
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem('lang', lang);
    }
  };

  // ⛔ Jangan render children sebelum language siap
  if (!language) return null;

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
