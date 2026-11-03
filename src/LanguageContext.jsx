
import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(
    () => localStorage.getItem("fazenda-language") || "uz"
  );

  const changeLanguage = (value) => {
    setLang(value);
    localStorage.setItem("fazenda-language", value);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
