import { ShieldCheck, Award, Users, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import CTABanner from '../components/CTABanner';
import { usePageTitle } from '../hooks/usePageTitle';
import images from '../data/images';

const container: React.CSSProperties = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 clamp(20px, 5vw, 40px)',
};

export default function About() {
  usePageTitle(
    'Om Söderholms El & VVS | El & VVS i Stockholm sedan 1942',
    'Läs om Söderholms El & VVS. Sedan 1942 erbjuder vi auktoriserad elinstallation, professionell VVS och certifierad installation av Thermia värmepumpar i Stockholm.'
  );

  return (
    <main style={{ fontFamily: 'var(--font-family)' }}>

      {/* ── SECTION A: HERO HEADER ────────────────────────────── */}
      <section style={{
        position: 'relative',
        backgroundImage: 'url("/about.jpg")',
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
                Om Söderholms El & VVS
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={150}>
              <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '1.08rem', margin: '0 auto', maxWidth: '660px', lineHeight: 1.6 }}>
                Över 80 års hantverkstradition och spetskompetens inom el, VVS och energieffektiva Thermia värmepumpar i hela Stockholmsregionen.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION B: ABOUT STORY & HISTORY ─────────────────────────── */}
      <section style={{ background: 'var(--color-light)', padding: '90px 0' }}>
        <div style={{ ...container, maxWidth: '1060px' }}>
          <div className="about-content-grid" style={{
            display: 'grid',
            gridTemplateColumns: '340px 1fr',
            gap: '50px',
            alignItems: 'start',
          }}>

            {/* Left: Company Image */}
            <ScrollReveal animation="scale-in" easing="spring">
              <div style={{
                position: 'sticky',
                top: '120px',
                display: 'flex',
                justifyContent: 'center',
              }}>
                <img
                  src={images.about.hero.url || '/about.jpg'}
                  alt="Söderholms El & VVS montör och värmepumpsinstallation"
                  loading="eager"
                  decoding="async"
                  style={{
                    width: '100%',
                    maxWidth: '340px',
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: '20px',
                    display: 'block',
                    boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
                    border: '1px solid #e2e8f0',
                  }}
                />
              </div>
            </ScrollReveal>

            {/* Right: Text content */}
            <div>
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
                  Vår historia & hantverkstradition
                </span>
                <h2 style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.9rem, 3.2vw, 2.5rem)',
                  lineHeight: 1.2,
                  margin: '0 0 20px 0',
                }}>
                  Kvalitet och trygghet i generationer sedan 1942
                </h2>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={100}>
                <div>
                  <p style={{
                    color: 'var(--color-gray-600)',
                    fontSize: '1.05rem',
                    lineHeight: 1.8,
                    margin: '0 0 20px 0',
                    fontWeight: 500,
                  }}>
                    Söderholms El & VVS har en stolt historia som sträcker sig tillbaka till 1942. Under mer än åtta decennier har vi försett villaägare, fastighetsägare och bostadsrättsföreningar i hela Stockholmsregionen med pålitliga och säkra installationer.
                  </p>
                  
                  <p style={{
                    color: 'var(--color-gray-600)',
                    fontSize: '1rem',
                    lineHeight: 1.8,
                    margin: '0 0 20px 0',
                  }}>
                    Som auktoriserad elinstallatör och certifierad återförsäljare samt installatör av Thermia värmepumpar förenar vi gediget hantverkskunnande med den senaste tekniken inom energieffektivisering. Vi erbjuder helhetslösningar där el, rör och styrning samverkar optimalt för lägsta möjliga driftkostnad och maximal livslängd.
                  </p>

                  <p style={{
                    color: 'var(--color-gray-600)',
                    fontSize: '1rem',
                    lineHeight: 1.8,
                    margin: '0 0 24px 0',
                  }}>
                    Vårt fokus ligger alltid på högsta säkerhet, punktlighet och personlig service. Samtliga arbeten utförs av behöriga fackmän i enlighet med gällande branschregler och med full garanti på både arbete och materiel.
                  </p>

                  {/* Vision Card */}
                  <div style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderLeft: '4px solid #0f172a',
                    padding: '24px 28px',
                    borderRadius: '0 16px 16px 0',
                    margin: '28px 0 36px 0',
                  }}>
                    <p style={{
                      color: 'var(--color-text-dark)',
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      lineHeight: 1.5,
                      margin: '0 0 10px 0',
                    }}>
                      Vår vision: Framtidssäkra och energieffektiva helhetslösningar för Stockholms fastigheter.
                    </p>
                    <p style={{
                      color: 'var(--color-gray-600)',
                      fontSize: '0.96rem',
                      lineHeight: 1.65,
                      margin: '0 0 12px 0',
                    }}>
                      Oavsett om du planerar att byta till bergvärme, behöver en komplett elrenovering eller vill boka förebyggande underhållsservice är vi en tillgänglig och engagerad partner genom hela processen.
                    </p>
                    <span style={{
                      color: '#0f172a',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      display: 'block',
                    }}>
                      Söderholms El & VVS • Stockholm med omnejd
                    </span>
                  </div>

                  <Button variant="primary" size="lg" href="/kontakt">
                    Kontakta oss för rådgivning & offert
                  </Button>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION C: TEAM SETUP (RULE 7) ───────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '90px 0', borderTop: '1px solid #e2e8f0' }}>
        <div style={container}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 56px auto' }}>
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
                Vårt Team
              </span>
              <h2 style={{
                color: 'var(--color-text-dark)',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 3.4vw, 2.6rem)',
                margin: 0,
                lineHeight: 1.2,
              }}>
                Erfarna fackmän med rätt behörigheter
              </h2>
              <p style={{ color: 'var(--color-gray-600)', fontSize: '1rem', lineHeight: 1.7, marginTop: '14px' }}>
                Vårt team består av certifierade elektriker, VVS-montörer och värmepumpstekniker som sätter kvalitet, noggrannhet och kundtrygghet i främsta rummet.
              </p>
            </ScrollReveal>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px',
          }} className="team-grid">
            {[
              {
                name: 'Mikael Söderholm',
                role: 'VD & Projektledare',
                image: '/gallery/gallery-4.jpg',
                description: 'Leder verksamheten med fokus på kundrelationer, energikalkyler och helhetslösningar för villor och fastigheter.',
                credentials: '80+ års familjetradition • Projektledning',
              },
              {
                name: 'Erik Lindqvist',
                role: 'Auktoriserad Elinstallatör',
                image: '/about-us.jpg',
                description: 'Specialist på elcentraler, smart styrning, kraftmatningar och elinstallationer i såväl moderna som äldre fastigheter.',
                credentials: 'Auktoriserad av Elsäkerhetsverket',
              },
              {
                name: 'Johan Bergström',
                role: 'Certifierad VVS- & Värmepumpstekniker',
                image: '/gallery/gallery-3.jpg',
                description: 'Expert på Thermia värmepumpar, rörinstallationer, driftsättning och optimering av värmesystem.',
                credentials: 'Thermia Certifierad • Säker Vatten',
              },
            ].map((member, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 120}>
                <div style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}>
                  <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center 30%',
                        display: 'block',
                      }}
                    />
                  </div>
                  <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: 'var(--color-text-dark)',
                      margin: '0 0 4px 0',
                    }}>
                      {member.name}
                    </h3>
                    <p style={{
                      color: '#0f172a',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      margin: '0 0 12px 0',
                    }}>
                      {member.role}
                    </p>
                    <p style={{
                      color: 'var(--color-gray-600)',
                      fontSize: '0.92rem',
                      lineHeight: 1.6,
                      margin: '0 0 16px 0',
                      flex: 1,
                    }}>
                      {member.description}
                    </p>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      paddingTop: '12px',
                      borderTop: '1px solid #e2e8f0',
                      fontSize: '0.82rem',
                      color: '#475569',
                      fontWeight: 500,
                    }}>
                      <CheckCircle2 size={16} color="#0f172a" />
                      <span>{member.credentials}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION D: KÄRNVÄRDEN / TRYGGHET ─────────────────────────── */}
      <section style={{ background: '#f8fafc', padding: '80px 0', borderTop: '1px solid #e2e8f0' }}>
        <div style={container}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px',
          }} className="values-grid">
            {[
              {
                icon: ShieldCheck,
                title: 'Auktorisation & Behörighet',
                desc: 'Full behörighet från Elsäkerhetsverket och certifierade VVS-tekniker borgar för trygga och godkända installationer.',
              },
              {
                badgeImage: '/thermia-badge.png',
                icon: Award,
                title: 'Thermia Auktorisation',
                desc: 'Som officiell återförsäljare och installatör erbjuder vi marknadsledande garantier och djup expertis på Thermias värmepumpar.',
              },
              {
                icon: Users,
                title: 'Lokal närvaro i Stockholm',
                desc: 'Vi betjänar hela Storstockholm med snabb inställelsetid, personlig rådgivning och långsiktig service sedan 1942.',
              },
            ].map((item, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                <div style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  height: '100%',
                  boxSizing: 'border-box',
                }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: item.badgeImage ? '#ffffff' : '#0F172A',
                    border: item.badgeImage ? '1px solid #e2e8f0' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                    boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)',
                    padding: item.badgeImage ? '4px' : '0',
                    boxSizing: 'border-box',
                  }}>
                    {item.badgeImage ? (
                      <img
                        src={item.badgeImage}
                        alt="Thermia Auktoriserad Partner"
                        style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
                      />
                    ) : (
                      <item.icon size={24} color="#ffffff" />
                    )}
                  </div>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--color-text-dark)',
                    margin: '0 0 10px 0',
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    margin: 0,
                    color: 'var(--color-gray-600)',
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                  }}>
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION E: CTA ────────────────────────────────────────── */}
      <CTABanner />

      <style>{`
        @media (max-width: 900px) {
          .about-content-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .about-content-grid img {
            max-width: 260px !important;
            margin: 0 auto;
          }
          .team-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .values-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </main>
  );
}
