import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { InvitationForm } from './components/InvitationForm';
import { ChevronDown } from 'lucide-react';
import { Button } from './components/ui/button';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { useLanguage } from './contexts/LanguageContext';
import { config } from './config';

function AppContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const { t } = useLanguage();
  
  // Smooth parallax effects
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

  useEffect(() => {
    // Add SEO metadata
    document.title = "Philipp's Margarita — Hidden Bar in Mainz, Germany";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Philipp's Margarita is an exclusive, invitation-only hidden bar in Mainz, Germany. Discover signature margaritas, seasonal cocktails, and an unforgettable atmosphere.");
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = "Philipp's Margarita is an exclusive, invitation-only hidden bar in Mainz, Germany. Discover signature margaritas, seasonal cocktails, and an unforgettable atmosphere.";
      document.head.appendChild(meta);
    }

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: "Philipp's Margarita — Hidden Bar in Mainz, Germany" },
      { property: 'og:description', content: "An exclusive, invitation-only cocktail experience. Discover signature margaritas and seasonal drinks." },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://images.unsplash.com/photo-1575405491233-ae3545e5f807?w=1200' }
    ];

    ogTags.forEach(tag => {
      const existing = document.querySelector(`meta[property="${tag.property}"]`);
      if (existing) {
        existing.setAttribute('content', tag.content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });

    // JSON-LD structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BarOrPub",
      "name": "Philipp's Margarita",
      "description": "An exclusive, invitation-only hidden bar in Mainz, Germany, celebrating the art of mixology with signature margaritas and seasonal cocktails.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mainz",
        "addressCountry": "DE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "addressCountry": "DE"
      },
      "servesCuisine": "Cocktails",
      "priceRange": "$$$",
      "keywords": "hidden bar Mainz, exclusive cocktail experience, invitation only, craft cocktails, signature margarita, luxury nightlife Germany"
    });
    document.head.appendChild(script);
  }, []);

  const scrollToForm = () => {
    if (config.invitationFormEnabled) {
      document.getElementById('invitation-section')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-x-hidden" style={{ fontFamily: 'var(--font-body)' }}>
      {/* Language Switcher - Fixed top right */}
      <div className="fixed top-6 right-6 z-50">
        <LanguageSwitcher />
      </div>

      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: heroY, scale: heroScale }}
        >
          <ImageWithFallback
            src="/images/hero.webp"
            alt="Elegant cocktail"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          className="relative z-10 text-center px-6 max-w-7xl mx-auto"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="h-px bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent mb-12"
            />
            
            <h1 
              className="mb-2 text-[var(--color-warm-white)] uppercase" 
              style={{ 
                fontFamily: 'var(--font-gotham)',
                fontSize: 'clamp(2.5rem, 10vw, 6.5rem)',
                lineHeight: '0.95',
                fontWeight: '800',
                letterSpacing: '0.05em'
              }}
            >
              Philipp's
            </h1>
            <h1 
              className="text-[var(--color-gold)]" 
              style={{ 
                fontFamily: 'var(--font-gotham)',
                fontSize: 'clamp(2.5rem, 10vw, 6.5rem)',
                lineHeight: '0.95',
                fontWeight: '300',
                letterSpacing: '0.15em'
              }}
            >
              MARGARITA
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="space-y-6"
          >
            <p 
              className="text-white/90 tracking-widest uppercase"
              style={{ 
                fontFamily: 'var(--font-gotham)',
                fontSize: 'clamp(0.75rem, 1.5vw, 1rem)',
                letterSpacing: '0.3em',
                fontWeight: '500'
              }}
            >
              {t.hero.subtitle}
            </p>

            <p 
              className="text-white/70 max-w-2xl mx-auto leading-relaxed"
              style={{ 
                fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                fontWeight: '300'
              }}
            >
              {t.hero.tagline1}
              <br />
              <span className="text-[var(--color-gold)]">{t.hero.tagline2}</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="mt-4"
          >
            {config.invitationFormEnabled ? (
              <Button
                onClick={scrollToForm}
                className="bg-transparent border-2 border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-black px-12 py-7 transition-all duration-500 hover:scale-105 backdrop-blur-sm relative overflow-hidden group"
                style={{ fontFamily: 'var(--font-gotham)', letterSpacing: '0.15em', fontWeight: '600' }}
              >
                <span className="relative z-10 uppercase tracking-widest">
                  {t.hero.cta}
                </span>
                <motion.div
                  className="absolute inset-0 bg-[var(--color-gold)]/10"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </Button>
            ) : (
              <p 
                className="text-[var(--color-gold)]/90 italic"
                style={{ 
                  fontFamily: 'var(--font-elegant)',
                  fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                  fontWeight: '300',
                  letterSpacing: '0.05em'
                }}
              >
                {t.footer.tagline}
              </p>
            )}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span 
              className="text-[var(--color-gold)]/60 text-xs tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-gotham)', fontWeight: '500' }}
            >
              {t.nav.scroll}
            </span>
            <ChevronDown className="w-6 h-6 text-[var(--color-gold)]/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section - Asymmetric Layout */}
      <section className="relative py-32 px-6 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              <div>
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-[var(--color-gold)] uppercase tracking-[0.3em] text-sm mb-4 block"
                  style={{ fontFamily: 'var(--font-gotham)', fontWeight: '600' }}
                >
                  {t.about.subtitle}
                </motion.span>
                <h2 
                  className="text-[var(--color-warm-white)] mb-8"
                  style={{ 
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                    lineHeight: '1.1',
                    fontWeight: '600',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {t.about.title1}
                  <br />
                  <span className="text-[var(--color-gold)]" style={{ fontFamily: 'var(--font-elegant)', fontStyle: 'italic', fontWeight: '300' }}>
                    {t.about.title2}
                  </span>
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-white/80 leading-relaxed text-lg">
                  {t.about.paragraph1}
                </p>
                <p className="text-white/60 leading-relaxed">
                  {t.about.paragraph2}
                </p>
              </div>

              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-px bg-gradient-to-r from-[var(--color-gold)] to-transparent"
              />
            </motion.div>

            {/* Image Stack */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[600px]"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
                className="absolute top-0 right-0 w-3/4 h-3/5 overflow-hidden"
              >
                <ImageWithFallback
                  src="/images/luxury_mango.webp"
                  alt="Luxury Mango Margarita"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gold)]/10 to-transparent mix-blend-overlay"></div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
                className="absolute bottom-0 left-0 w-3/4 h-3/5 overflow-hidden border border-[var(--color-gold)]/20"
              >
                <ImageWithFallback
                  src="/images/special_margarita.webp"
                  alt="Elegant cocktail glass"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Decorative element */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[var(--color-gold)]/30 rotate-45 backdrop-blur-sm"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Signature & Seasonal Drinks Section - Modern Cards */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.span 
              className="text-[var(--color-gold)] uppercase tracking-[0.3em] text-sm mb-6 block"
              style={{ fontFamily: 'var(--font-gotham)', fontWeight: '600' }}
            >
              {t.drinks.subtitle}
            </motion.span>
            <h2 
              className="text-[var(--color-warm-white)]"
              style={{ 
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.5rem, 7vw, 5rem)',
                lineHeight: '1.1',
                fontWeight: '600',
                letterSpacing: '-0.02em'
              }}
            >
              {t.drinks.title1}
              <br />
              <span className="text-[var(--color-gold)]" style={{ fontFamily: 'var(--font-heading)', fontWeight: '600' }}>
                {t.drinks.title2}
              </span>
            </h2>
          </motion.div>

          {/* Signature Margarita Feature */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="mb-24 relative"
          >
            <div className="relative overflow-hidden border border-[var(--color-gold)]/20 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-12 lg:p-16 flex flex-col justify-center">
                  <motion.h3 
                    className="text-[var(--color-gold)] mb-6"
                    style={{ 
                      fontFamily: 'var(--font-elegant)',
                      fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                      fontStyle: 'italic',
                      fontWeight: '300'
                    }}
                  >
                    {t.drinks.margarita.title}
                  </motion.h3>
                  <p className="text-white/80 leading-relaxed text-lg mb-4">
                    {t.drinks.margarita.description1}
                  </p>
                  <p className="text-white/60 italic" style={{ fontFamily: 'var(--font-elegant)' }}>
                    {t.drinks.margarita.description2}
                  </p>
                </div>
                <div className="relative h-[400px] md:h-auto bg-black">
                  <ImageWithFallback
                    src="/images/margarita.webp"
                    alt="Signature margarita with dramatic volumetric lighting"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Seasonal Drinks Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Tequila Season */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group relative overflow-hidden border border-[var(--color-gold)]/20 hover:border-[var(--color-gold)]/40 transition-all duration-500"
            >
              <div className="absolute inset-0">
                <ImageWithFallback
                  src="/images/tequila.webp"
                  alt="Tequila bottle"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40"></div>
              </div>
              
              <div className="relative p-10 h-[450px] flex flex-col justify-end">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '4rem' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-px bg-[var(--color-gold)] mb-6"
                />
                <p 
                  className="text-[var(--color-gold)] uppercase tracking-[0.2em] text-xs mb-3"
                  style={{ fontFamily: 'var(--font-gotham)', fontWeight: '600' }}
                >
                  {t.drinks.tequila.season}
                </p>
                <h3 
                  className="text-white mb-4"
                  style={{ 
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                    fontWeight: '600'
                  }}
                >
                  {t.drinks.tequila.title}
                </h3>
                <p className="text-white/70" style={{ fontFamily: 'var(--font-elegant)', fontStyle: 'italic' }}>
                  {t.drinks.tequila.description}
                </p>
              </div>
            </motion.div>

            {/* Glühwein Season */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group relative overflow-hidden border border-[var(--color-gold)]/20 hover:border-[var(--color-gold)]/40 transition-all duration-500"
            >
              <div className="absolute inset-0">
                <ImageWithFallback
                  src="/images/gluhwein.webp"
                  alt="Warm drink"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40"></div>
              </div>
              
              <div className="relative p-10 h-[450px] flex flex-col justify-end">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '4rem' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="h-px bg-[var(--color-gold)] mb-6"
                />
                <p 
                  className="text-[var(--color-gold)] uppercase tracking-[0.2em] text-xs mb-3"
                  style={{ fontFamily: 'var(--font-gotham)', fontWeight: '600' }}
                >
                  {t.drinks.gluhwein.season}
                </p>
                <h3 
                  className="text-white mb-4"
                  style={{ 
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                    fontWeight: '600'
                  }}
                >
                  {t.drinks.gluhwein.title}
                </h3>
                <p className="text-white/70" style={{ fontFamily: 'var(--font-elegant)', fontStyle: 'italic' }}>
                  {t.drinks.gluhwein.description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Full Width Image with Overlay Text */}
      <section className="relative py-0 overflow-hidden">
        <div className="relative h-screen">
          <div className="absolute inset-0">
            <ImageWithFallback
              src="/images/door.webp"
              alt="Hidden entrance"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]"></div>
          </div>

          <div className="relative z-10 h-full flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2 }}
              className="max-w-5xl text-center"
            >
              <motion.span 
                className="text-[var(--color-gold)] uppercase tracking-[0.3em] text-sm mb-8 block"
                style={{ fontFamily: 'var(--font-gotham)', fontWeight: '600' }}
              >
                {t.philosophy.subtitle}
              </motion.span>
              
              <h2 
                className="text-[var(--color-warm-white)] mb-12"
                style={{ 
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.5rem, 8vw, 6rem)',
                  lineHeight: '1.1',
                  fontWeight: '700',
                  letterSpacing: '-0.02em'
                }}
              >
                {t.philosophy.title1}
                <br />
                <span className="text-[var(--color-gold)]" style={{ fontFamily: 'var(--font-heading)', fontWeight: '600' }}>
                  {t.philosophy.title2}
                </span>
              </h2>

              <div className="space-y-8 max-w-3xl mx-auto">
                <motion.p 
                  className="text-white/90 leading-relaxed"
                  style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2rem)' }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  {t.philosophy.paragraph1}
                </motion.p>
                
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="h-px bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent"
                />
                
                <motion.p 
                  className="text-white/70 leading-relaxed text-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  {t.philosophy.paragraph2}
                  <br />
                  <span className="text-[var(--color-gold)]">{t.philosophy.paragraph3}</span>
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Invitation Form Section */}
      {config.invitationFormEnabled && (
        <section id="invitation-section" className="relative py-32 px-6 bg-black">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.span 
                className="text-[var(--color-gold)] uppercase tracking-[0.3em] text-sm mb-6 block"
                style={{ fontFamily: 'var(--font-gotham)', fontWeight: '600' }}
              >
                {t.invitation.subtitle}
              </motion.span>
              <h2 
                className="text-[var(--color-warm-white)] mb-8"
                style={{ 
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.5rem, 7vw, 5rem)',
                  lineHeight: '1.1',
                  fontWeight: '600',
                  letterSpacing: '-0.02em'
                }}
              >
                {t.invitation.title1}
                <br />
                <span className="text-[var(--color-gold)]" style={{ fontFamily: 'var(--font-elegant)', fontStyle: 'italic', fontWeight: '300' }}>
                  {t.invitation.title2}
                </span>
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto leading-relaxed text-lg">
                {t.invitation.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <InvitationForm />
            </motion.div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="relative py-16 px-6 bg-black border-t border-[var(--color-gold)]/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            {/* Logo/Title */}
            <div>
              <h3 
                className="text-[var(--color-warm-white)] mb-2 uppercase"
                style={{ 
                  fontFamily: 'var(--font-gotham)',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: '700',
                  letterSpacing: '0.1em'
                }}
              >
                Philipp's <span className="text-[var(--color-gold)]" style={{ fontWeight: '300' }}>Margarita</span>
              </h3>
            </div>

            <p className="text-white/60 max-w-2xl mx-auto whitespace-pre-line">
              {t.footer.description}
            </p>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/30 to-transparent max-w-md mx-auto"
            />

            <p 
              className="text-white/40 italic text-sm"
              style={{ fontFamily: 'var(--font-elegant)' }}
            >
              {t.footer.tagline}
            </p>

            <p className="text-white/30 text-sm pt-4">
              {t.footer.copyright}
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default AppContent;
