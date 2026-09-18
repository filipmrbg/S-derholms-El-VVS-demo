import { useState } from 'react';
import { Phone, MapPin, Mail, ShieldCheck } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import FAQAccordion from '../components/FAQAccordion';
import CTABanner from '../components/CTABanner';
import { usePageTitle } from '../hooks/usePageTitle';

const container: React.CSSProperties = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 clamp(20px, 5vw, 40px)',
};

const faqItems = [
  {
    question: 'Hur snabbt kan vi få en offert på bergarbeten eller markarbeten?',
    answer: 'Vi återkopplar vanligtvis inom 24 timmar och bokar gärna in ett kostnadsfritt platsbesök för att bedöma bergvolym, markförhållanden och säkerhetsavstånd.',
  },
  {
    question: 'Vilka geografiska områden är ni verksamma i?',
    answer: 'Nordisk Bergmark AB utgår från Orust och utför uppdrag i Uddevalla, Tjörn, Stenungsund, Lysekil och över hela Bohuslän samt närliggande delar av Västra Götaland.',
  },
  {
    question: 'Kan ni spräcka berg nära befintliga hus och grundmurar?',
    answer: 'Ja, med vibrationsfri hydraulisk stenspräckning eller patronbaserad spräckning kan vi säkert och kontrollerat ta bort berg precis intill husväggar, altaner och vattenledningar utan omgivningsskador.',
  },
  {
    question: 'Hjälper ni till med tillstånd och besiktning inför sprängning?',
    answer: 'Ja, vi samordnar allt från polistillstånd och riskanalyser till förbesiktningar och vibrationsmätningar så att hela processen sker tryggt och enligt gällande regelverk.',
  },
];

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 16px',
  border: '1px solid #e5e7eb',
  borderRadius: '12px',
  background: '#fafafa',
  fontSize: '0.95rem',
  fontFamily: 'var(--font-family)',
  color: 'var(--color-text-dark)',
  outline: 'none',
  boxSizing: 'border-box',
  marginBottom: '16px',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  display: 'block',
};

function focusInput(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
  e.currentTarget.style.borderColor = 'var(--color-primary)';
  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 255, 255, 0.15)';
}
function blurInput(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
  e.currentTarget.style.borderColor = '#e5e7eb';
  e.currentTarget.style.boxShadow = 'none';
}

export default function Contact() {
  usePageTitle(
    'Kontakta Nordisk Bergmark AB | Orust & Uddevalla',
    'Kontakta Nordisk Bergmark AB för bergsprängning, bergborrning, stenspräckning och markarbeten på Orust, i Uddevalla och hela Bohuslän. Ring 072-210 75 82.'
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  return (
    <main style={{ fontFamily: 'var(--font-family)' }}>

      {/* ── SECTION A: HERO ───────────────────────────────────── */}
      <section style={{
        position: 'relative',
        backgroundImage: 'url(/about.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        paddingTop: '150px',
        paddingBottom: '70px',
        textAlign: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.76) 100%)' }} />
        <div style={{ ...container, position: 'relative', zIndex: 1 }}>
          <div>
            <ScrollReveal animation="blur-in">
              <h1 style={{
                color: 'var(--color-white)',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                margin: '0 0 16px 0',
                lineHeight: 1.15,
              }}>
                Kontakta oss
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={150}>
              <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '1.08rem', margin: 0, maxWidth: '620px', marginInline: 'auto', lineHeight: 1.6 }}>
                Vi återkopplar vanligtvis inom 24 timmar. Kostnadsfri offert och professionell rådgivning ingår alltid.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION B: CONTACT CONTENT ────────────────────────── */}
      <section style={{ background: 'var(--color-light)', padding: '80px 0' }}>
        <div style={container}>
          <div className="contact-grid" style={{
            display: 'grid',
            gridTemplateColumns: '45% 55%',
            gap: '60px',
            alignItems: 'start',
          }}>

            {/* Left: info */}
            <ScrollReveal animation="fade-right" duration={0.8}>
              <h2 style={{
                color: 'var(--color-text-dark)',
                fontWeight: 700,
                fontSize: 'clamp(1.6rem, 2.5vw, 2rem)',
                margin: '0 0 20px 0',
                lineHeight: 1.2,
              }}>
                Så når du oss
              </h2>
              <p style={{ color: 'var(--color-gray-600)', fontSize: '1rem', lineHeight: 1.8, margin: 0 }}>
                Kontakta oss via telefon, e-post eller formuläret. Oavsett om det gäller bergsprängning, bergborrning, stenspräckning, dränering eller tomtplanering hjälper vi er gärna.
              </p>

              <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    minWidth: '48px',
                    background: '#0F172A',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(15, 23, 42, 0.15)',
                  }}>
                    <Phone size={22} color="#ffffff" />
                  </div>
                  <div>
                    <p style={{ margin: '0 0 4px 0', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text-dark)' }}>
                      Telefon
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <a
                        href="tel:0722107582"
                        style={{ color: 'var(--color-gray-600)', fontSize: '0.95rem', textDecoration: 'none', lineHeight: 1.5, transition: 'color 0.2s ease' }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#0F172A')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-gray-600)')}
                      >
                        072-210 75 82
                      </a>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    minWidth: '48px',
                    background: '#0F172A',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(15, 23, 42, 0.15)',
                  }}>
                    <MapPin size={22} color="#ffffff" />
                  </div>
                  <div>
                    <p style={{ margin: '0 0 4px 0', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text-dark)' }}>
                      Verksamhetsområde
                    </p>
                    <p style={{ margin: 0, color: 'var(--color-gray-600)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                      Orust • Uddevalla • Hela Bohuslän
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    minWidth: '48px',
                    background: '#0F172A',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(15, 23, 42, 0.15)',
                  }}>
                    <Mail size={22} color="#ffffff" />
                  </div>
                  <div>
                    <p style={{ margin: '0 0 4px 0', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text-dark)' }}>
                      E-post
                    </p>
                    <a
                      href="mailto:Nordiskbergmark@gmail.com"
                      style={{ color: 'var(--color-gray-600)', fontSize: '0.95rem', textDecoration: 'none', lineHeight: 1.5, transition: 'color 0.2s ease' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#0F172A')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-gray-600)')}
                    >
                      Nordiskbergmark@gmail.com
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    minWidth: '48px',
                    background: '#0F172A',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(15, 23, 42, 0.15)',
                  }}>
                    <ShieldCheck size={22} color="#ffffff" />
                  </div>
                  <div>
                    <p style={{ margin: '0 0 4px 0', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text-dark)' }}>
                      Företagsuppgifter
                    </p>
                    <p style={{ margin: 0, color: 'var(--color-gray-600)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                      Nordisk Bergmark AB • Org.nr: 559547-7760 • Godkänd för F-skatt
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: form */}
            <ScrollReveal animation="fade-left" duration={0.8} delay={100}>
              <div style={{
                background: '#ffffff',
                borderRadius: '24px',
                padding: 'clamp(28px, 5vw, 44px)',
                boxShadow: '0 4px 30px rgba(0,0,0,0.06)',
                border: '1px solid #e2e8f0',
              }}>
                <h2 style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.6rem, 2.5vw, 2rem)',
                  margin: '0 0 24px 0',
                }}>
                  Skicka en förfrågan
                </h2>

                <form onSubmit={(e) => {
                  e.preventDefault();
                  alert('Tack för din förfrågan! Vi återkommer inom kort.');
                }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="contact-form-row">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: '6px' }}>
                        Ditt namn / Kontaktperson
                      </label>
                      <input
                        type="text"
                        placeholder="För- och efternamn"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={inputStyle}
                        onFocus={focusInput}
                        onBlur={blurInput}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: '6px' }}>
                        Företag / BRF / Kommun (valfritt)
                      </label>
                      <input
                        type="text"
                        placeholder="Företagsnamn eller BRF"
                        style={inputStyle}
                        onFocus={focusInput}
                        onBlur={blurInput}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="contact-form-row">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: '6px' }}>
                        E-postadress
                      </label>
                      <input
                        type="email"
                        placeholder="din.epost@foretag.se"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={inputStyle}
                        onFocus={focusInput}
                        onBlur={blurInput}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: '6px' }}>
                        Telefonnummer
                      </label>
                      <input
                        type="tel"
                        placeholder="070-123 45 67"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        style={inputStyle}
                        onFocus={focusInput}
                        onBlur={blurInput}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: '6px' }}>
                      Plats / Ort för projektet
                    </label>
                    <input
                      type="text"
                      placeholder="Ort eller kommun"
                      style={inputStyle}
                      onFocus={focusInput}
                      onBlur={blurInput}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: '6px' }}>
                      Beskriv ert projekt eller behov
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Berätta om ert projekt, bergvolym, tomtförutsättningar samt önskad tidsplan..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      style={{ ...inputStyle, resize: 'vertical' }}
                      onFocus={focusInput}
                      onBlur={blurInput}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      padding: '16px',
                      background: '#0F172A',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      boxShadow: '0 4px 16px rgba(15, 23, 42, 0.2)',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = '#1E293B';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = '#0F172A';
                      (e.currentTarget as HTMLElement).style.transform = 'none';
                    }}
                  >
                    Skicka förfrågan
                  </button>
                </form>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── SECTION C: FAQ ─────────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '80px 0', borderTop: '1px solid #e2e8f0' }}>
        <div style={container}>
          <FAQAccordion
            items={faqItems}
            title="Vanliga frågor om våra tjänster"
            subtitle="Här har vi samlat svar på återkommande frågor kring offerter, etablering och spräng- och markarbeten."
            dark={false}
          />
        </div>
      </section>

      {/* ── SECTION D: CTA ────────────────────────────────────────── */}
      <CTABanner />

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .contact-form-row {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
        }
      `}</style>
    </main>
  );
}
