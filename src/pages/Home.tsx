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
    answer: 'Nej, vi erbjuder alltid kostnadsfria offerter och teknisk rådgivning helt utan förbindelser för alla typer av bergarbeten och markentreprenader.',
  },
  {
    question: 'Vilket geografiskt område jobbar ni i?',
    answer: 'Nordisk Bergmark AB utgår från Orust men utför arbeten i Uddevalla, Tjörn, Stenungsund, Lysekil och över hela Bohuslän samt närliggande delar av Västra Götaland.',
  },
  {
    question: 'Vad är skillnaden mellan bergsprängning och stenspräckning?',
    answer: 'Bergsprängning används vid större bergvolymer och tomtschaktning med täckning av tunga sprängmattor. Stenspräckning (hydraulisk eller patronbaserad) är en skonsam, vibrationsfri metod som lämpar sig optimalt tätt intill befintliga husgrunder, ledningar och känslig bebyggelse.',
  },
  {
    question: 'Hjälper ni till med besiktning och tillstånd vid bergsprängning?',
    answer: 'Ja, vi samordnar nödvändiga tillstånd, riskanalyser, förbesiktning av närliggande fastigheter och vibrationsmätning så att hela entreprenaden sker tryggt och enligt gällande regelverk.',
  },
  {
    question: 'Erbjuder ni även dränering, grävning och snöröjning?',
    answer: 'Absolut. Utöver bergsprängning och bergborrning utför vi kompletta markarbeten som husgrunder, tomtplanering, schakt och dränering, samt snöröjning under vintern.',
  },
];

const homeReviews = [
  {
    name: 'Johan E.',
    location: 'Orust',
    authorSub: 'Orust, Bohuslän',
    text: 'Anlitade Nordisk Bergmark för bergsprängning och schaktning inför vårt husbygge på Orust. Otroligt professionellt genomfört med full koll på besiktning och vibrationer mot grannfastigheterna. Rekommenderas varmt!',
    stars: 5,
    date: '1 månad sedan',
  },
  {
    name: 'Karin M.',
    location: 'Uddevalla',
    authorSub: 'Uddevalla, Bohuslän',
    text: 'Fick hjälp med dränering runt källaren och stenspräckning av bergsklackar på tomten. Arbetet utfördes snabbt, noggrant och tomten lämnades i toppskick. Mycket trevligt och pålitligt bemötande genom hela projektet.',
    stars: 5,
    date: '2 månader sedan',
  },
  {
    name: 'Markus L.',
    location: 'Tjörn',
    authorSub: 'Tjörn, Bohuslän',
    text: 'Grymt duktiga och pålitliga hantverkare! De borrade och spräckte bort berget intill vår befintliga altan helt utan skador på omgivningen. Punktliga, moderna maskiner och ett riktigt snyggt slutresultat.',
    stars: 5,
    date: '3 veckor sedan',
  },
];

export default function Home() {
  usePageTitle(
    'Nordisk Bergmark AB | Bergsprängning & Markarbeten i Bohuslän',
    'Nordisk Bergmark AB utför professionell bergsprängning, bergborrning, stenspräckning, dränering och markarbeten på Orust, i Uddevalla och hela Bohuslän. Fri offert!'
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
      }}>
        {/* Hero Background Video */}
        <div
          ref={heroBgRef}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            overflow: 'hidden',
          }}
        >
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
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Balanced subtle gradient overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.48) 0%, rgba(15, 23, 42, 0.26) 45%, rgba(15, 23, 42, 0.52) 100%)',
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
                {/* Ambient glow behind logo */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 'clamp(200px, 28vw, 300px)',
                  height: 'clamp(200px, 28vw, 300px)',
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.03) 45%, transparent 70%)',
                  borderRadius: '50%',
                  pointerEvents: 'none',
                  filter: 'blur(30px)',
                }} />
                <img
                  src={images.logo.url}
                  alt={images.logo.alt}
                  style={{
                    width: 'clamp(160px, 18vw, 220px)',
                    height: 'auto',
                    display: 'block',
                    filter: 'drop-shadow(0 10px 36px rgba(0, 0, 0, 0.9)) drop-shadow(0 4px 12px rgba(0, 0, 0, 0.7))',
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
                Bergsprängning & Markarbeten i Bohuslän
              </h1>
            </ScrollReveal>

            {/* ── Subtitle ── */}
            <ScrollReveal animation="fade-up" delay={280} duration={0.8}>
              <p style={{
                fontFamily: "var(--font-body)",
                color: 'rgba(255, 255, 255, 0.85)',
                fontSize: 'clamp(0.92rem, 1.1vw, 1.05rem)',
                lineHeight: 1.6,
                maxWidth: '580px',
                margin: '0 auto 24px auto',
                textShadow: '0 2px 12px rgba(0, 0, 0, 0.7)',
                fontWeight: 400,
                letterSpacing: '0.01em',
              }}>
                Vi utgår från Orust och utför bergborrning, stenspräckning, bergsprängning, schaktning och dränering i Uddevalla och över hela Bohuslän.
              </p>
            </ScrollReveal>

            {/* ── Action Buttons ── */}
            <ScrollReveal animation="fade-up" delay={450} duration={0.8}>
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
                  href="tel:0722107582"
                  onClick={(e) => {
                    if (window.innerWidth > 768) {
                      e.preventDefault();
                      setIsCallModalOpen(true);
                    }
                  }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <Phone size={16} />
                    072-210 75 82
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
                  Vad vi erbjuder
                </span>
                <h2 style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.9rem, 3.6vw, 2.7rem)',
                  margin: 0,
                  lineHeight: 1.18,
                }}>
                  Mark- och bergarbeten med högsta precision
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
                  Från bergsprängning och stenspräckning till schaktning, dränering och snöröjning på Orust och i hela Bohuslän.
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

      {/* ── SECTION 3: DIN PARTNER INOM BERG & MARK / OM OSS ─────── */}
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
                  alt="Nordisk Bergmark AB verksamhet och maskinpark"
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
                  Er trygga partner för berg och mark i Bohuslän
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
                  Nordisk Bergmark AB är experter på bergsprängning, bergborrning, stenspräckning och markarbeten. Med bas på Orust verkar vi över hela Bohuslän och hjälper privatpersoner, byggföretag och fastighetsägare med allt från tomtplanering och bergschakt till husgrunder, dränering och snöröjning. Med modern maskinpark och högsta säkerhetsfokus levererar vi hållbara lösningar anpassade efter varje markförhållande.
                </p>
              </ScrollReveal>
              <ScrollReveal animation="fade-right" duration={0.8} delay={200}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    'Säker bergsprängning och vibrationsfri stenspräckning',
                    'Moderna borriggar och grävmaskiner för alla markförhållanden',
                    'Lokal närvaro på Orust, i Uddevalla och över hela Bohuslän',
                    'Kompletta helhetslösningar från bergschakt till färdig tomt',
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
          backgroundImage: `url(/cta-mid-section.webp)`,
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
              Behöver ni bergsprängning eller markarbeten?
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: '1rem',
              margin: '0 0 32px 0',
              lineHeight: 1.7,
            }}>
              Vi återkopplar med kostnadsfri offert och rådgivning inför ert projekt på Orust, i Uddevalla eller övriga Bohuslän.
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
                Nöjda kunder i Orust, Uddevalla och övriga Bohuslän är vårt bästa kvitto på noggrant utförda mark- och bergarbeten.
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
            subtitle="Här hittar du svar på vanliga funderingar kring bergsprängning, stenspräckning, markarbeten och hur vi arbetar över hela Bohuslän."
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
        }
      `}</style>
    </main>
  );
}
