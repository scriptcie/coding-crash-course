import React from 'react';
import { CodePane } from 'spectacle';
import theme from 'prism-react-renderer/themes/nightOwl';
import { useLanguage, LANGUAGES } from './Providers/LanguageProvider';
import raw from 'raw.macro';

const codeExamples = {
  test: {
    js: raw('./Code/Test1/test1.js'),
    jl: raw('./Code/Test1/test1.jl'),
    py: raw('./Code/Test1/test1.py'),
  },
};

// Trim trailing whitespace and check if each language has a corresponding code example
Object.keys(codeExamples).forEach((code) =>
  Object.values(LANGUAGES).forEach((lang) => {
    if (!codeExamples[code][lang]) {
      console.warn('Missing no code example', { code, lang });
    }

    codeExamples[code][lang] = codeExamples[code][lang].trim();
  })
);

const MissingCode = ({ code }) => (
  <div>
    <strong>Warning</strong>: the code snippet {code} is missing!
  </div>
);
const MissingLanguage = ({ code, language }) => (
  <div>
    <strong>Warning</strong>: the code snippet {code} for {language} is missing!
  </div>
);

const LanguageCodePane = ({ code }) => {
  const { language } = useLanguage();
  const detectLanguage = {
    py: 'python',
    jl: 'julia',
    js: 'javascript',
  };

  if (!codeExamples[code]) {
    return <MissingCode code={code} />;
  }

  if (!codeExamples[code][language]) {
    return <MissingLanguage code={code} language={language} />;
  }

  return (
    <CodePane autoFillHeight language={detectLanguage[language]} theme={theme}>
      {codeExamples[code][language]}
    </CodePane>
  );
};

export default LanguageCodePane;
