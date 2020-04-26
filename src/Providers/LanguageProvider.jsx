import React from 'react';
import useLocalStorageState from 'use-local-storage-state';

const localStorageLanguageKey = '__coding_crash_course_programming_language__';

export const LANGUAGES = {
  PYTHON: 'py',
  JULIA: 'jl',
  JAVASCRIPT: 'js',
};

const LanguageContext = React.createContext();
function LanguageProvider(props) {
  const [language, setLanguage] = useLocalStorageState(
    localStorageLanguageKey,
    { language: LANGUAGES.PYTHON }
  );

  const selectLanguage = (language) => {
    console.log('selecting', language);
    // TODO: validate that it is a supported language
    setLanguage({ language: language });
  };

  return (
    <LanguageContext.Provider
      value={{ language: language.language, selectLanguage }}
      {...props}
    >
      {props.children}
    </LanguageContext.Provider>
  );
}

function useLanguage() {
  const context = React.useContext(LanguageContext);
  if (context === undefined) {
    throw new Error(`useLanguage must be used within a LanguageProvider`);
  }
  return context;
}

export const LanguageName = (props) => {
  const { language } = useLanguage();

  return <span>{language.language}</span>;
};

export { LanguageProvider, useLanguage };
