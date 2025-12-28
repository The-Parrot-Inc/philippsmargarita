import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Language } from '../translations';

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  const languages: Language[] = ['en', 'de', 'es', 'ko', 'fr', 'it', 'ca'];

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-[var(--color-gold)]" />
      <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
        <SelectTrigger 
          className="w-[140px] bg-black/40 backdrop-blur-sm border-[var(--color-gold)]/30 text-white hover:border-[var(--color-gold)]/60 transition-all duration-300 h-9"
          style={{ fontFamily: 'var(--font-gotham)', fontSize: '0.875rem' }}
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-black/95 backdrop-blur-xl border-[var(--color-gold)]/30">
          {languages.map((lang) => (
            <SelectItem
              key={lang}
              value={lang}
              className="text-white hover:text-[var(--color-gold)] hover:bg-white/5 cursor-pointer"
              style={{ fontFamily: 'var(--font-gotham)', fontSize: '0.875rem' }}
            >
              {t.languages[lang]}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
