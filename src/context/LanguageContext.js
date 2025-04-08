// Provider
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(null);

useEffect(() => {
  if (typeof window !== "undefined") {
    const lang = localStorage.getItem('lang') || 'id';
    setLanguage(lang);
  }
}, []);


  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  // Jangan render anak-anaknya sebelum language siap
  if (language === null) return null;

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
