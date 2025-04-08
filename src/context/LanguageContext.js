export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('id'); // langsung default ke 'id'

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
