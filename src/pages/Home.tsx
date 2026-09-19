import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import CTABanner from '../components/CTABanner';
import SocialBanner from '../components/SocialBanner';
import ProjectsGallery from '../components/ProjectsGallery';
import FAQAccordion from '../components/FAQAccordion';
import CallModal from '../components/CallModal';
import { ServiceIcon } from '../components/ServiceIcons';
import ReviewCard from '../components/ReviewCard';
import { usePageTitle } from '../hooks/usePageTitle';
import services, { ServiceItem } from '../data/services';
import images from '../data/images';

const container: React.CSSProperties = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 clamp(20px, 5vw, 40px)',
};

const homeFaqItems = [
  {
    question: 'Kostar det något att få en offert?',
    answer: 'Nej, vi erbjuder alltid kostnadsfri rådgivning och offert för alla typer av el-, VVS- och värmepumpsinstallationer.',
  },
  {
    question: 'Vilket geografiskt område jobbar ni i?',
    answer: 'Söderholms El & VVS utgår från Stockholm och utför arbeten i Bromma, Nacka, Täby, Danderyd, Lidingö, Solna och hela Storstockholm med omnejd.',
  },
  {
    question: 'Hur fungerar installationen av en Thermia värmepump?',
    answer: 'Vi erbjuder komplett totalentreprenad från noggrann dimensionering och energiberäkning till rördragning, elanslutning, driftsättning och intrimning av din Thermia värmepump.',
  },
  {
    question: 'Kan privatpersoner nyttja ROT-avdrag och Grön Teknik?',
    answer: 'Ja, vid installation av värmepumpar och VVS-arbeten nyttjar du ROT-avdraget med 30 procent skattereduktion på arbetskostnaden. Vid laddboxinstallation gäller Grön Teknik med 50 procents avdrag. Vi drar av beloppet direkt på fakturan.',
  },
  {
    question: 'Erbjuder ni även service och akut felsökning?',
    answer: 'Ja, vi utför kontinuerlig service, underhåll och driftoptimering av värmepumpar samt snabb felsökning och åtgärd vid el- och rörproblem.',
  },
];

const homeReviews = [
  {
    name: 'Johan E.',
    location: 'Bromma',
    authorSub: 'Bromma, Stockholm',
    text: 'Vi anlitade Söderholms El & VVS för att installera en Thermia bergvärmepump i vår villa i Bromma. Otroligt proffsigt bemötande från första kalkyl till driftsatt system. Snygg och prydlig rördragning och elinstallation i källaren. Uppvärmningen fungerar klockrent och driftkostnaderna har minskat rejält.',
    stars: 5,
    date: '3 veckor sedan',
  },
  {
    name: 'Karin M.',
    location: 'Danderyd',
    authorSub: 'Danderyd, Stockholm',
    text: 'Anlitade Söderholms för både elinstallation och rörarbeten i samband med badrumsrenovering samt installation av elbilsladdare. Mycket kunniga, punktliga och noggranna hantverkare som höll rent och snyggt under hela arbetet. Rekommenderas varmt!',
    stars: 5,
    date: '1 månad sedan',
  },
  {
    name: 'Markus L.',
    location: 'Nacka',
    authorSub: 'Nacka, Stockholm',
    text: 'Suverän service och rådgivning när vår äldre värmepump behövde ses över. Teknikern gjorde en grundlig genomgång, bytte slitdelar och optimerade inställningarna. Tryggt med ett företag som har funnits sedan 1942 och verkligen kan sin sak.',
    stars: 5,
    date: '2 månader sedan',
  },
];

export default function Home() {
  usePageTitle(
    'Söderholms El & VVS | El, VVS & Värmepumpar i Stockholm',
    'Söderholms El & VVS erbjuder auktoriserade elinstallationer, VVS och certifierad installation av Thermia värmepumpar i Stockholm med omnejd. Kontakta oss för fri offert!'
  );

  const heroBgRef = useRef<HTMLDivElement>(null);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (heroBgRef.current) {
            heroBgRef.current.style.transform = `translate3d(0, ${window.scrollY * 0.5}px, 0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main style={{ fontFamily: 'var(--font-family)' }}>

      {/* ── SECTION 1: HERO ─────────────────────────────────────── */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: 'clamp(85px, 10vh, 110px)',
        paddingBottom: 'clamp(40px, 6vh, 60px)',
        boxSizing: 'border-box',
        background: '#0B1120',
      }}>
        {/* Hero Background */}
        <div
          ref={heroBgRef}
          style={{
            position: 'absolute',
            top: '-10%',
            left: 0,
            right: 0,
            height: '120%',
            zIndex: 0,
            overflow: 'hidden',
            backgroundColor: '#0B1120',
          }}
        >
          {images.hero.videoUrl ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            >
              <source
                src={images.hero.videoUrl}
                type="video/mp4"
              />
            </video>
          ) : null}
        </div>

        {/* Balanced subtle gradient overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.58) 0%, rgba(15, 23, 42, 0.45) 45%, rgba(15, 23, 42, 0.66) 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }} />

        <div style={{ ...container, position: 'relative', zIndex: 2, width: '100%', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '860px',
            margin: '0 auto',
            paddingTop: '0',
            paddingBottom: '10px',
          }}>
            {/* ── HERO LOGO: The dominant visual centrepiece ── */}
            <ScrollReveal animation="fade-down" delay={0} duration={0.9}>
              <div style={{
                marginBottom: '18px',
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
              }}>
                {/* Deep contrast radial backing & warm halo to make gold pop cleanly over daytime video */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 'clamp(260px, 34vw, 380px)',
                  height: 'clamp(260px, 34vw, 380px)',
                  background: 'radial-gradient(circle, rgba(10, 15, 26, 0.78) 0%, rgba(10, 15, 26, 0.50) 48%, rgba(245, 158, 11, 0.12) 64%, transparent 78%)',
                  borderRadius: '50%',
                  pointerEvents: 'none',
                  filter: 'blur(16px)',
                }} />
                <img
                  src={images.logo.url}
                  alt={images.logo.alt}
                  style={{
                    width: 'clamp(200px, 24vw, 290px)',
                    height: 'auto',
                    display: 'block',
                    filter: 'brightness(1.18) contrast(1.14) saturate(1.24) drop-shadow(0 0 2px rgba(0, 0, 0, 0.98)) drop-shadow(0 8px 24px rgba(0, 0, 0, 0.85)) drop-shadow(0 0 26px rgba(245, 178, 48, 0.38))',
                    position: 'relative',
                    zIndex: 1,
                  }}
                />
              </div>
            </ScrollReveal>

            {/* ── Thin silver accent divider ── */}
            <ScrollReveal animation="fade-up" delay={120} duration={0.6}>
              <div style={{
                width: 'clamp(50px, 6vw, 80px)',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
                marginBottom: '16px',
                borderRadius: '1px',
              }} />
            </ScrollReveal>

            {/* ── Headline ── */}
            <ScrollReveal animation="fade-up" delay={200} duration={0.8}>
              <h1 style={{
                fontFamily: "var(--font-heading)",
                color: '#ffffff',
                fontSize: 'clamp(1.5rem, 2.7vw, 2.35rem)',
                fontWeight: 700,
                lineHeight: 1.22,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                margin: '0 0 12px 0',
                textShadow: '0 4px 24px rgba(0, 0, 0, 0.85)',
              }}>
                El, VVS & Thermia Värmepumpar i Stockholm
              </h1>
            </ScrollReveal>

            {/* ── Subtitle ── */}
            <ScrollReveal animation="fade-up" delay={280} duration={0.8}>
              <p style={{
                fontFamily: "var(--font-body)",
                color: 'rgba(255, 255, 255, 0.92)',
                fontSize: 'clamp(0.92rem, 1.1vw, 1.05rem)',
                lineHeight: 1.6,
                maxWidth: '580px',
                margin: '0 auto 24px auto',
                textShadow: '0 2px 12px rgba(0, 0, 0, 0.7)',
                fontWeight: 400,
                letterSpacing: '0.01em',
              }}>
                Auktoriserade elinstallationer, fackmannamässig VVS och certifierad installation av Thermia värmepumpar i Stockholm sedan 1942.
              </p>
            </ScrollReveal>

            {/* ── Action Buttons ── */}
            <ScrollReveal animation="fade-up" delay={360} duration={0.8}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '14px',
                flexWrap: 'wrap',
                width: '100%',
              }}>
                <Button variant="white" size="lg" href="/offert">
                  Begär offert
                </Button>

                <Button variant="outline" size="lg" href="/#tjanster">
                  Våra tjänster
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  href="tel:08253033"
                  onClick={(e) => {
                    if (window.innerWidth > 768) {
                      e.preventDefault();
                      setIsCallModalOpen(true);
                    }
                  }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <Phone size={16} />
                    08-25 30 33
                  </span>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CALL MODAL POPUP ────────────────────────────────────── */}
      <CallModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
      />

      {/* ── SECTION 2: VÅRA TJÄNSTER (CLEAN 4 CARDS ON A ROW) ───── */}
      <section
        id="tjanster"
        style={{
          background: '#f8fafc',
          padding: 'clamp(80px, 10vw, 120px) 0',
          borderTop: '1px solid #e2e8f0',
        }}
      >
        <div style={container}>
          {/* Authentic Split-Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '44px',
          }}>
            <div style={{ maxWidth: '580px' }}>
              <ScrollReveal animation="fade-right">
                <span style={{
                  color: 'var(--color-primary-orange)',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  display: 'inline-block',
                  marginBottom: '10px',
                }}>
                  Vad vi erbjuder
                </span>
                <h2 style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.9rem, 3.6vw, 2.7rem)',
                  margin: 0,
                  lineHeight: 1.18,
                }}>
                  Auktoriserad el och VVS med högsta precision
                </h2>
              </ScrollReveal>
            </div>

            <div style={{ maxWidth: '420px' }}>
              <ScrollReveal animation="fade-left" delay={150}>
                <p style={{
                  color: 'var(--color-gray-600)',
                  fontSize: '1rem',
                  lineHeight: 1.65,
                  margin: '0 0 12px 0',
                }}>
                  Från säkra elinstallationer och stambyten till certifierad installation och service av Thermia värmepumpar i Stockholm med omnejd.
                </p>
                <Link
                  to="/tjanster"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#0f172a',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    textDecoration: 'none',
                    borderBottom: '2px solid #0f172a',
                    paddingBottom: '2px',
                  }}
                >
                  Utforska alla tjänster <ArrowRight size={16} />
                </Link>
              </ScrollReveal>
            </div>
          </div>

          {/* Clean Architectural Icon-Centric Grid (4 cards on a row) */}
          <div className="services-showcase-grid">
            {services.map((svc: ServiceItem, index: number) => (
              <ScrollReveal key={svc.slug} animation="fade-up" delay={index * 80}>
                <Link
                  to={svc.href}
                  className="service-feature-card"
                  aria-label={`Läs mer om ${svc.title}`}
                >
                  {/* Bespoke Craft Line Icon */}
                  <div className="service-feature-icon">
                    <ServiceIcon
                      type={svc.slug}
                      color="currentColor"
                      size={34}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="service-feature-title">
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p className="service-feature-desc">
                    {svc.shortDescription}
                  </p>

                  {/* Clean Link Indicator */}
                  <div className="service-feature-link">
                    <span>Läs mer om tjänsten</span>
                    <ArrowRight size={16} />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2.5: THERMIA AUKTORISERAD PARTNER ─────────── */}
      <section style={{
        background: '#ffffff',
        padding: 'clamp(64px, 8vw, 96px) 0',
        borderTop: '1px solid #e2e8f0',
        borderBottom: '1px solid #e2e8f0',
      }}>
        <div style={container}>
          <div className="thermia-section-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'clamp(200px, 30%, 300px) 1fr',
            gap: 'clamp(36px, 6vw, 68px)',
            alignItems: 'center',
            maxWidth: '920px',
            margin: '0 auto',
          }}>
            {/* Left: Thermia Official Emblem */}
            <ScrollReveal animation="fade-right" duration={0.6}>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '24px',
                background: '#f8fafc',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
              }}>
                <img
                  src="/thermia-badge.png"
                  alt="Thermia Värmepumpar"
                  style={{
                    width: '100%',
                    maxWidth: '240px',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </div>
            </ScrollReveal>

            {/* Right: Clean, Natural Craftsmanship Info */}
            <ScrollReveal animation="fade-left" duration={0.6} delay={100}>
              <div>
                <h2 style={{
                  color: 'var(--color-text-dark)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.8rem, 3vw, 2.3rem)',
                  fontWeight: 700,
                  lineHeight: 1.25,
                  margin: '0 0 16px 0',
                }}>
                  Auktoriserad återförsäljare av Thermia
                </h2>
                <p style={{
                  color: 'var(--color-gray-600)',
                  fontSize: '1.05rem',
                  lineHeight: 1.75,
                  margin: '0 0 26px 0',
                  maxWidth: '540px',
                }}>
                  Söderholms El &amp; VVS levererar, installerar och servar Thermias energieffektiva bergvärme- och luft/vattenvärmepumpar i hela Stockholm. Vi hjälper dig hela vägen från dimensionering och energiberäkning till färdig installation och framtida service.
                </p>
                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  <Button variant="dark" href="/kontakt">
                    Kontakta oss för rådgivning
                  </Button>
                  <Button variant="outline" href="/offert">
                    Begär offert
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: OM OSS / ER TRYGGA PARTNER ─────── */}
      <section style={{ background: '#ffffff', padding: 'clamp(60px, 8vw, 100px) 0', borderTop: '1px solid #e2e8f0' }}>
        <div style={container}>
          <div className="two-col" style={{
            display: 'grid',
            gridTemplateColumns: 'clamp(280px, 35%, 400px) 1fr',
            gap: '60px',
            alignItems: 'center',
          }}>
            {/* Left: Company Image Card */}
            <ScrollReveal animation="fade-left" duration={0.8}>
              <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '440px',
                margin: '0 auto',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 12px 36px rgba(15, 23, 42, 0.08)',
                border: '1px solid #e2e8f0',
                background: '#f8fafc',
                height: '380px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0',
              }}>
                <img
                  src={images.about.hero.url}
                  alt="Söderholms El & VVS certifierade installatörer och montörer"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '24px',
                    display: 'block',
                  }}
                />
              </div>
            </ScrollReveal>

            {/* Right: text */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <ScrollReveal animation="fade-right" duration={0.8}>
                <h2 style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  lineHeight: 1.2,
                  margin: '0 0 14px 0',
                }}>
                  Er trygga partner för el och VVS i Stockholm sedan 1942
                </h2>
              </ScrollReveal>
              <ScrollReveal animation="scale-x-left" delay={200} duration={0.6}>
                <span style={{ display: 'block', width: '60px', height: '3px', background: '#0F172A', borderRadius: '2px', margin: '0 0 24px' }} />
              </ScrollReveal>
              <ScrollReveal animation="fade-right" duration={0.8} delay={100}>
                <p style={{
                  color: 'var(--color-gray-600)',
                  fontSize: '1rem',
                  lineHeight: 1.75,
                  margin: '0 0 32px 0',
                }}>
                  Söderholms El & VVS grundades 1942 och har i över 80 år levererat pålitliga hantverkstjänster med högsta kvalitet och säkerhet. Vi hjälper privatpersoner, bostadsrättsföreningar och fastighetsägare i Stockholm med allt från auktoriserade elinstallationer och rörarbeten till certifierad försäljning, dimensionering och service av Thermia värmepumpar. Med fokus på gediget hantverk, energieffektivitet och personlig service ser vi till att dina installationer fungerar felfritt år efter år.
                </p>
              </ScrollReveal>
              <ScrollReveal animation="fade-right" duration={0.8} delay={200}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    'Auktoriserad elinstallatör och certifierad VVS',
                    'Certifierad återförsäljare och installatör av Thermia värmepumpar',
                    'Lokal närvaro i Stockholm, Bromma, Nacka, Täby och Danderyd',
                    'Komplett totalentreprenad från rådgivning till driftsättning',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <CheckCircle2 size={22} color="#0F172A" style={{ flexShrink: 0 }} />
                      <span style={{ color: 'var(--color-text-dark)', fontWeight: 600, fontSize: '0.95rem' }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-right" duration={0.8} delay={250}>
                <div style={{ marginTop: '32px' }}>
                  <Button variant="dark" href="/om-oss">
                    Läs mer om oss
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: REFERENSER / PROJEKT ──────────────────────── */}
      <ProjectsGallery />

      {/* ── SECTION 5: MID CTA ──────────────────────────────────── */}
      <section style={{
        position: 'relative',
        padding: 'clamp(50px, 7vw, 80px) 0',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(/gallery/gallery-5.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(15, 23, 42, 0.88)' }} />
        <div style={{ ...container, position: 'relative', zIndex: 1 }}>
          <ScrollReveal animation="scale-in">
            <h2 style={{
              color: 'var(--color-white)',
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              margin: '0 0 12px 0',
            }}>
              Planerar ni att byta värmepump eller utföra el- och VVS-arbeten?
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: '1rem',
              margin: '0 0 32px 0',
              lineHeight: 1.7,
            }}>
              Vi återkopplar med kostnadsfri rådgivning och offert inför ert projekt i Stockholm med omnejd.
            </p>
            <Button variant="white" size="lg" href="/offert">
              Begär offert
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 6: KUNDOMDÖMEN / REVIEWS ───────────────────── */}
      <section
        id="omdomen"
        style={{
          background: '#f8fafc',
          padding: 'clamp(70px, 9vw, 100px) 0',
          borderTop: '1px solid #e2e8f0',
        }}
      >
        <div style={container}>
          <ScrollReveal animation="fade-up">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <span style={{
                color: 'var(--color-primary-orange)',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                display: 'inline-block',
                marginBottom: '10px',
              }}>
                Kundomdömen
              </span>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-text-dark)',
                fontSize: 'clamp(1.9rem, 3.2vw, 2.5rem)',
                fontWeight: 700,
                margin: '0 0 12px 0',
              }}>
                Vad våra kunder säger
              </h2>
              <p style={{
                color: 'var(--color-gray-600)',
                fontSize: '1rem',
                maxWidth: '560px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}>
                Nöjda villaägare och bostadsrättsföreningar i Stockholm är vårt bästa kvitto på noggrant utförda el- och VVS-arbeten.
              </p>
            </div>
          </ScrollReveal>

          <div
            className="reviews-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
              maxWidth: '1100px',
              margin: '0 auto',
            }}
          >
            {homeReviews.map((review, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                <ReviewCard review={review} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: VANLIGA FRÅGOR (FAQ) ── */}
      <section style={{
        background: '#0f172a',
        padding: 'clamp(70px, 9vw, 110px) 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Subtle decorative glow */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 85% 25%, rgba(255, 255, 255, 0.12) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div style={{ ...container, position: 'relative', zIndex: 1 }}>
          <FAQAccordion
            items={homeFaqItems}
            title="Vanliga frågor"
            subtitle="Här hittar du svar på vanliga funderingar kring elinstallationer, VVS, Thermia värmepumpar och ROT-avdrag i Stockholm."
            buttonText="Kontakta oss direkt"
            buttonLink="/kontakt"
            dark={true}
          />
        </div>
      </section>

      {/* ── SOCIAL MEDIA BANNER ─────────────────────────────────── */}
      <SocialBanner />

      {/* ── SECTION 10: CTA BANNER ───────────────────────────────── */}
      <CTABanner />

      {/* ── STYLES ───────────────────────────────── */}
      <style>{`
        .steps-grid-wrapper {
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }
        .review-card-el {
          background: var(--color-white);
          border: 1px solid #EDE8E0;
          border-radius: var(--border-radius-lg);
          padding: 28px 30px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .review-card-el:hover {
          transform: translateY(-5px) rotate(-0.5deg);
          box-shadow: 0 16px 40px rgba(28,21,16,0.10);
        }

        @media (max-width: 1024px) {
          .reviews-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .two-col { grid-template-columns: 1fr !important; gap: 32px !important; }
          .reviews-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
          .thermia-section-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 28px !important;
          }
          .thermia-section-grid img {
            margin: 0 auto;
            max-width: 190px !important;
          }
          .thermia-section-grid div:last-child div {
            justify-content: center;
          }
        }
      `}</style>
    </main>
  );
}
