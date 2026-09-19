import React, { useState } from 'react';
import { ShieldCheck, Clock, Award, Send } from 'lucide-react';
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
    question: 'Kostar offerten något?',
    answer: 'Nej, offert och rådgivning är alltid helt kostnadsfritt. Vi går igenom era förutsättningar, gör hembesök vid behov och tar fram ett tydligt, specificerat prisförslag utan förbindelser.',
  },
  {
    question: 'Hur snabbt kan ni påbörja installationen?',
    answer: 'Mindre el- och VVS-arbeten kan vi ofta påbörja med kort varsel. För kompletta värmepumpsbyten planerar vi in leverans och installation smidigt efter era önskemål och förutsättningar.',
  },
  {
    question: 'Utför ni arbeten åt både privatpersoner och företag?',
    answer: 'Ja! Vi hjälper villaägare, bostadsrättsföreningar, fastighetsägare och företag i hela Stockholm med omnejd.',
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

function focusInput(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.currentTarget.style.borderColor = '#0F172A';
  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(15, 23, 42, 0.1)';
}
function blurInput(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.currentTarget.style.borderColor = '#e5e7eb';
  e.currentTarget.style.boxShadow = 'none';
}

export default function Quote() {
  usePageTitle(
    'Begär offert | Söderholms El & VVS',
    'Beskriv ert projekt och begär en kostnadsfri offert för Thermia värmepump, elinstallation eller VVS-arbeten i Stockholm.'
  );
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [phone, setPhone]     = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  return (
    <main style={{ fontFamily: 'var(--font-family)' }}>

      {/* ── SECTION A: HERO ───────────────────────────────────── */}
      <section style={{
        position: 'relative',
        backgroundImage: 'url(/about.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 45%',
        paddingTop: '140px',
        paddingBottom: '60px',
        textAlign: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(15, 23, 42, 0.82)' }} />
        <div style={{ ...container, position: 'relative', zIndex: 1 }}>
          <div>
            <ScrollReveal animation="blur-in">
              <h1 style={{
                color: 'var(--color-white)',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                margin: '0 0 16px 0',
                lineHeight: 1.15,
              }}>
                Begär kostnadsfri offert
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="scale-x-center" delay={150} duration={0.6}>
              <span style={{ display: 'block', width: '60px', height: '2px', background: 'rgba(255, 255, 255, 0.7)', borderRadius: '2px', margin: '14px auto 0' }} />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <p style={{
                color: 'rgba(255,255,255,0.88)',
                fontSize: '1.05rem',
                maxWidth: '640px',
                margin: '20px auto 0',
                lineHeight: 1.6,
              }}>
                Fyll i formuläret nedan och beskriv vad ni behöver hjälp med så återkommer vi med en specificerad offert och rådgivning inom 24 timmar.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION B: FORM & TRUST CARDS ─────────────────────── */}
      <section style={{ background: 'var(--color-light)', padding: '80px 0' }}>
        <div style={container}>
          <div className="quote-grid" style={{
            display: 'grid',
            gridTemplateColumns: '55% 45%',
            gap: '50px',
            alignItems: 'start',
          }}>

            {/* Left: Form */}
            <ScrollReveal animation="fade-right" duration={0.8}>
              <div style={{
                background: 'var(--color-white)',
                borderRadius: 'var(--border-radius-lg)',
                padding: '40px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                border: '1px solid #f0ede8',
              }}>
                <h2 style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.4rem, 2.2vw, 1.8rem)',
                  margin: '0 0 8px 0',
                }}>
                  Beskriv ditt projekt eller behov
                </h2>
                <p style={{ color: 'var(--color-gray-600)', fontSize: '0.92rem', margin: '0 0 28px 0', lineHeight: 1.6 }}>
                  Vi återkopplar vanligtvis samma eller nästkommande arbetsdag med rådgivning och prisförslag.
                </p>

                <form onSubmit={(e) => { e.preventDefault(); alert('Tack för din förfrågan! Vi kontaktar dig inom 24 timmar.'); }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="quote-form-row">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: '6px' }}>
                        Ditt namn / Kontaktperson *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="För- och efternamn"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={inputStyle}
                        onFocus={focusInput}
                        onBlur={blurInput}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: '6px' }}>
                        Telefonnummer *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="08-000 00 00"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        style={inputStyle}
                        onFocus={focusInput}
                        onBlur={blurInput}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: '6px' }}>
                      E-postadress *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="din.epost@adress.se"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={inputStyle}
                      onFocus={focusInput}
                      onBlur={blurInput}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: '6px' }}>
                      Typ av tjänst *
                    </label>
                    <select
                      required
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={focusInput}
                      onBlur={blurInput}
                    >
                      <option value="">Välj tjänst...</option>
                      <option value="varmepumpar">Installation av Thermia Värmepump</option>
                      <option value="service-underhall">Service & Underhåll av Värmepump</option>
                      <option value="elinstallation">Elinstallationer & Belysning</option>
                      <option value="vvs-arbeten">VVS & Rörarbeten</option>
                      <option value="radgivning">Rådgivning & Energikonsultation</option>
                      <option value="annat">Övriga installationsarbeten</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: '6px' }}>
                      Projektbeskrivning *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Berätta om fastigheten, nuvarande värmesystem, önskat arbete, område i Stockholm samt önskad tidsram..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      style={{ ...inputStyle, resize: 'vertical' }}
                      onFocus={focusInput}
                      onBlur={blurInput}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      background: '#0F172A',
                      color: '#ffffff',
                      border: 'none',
                      padding: '16px 36px',
                      borderRadius: 'var(--border-radius-pill)',
                      fontSize: '1rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      width: '100%',
                      justifyContent: 'center',
                      boxShadow: '0 4px 16px rgba(15, 23, 42, 0.2)',
                      transition: 'all 0.25s ease',
                      fontFamily: 'var(--font-family)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#1E293B';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#0F172A';
                      e.currentTarget.style.transform = 'none';
                    }}
                  >
                    <Send size={18} />
                    Skicka offertförfrågan
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Right: Trust Cards */}
            <ScrollReveal animation="fade-left" duration={0.8} delay={150}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{
                  background: 'var(--color-white)',
                  borderRadius: 'var(--border-radius-lg)',
                  padding: '32px',
                  border: '1px solid #f0ede8',
                }}>
                  <h3 style={{
                    color: 'var(--color-text-dark)',
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    margin: '0 0 20px 0',
                  }}>
                    Varför välja Söderholms El & VVS?
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {[
                      {
                        icon: ShieldCheck,
                        title: 'Auktoriserade installatörer',
                        desc: 'Full behörighet från Elsäkerhetsverket och certifierade VVS-tekniker enligt Säker Vatten.',
                      },
                      {
                        icon: Award,
                        title: 'Thermia Specialist sedan decennier',
                        desc: 'Auktoriserad återförsäljare och servicepartner med marknadsledande garantier.',
                      },
                      {
                        icon: Clock,
                        title: 'Snabb offert & hembesök',
                        desc: 'Vi återkopplar inom 24 timmar och genomför kostnadsfria platsbesök i hela Stockholmsregionen.',
                      },
                    ].map(({ icon: Icon, title, desc }, i) => (
                      <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                        <div style={{
                          width: '40px',
                          height: '40px',
                          minWidth: '40px',
                          borderRadius: '10px',
                          background: '#0F172A',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                          <Icon size={20} color="#ffffff" />
                        </div>
                        <div>
                          <p style={{ margin: '0 0 4px 0', fontWeight: 700, fontSize: '0.92rem', color: 'var(--color-text-dark)' }}>
                            {title}
                          </p>
                          <p style={{ margin: 0, color: 'var(--color-gray-600)', fontSize: '0.86rem', lineHeight: 1.6 }}>
                            {desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{
                  background: '#0F172A',
                  color: 'var(--color-white)',
                  borderRadius: 'var(--border-radius-lg)',
                  padding: '28px',
                  boxShadow: '0 8px 32px rgba(15, 23, 42, 0.15)',
                }}>
                  <p style={{
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    margin: '0 0 8px 0',
                  }}>
                    Föredrar du att ringa direkt?
                  </p>
                  <p style={{
                    color: 'rgba(255,255,255,0.85)',
                    fontSize: '0.9rem',
                    margin: '0 0 16px 0',
                    lineHeight: 1.6,
                  }}>
                    Slå oss en signal på 08-25 30 33 så bollar vi dina idéer och bokar in ett möte direkt över telefon.
                  </p>
                  <a
                    href="tel:08253033"
                    style={{
                      display: 'inline-block',
                      color: 'var(--color-white)',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      textDecoration: 'none',
                      borderBottom: '2px solid rgba(255,255,255,0.6)',
                      paddingBottom: '2px',
                    }}
                  >
                    08-25 30 33
                  </a>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── SECTION C: FAQ ─────────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '80px 0', borderTop: '1px solid #e2e8f0' }}>
        <div style={container}>
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 50px auto' }}>
            <ScrollReveal animation="blur-in">
              <span style={{
                color: '#0f172a',
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                display: 'inline-block',
                marginBottom: '10px',
                background: '#e2e8f0',
                padding: '4px 14px',
                borderRadius: '999px',
              }}>
                Vanliga frågor
              </span>
              <h2 style={{
                color: 'var(--color-text-dark)',
                fontWeight: 700,
                fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)',
                margin: 0,
                lineHeight: 1.2,
              }}>
                Frågor om offerter
              </h2>
            </ScrollReveal>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* ── SECTION D: CTA ─────────────────────────────────────── */}
      <CTABanner />

      <style>{`
        @media (max-width: 860px) {
          .quote-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .quote-form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
