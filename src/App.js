import React from 'react';
import { LanguageProvider } from './Providers/LanguageProvider';
import AppDeck from './Deck';

function App() {
  return (
    <LanguageProvider>
      <AppDeck />
    </LanguageProvider>
  );
}

export default App;
