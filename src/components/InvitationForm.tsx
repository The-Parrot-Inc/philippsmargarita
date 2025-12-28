import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function InvitationForm() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset form after 5 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', reason: '' });
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      {!submitted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative"
        >
          {/* Decorative border effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--color-gold)]/20 via-transparent to-[var(--color-gold)]/20 blur-sm"></div>
          
          <form 
            onSubmit={handleSubmit}
            className="relative bg-black/60 backdrop-blur-xl border border-[var(--color-gold)]/20 p-10 lg:p-14 space-y-8"
          >
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Label 
                htmlFor="name" 
                className="text-[var(--color-warm-white)] uppercase tracking-widest text-xs"
                style={{ fontFamily: 'var(--font-gotham)', fontWeight: '600' }}
              >
                {t.invitation.form.name}
              </Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-white/5 border-[var(--color-gold)]/30 text-white placeholder:text-white/30 focus:border-[var(--color-gold)] focus:bg-white/10 transition-all duration-300 h-12 px-4"
                placeholder={t.invitation.form.namePlaceholder}
              />
            </motion.div>

            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Label 
                htmlFor="email" 
                className="text-[var(--color-warm-white)] uppercase tracking-widest text-xs"
                style={{ fontFamily: 'var(--font-gotham)', fontWeight: '600' }}
              >
                {t.invitation.form.email}
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-white/5 border-[var(--color-gold)]/30 text-white placeholder:text-white/30 focus:border-[var(--color-gold)] focus:bg-white/10 transition-all duration-300 h-12 px-4"
                placeholder={t.invitation.form.emailPlaceholder}
              />
            </motion.div>

            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Label 
                htmlFor="reason" 
                className="text-[var(--color-warm-white)] uppercase tracking-widest text-xs"
                style={{ fontFamily: 'var(--font-gotham)', fontWeight: '600' }}
              >
                {t.invitation.form.reason}
              </Label>
              <Textarea
                id="reason"
                required
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                className="bg-white/5 border-[var(--color-gold)]/30 text-white placeholder:text-white/30 focus:border-[var(--color-gold)] focus:bg-white/10 transition-all duration-300 min-h-[140px] resize-none p-4"
                placeholder={t.invitation.form.reasonPlaceholder}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                type="submit"
                className="w-full bg-[var(--color-gold)] text-black hover:bg-[var(--color-dark-gold)] transition-all duration-300 h-14 uppercase tracking-widest relative overflow-hidden group"
                style={{ fontFamily: 'var(--font-gotham)', fontWeight: '700' }}
              >
                <span className="relative z-10">{t.invitation.form.submit}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </Button>
            </motion.div>

            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--color-gold)]/40"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[var(--color-gold)]/40"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[var(--color-gold)]/40"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--color-gold)]/40"></div>
          </form>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative text-center py-20"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--color-gold)]/20 via-transparent to-[var(--color-gold)]/20 blur-sm"></div>
          
          <div className="relative bg-black/60 backdrop-blur-xl border border-[var(--color-gold)]/30 p-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-16 h-16 border-2 border-[var(--color-gold)] rounded-full mx-auto mb-6 flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 }}
                className="w-2 h-2 bg-[var(--color-gold)] rounded-full"
              />
            </motion.div>
            
            <h3 
              className="text-[var(--color-warm-white)] mb-3 text-2xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {t.invitation.form.successTitle}
            </h3>
            <p className="text-white/70 mb-2">
              {t.invitation.form.successMessage1}
            </p>
            <p className="text-white/50 text-sm" style={{ fontFamily: 'var(--font-elegant)', fontStyle: 'italic' }}>
              {t.invitation.form.successMessage2}
            </p>

            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[var(--color-gold)]/40"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[var(--color-gold)]/40"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[var(--color-gold)]/40"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[var(--color-gold)]/40"></div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
