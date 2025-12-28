import { LanguageProvider } from './contexts/LanguageContext';
import AppContent from './AppWithLanguage';

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
