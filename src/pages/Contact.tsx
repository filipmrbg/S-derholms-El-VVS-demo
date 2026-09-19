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
    question: 'Hur snabbt kan vi få en offert på värmepump eller el- och VVS-arbeten?',
    answer: 'Vi återkopplar vanligtvis inom 24 timmar och bokar gärna in ett kostnadsfritt hembesök för att bedöma förutsättningarna, räkna på energibesparingen och lämna ett fast prisförslag.',
  },
  {
    question: 'Vilka geografiska områden är ni verksamma i?',
    answer: 'Söderholms El & VVS utgår från Stockholm och utför uppdrag i hela Storstockholm, däribland Bromma, Nacka, Täby, Danderyd, Lidingö, Solna, Sollentuna och omgivande kommuner.',
  },
  {
    question: 'Är ni auktoriserade för både el och VVS?',
    answer: 'Ja, vi innehar auktorisation från Elsäkerhetsverket och våra montörer arbetar enligt branschreglerna för Säker Vatten. Dessutom är vi certifierad återförsäljare och installatör för Thermia värmepumpar.',
  },
  {
    question: 'Kan jag nyttja ROT-avdraget för arbetet?',
    answer: 'Självklart! Som privatperson har du rätt till 30% ROT-avdrag på arbetskostnaden vid elinstallationer, rörarbeten och värmepumpsinstallation. Vi administrerar avdraget direkt på din faktura.',
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
    'Kontakta Söderholms El & VVS | Stockholm',
    'Kontakta Söderholms El & VVS för elinstallation, VVS och Thermia värmepumpar i Stockholm. Ring 08-25 30 33 eller skicka en förfrågan online.'
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
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.88) 0%, rgba(15, 23, 42, 0.80) 100%)' }} />
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
                Vi återkopplar vanligtvis inom 24 timmar. Kostnadsfri offert och professionell energirådgivning ingår alltid.
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
                Kontakta oss via telefon, e-post eller kontaktformuläret. Oavsett om det gäller byte av värmepump, rördragning, elinstallation eller akut service finns vi här för dig.
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
                        href="tel:08253033"
                        style={{ color: 'var(--color-gray-600)', fontSize: '0.95rem', textDecoration: 'none', lineHeight: 1.5, transition: 'color 0.2s ease' }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#0F172A')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-gray-600)')}
                      >
                        08-25 30 33
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
                      Utgångspunkt & Verksamhetsområde
                    </p>
                    <a
                      href="https://www.google.com/maps/place/Tranebergsv%C3%A4gen+78,+167+44+Bromma/@59.3359768,17.9745848,17z/data=!3m1!4b1!4m6!3m5!1s0x465f761f05a6b875:0xac9469470dca853e!8m2!3d59.3359768!4d17.9771597!16s%2Fg%2F11csjq7z6j"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--color-gray-600)', fontSize: '0.95rem', textDecoration: 'none', lineHeight: 1.5, display: 'block', transition: 'color 0.2s ease' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#0F172A')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-gray-600)')}
                    >
                      Tranebergsvägen 78, 167 44 Bromma
                    </a>
                    <span style={{ fontSize: '0.85rem', color: '#64748b' }}>
                      Uppdrag i hela Storstockholm (Bromma, Täby, Nacka, Danderyd)
                    </span>
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
                      href="mailto:info@soderholms.se"
                      style={{ color: 'var(--color-gray-600)', fontSize: '0.95rem', textDecoration: 'none', lineHeight: 1.5, transition: 'color 0.2s ease' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#0F172A')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-gray-600)')}
                    >
                      info@soderholms.se
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
                      Söderholms El & VVS • Org.nr: 556041-3055 • Godkänd för F-skatt
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
                        Företag / BRF (valfritt)
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
                        placeholder="din.epost@adress.se"
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
                        placeholder="08-000 00 00"
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
                      Område / Kommun i Stockholm
                    </label>
                    <input
                      type="text"
                      placeholder="T.ex. Bromma, Täby, Nacka, Danderyd"
                      style={inputStyle}
                      onFocus={focusInput}
                      onBlur={blurInput}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: '6px' }}>
                      Beskriv ert ärende eller önskemål
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Berätta om din fastighet, befintligt värmesystem, elbehov samt önskad tidsplan..."
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

      {/* ── SECTION C: GOOGLE MAPS / HITTA TILL OSS ──────────── */}
      <section style={{
        background: '#ffffff',
        padding: 'clamp(64px, 8vw, 96px) 0',
        borderTop: '1px solid #e2e8f0',
      }}>
        <div style={container}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto clamp(32px, 5vw, 44px) auto' }}>
            <ScrollReveal animation="blur-in">
              <span style={{
                color: 'var(--color-primary-orange)',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                display: 'inline-block',
                marginBottom: '8px',
              }}>
                Verksamhetsområde
              </span>
              <h2 style={{
                color: 'var(--color-text-dark)',
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)',
                fontWeight: 700,
                margin: '0 0 10px 0',
                lineHeight: 1.2,
              }}>
                Baserade i Bromma – verksamma i hela Stockholm
              </h2>
              <p style={{ color: 'var(--color-gray-600)', fontSize: '1rem', lineHeight: 1.65, margin: 0 }}>
                Med bas på Tranebergsvägen 78 rullar våra servicebilar dagligen ut till uppdrag inom elinstallationer, VVS och värmepumpar över hela Storstockholm.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-up" delay={120}>
            <div style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 16px 45px rgba(15, 23, 42, 0.08)',
              border: '1px solid #e2e8f0',
              background: '#f8fafc',
            }}>
              <iframe
                title="Söderholms El & VVS - Tranebergsvägen 78, Bromma"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.8028751528652!2d17.9745848!3d59.3359768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f761f05a6b875%3A0xac9469470dca853e!2sTranebergsv%C3%A4gen%2078%2C%20167%2044%20Bromma!5e0!3m2!1ssv!2sse!4v1726757000000!5m2!1ssv!2sse"
                width="100%"
                height="450"
                style={{
                  border: 0,
                  display: 'block',
                  width: '100%',
                  minHeight: '450px',
                }}
                allowFullScreen={false}
                loading="lazy"
                />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION D: FAQ ─────────────────────────────────────── */}
      <section style={{ background: '#f8fafc', padding: '80px 0', borderTop: '1px solid #e2e8f0' }}>
        <div style={container}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 50px auto' }}>
            <ScrollReveal animation="blur-in">
              <span style={{
                color: 'var(--color-primary-orange)',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                display: 'inline-block',
                marginBottom: '8px',
              }}>
                Vanliga frågor
              </span>
              <h2 style={{
                color: 'var(--color-text-dark)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)',
                margin: 0,
                lineHeight: 1.2,
              }}>
                Frågor inför din kontakt
              </h2>
            </ScrollReveal>
          </div>
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* ── SECTION D: CTA ─────────────────────────────────────── */}
      <CTABanner />

      <style>{`
        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .contact-form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
