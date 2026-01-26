import React, { createContext, useState, useContext, useEffect } from 'react';
import bnTranslations from '../components/languages/bn/bn.json';
import enTranslations from '../components/languages/en/en.json';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }) => {
    // Get initial language from localStorage or default to 'bn'
    const [language, setLanguage] = useState(() => {
        const savedLanguage = localStorage.getItem('appLanguage');
        return savedLanguage || 'bn';
    });

    // Save language preference to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('appLanguage', language);
    }, [language]);

    const translations = {
        bn: bnTranslations,
        en: enTranslations,
    };

    const t = (key) => {
        return translations[language][key] || key;
    };

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'bn' ? 'en' : 'bn'));
    };

    const value = {
        language,
        setLanguage,
        toggleLanguage,
        t,
        translations: translations[language],
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};
