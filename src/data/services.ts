export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  heroText: string;
  detailedDescription: string;
  heroImage: string;
  image: string;
  href: string;
  tag?: string;
  badge?: string;
  highlights?: string[];
  sections?: Array<{
    heading?: string;
    text?: string;
    image?: string;
    bullets?: string[];
    subsections?: Array<{
      subheading: string;
      text: string;
    }>;
  }>;
  faq?: FAQItem[];
  iconName?: string;
  features?: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export const services: ServiceItem[] = [
  {
    slug: 'bergsprangning',
    title: 'Bergsprängning',
    shortDescription: 'Säker och certifierad bergsprängning, vibrationsdämpad stenspräckning och bergborrning för villatomter, grunder och anläggningsprojekt.',
    heroText: 'Säker bergsprängning och kontrollerad stenspräckning med högsta precision på Orust och i hela Bohuslän.',
    detailedDescription: `Nordisk Bergmark AB är specialister på säker och varsam bergsprängning, hydraulisk stenspräckning och bergborrning. Vi hjälper privatpersoner, byggföretag och samfälligheter på Orust, i Uddevalla och över hela Bohuslän att forma berget för nya villor, tillbyggnader, garage, pooler eller VA-schakter.

Med professionell maskinpark och godkända sprängmattor utför vi precisionssprängning även i trånga villamiljöer nära intilliggande byggnader. Vid särskilt känsliga lägen använder vi skonsam stenspräckning och bergborrning som minimerar vibrationer och omgivningspåverkan.`,
    heroImage: '/gallery/gallery-3.jpg',
    image: '/gallery/gallery-3.jpg',
    href: '/tjanster#bergsprangning',
    tag: 'Bergsprängning',
    badge: 'Säker Sprängning',
    highlights: [
      'Kontrollerad bergsprängning med godkända sprängmattor',
      'Vibrationsdämpad stenspräckning nära fastigheter',
      'Bergborrning för fundament, stolpar och bergvärme',
      'Komplett borttransport av sprängsten och bergmassor',
    ],
    faq: [
      {
        question: 'Kan ni spränga berg nära ett befintligt bostadshus?',
        answer: 'Ja, vi utför varsam precisionssprängning med tunga sprängmattor och anpassad laddningsmängd. Vid extrem närhet till känsliga konstruktioner använder vi stenspräckning helt utan sprängämnen för maximal säkerhet.',
      },
      {
        question: 'Krävs det besiktning och tillstånd innan sprängning?',
        answer: 'Vi bistår med nödvändiga tillståndsansökningar och rekommenderar för- och efterbesiktning av närliggande fastigheter enligt gällande säkerhetsföreskrifter.',
      },
    ],
  },
  {
    slug: 'markarbete',
    title: 'Markarbeten',
    shortDescription: 'Omfattande schakt- och grävarbeten, tomtplanering, grundläggning och anläggning med moderna band- och hjulgrävare.',
    heroText: 'Professionella markarbeten och tomtplanering från grunden över hela Bohuslän.',
    detailedDescription: `Vi på Nordisk Bergmark AB utför alla typer av mark- och schaktarbeten på Orust, i Uddevalla och omkringliggande kommuner. Oavsett om du ska förbereda marken för nybyggnation, anlägga ny infart, schakta för husgrund eller terrassera en kuperad tomt har vi rätt grävmaskiner och kompetens.

Vi ser till att markförhållandena optimeras med bärlager, rätt fall och stabil grundläggning som håller mot väder och vind i det bohuslänska kustklimatet.`,
    heroImage: '/gallery/gallery-1.jpg',
    image: '/gallery/gallery-1.jpg',
    href: '/tjanster#markarbete',
    tag: 'Markarbeten',
    badge: 'Stabil Grund',
    highlights: [
      'Schaktning och tomtplanering för nybyggnation',
      'Grundläggning för villor, garage och attefallshus',
      'Anläggning av vägar, uppfarter och parkeringsytor',
      'Leverans och utläggning av grus, makadam och matjord',
    ],
    faq: [
      {
        question: 'Hjälper ni till med bortforsling av schaktmassor?',
        answer: 'Ja, vi samordnar hela kedjan inklusive bortforsling av schaktmassor och leverans av rätt fyllnadsmaterial och bärlager.',
      },
      {
        question: 'Vilka typer av grävmaskiner förfogar ni över?',
        answer: 'Vår maskinpark omfattar moderna band- och minigrävare anpassade för allt från trånga trädgårdsschakter till omfattande anläggningsprojekt.',
      },
    ],
  },
  {
    slug: 'dranering',
    title: 'Dränering',
    shortDescription: 'Fackmannamässig husdränering, fuktisolering av källargrund och anslutning av dagvatten- och avloppssystem.',
    heroText: 'Trygg dränering och grundisolering som skyddar din fastighet mot fukt och vatteninträngning.',
    detailedDescription: `Ett fullgott dräneringssystem är fastighetens viktigaste skydd mot fukt, mögel och vattenskador. Nordisk Bergmark AB utför certifierad husdränering och tilläggsisolering på Orust och i hela Bohuslän.

Vi schaktar skonsamt runt husgrunden, lägger nya dräneringsrör, monterar fuktisolerande skivor och säkerställer korrekt avledning av dagvatten och regnvatten bort från fastigheten.`,
    heroImage: '/service-dranering.webp',
    image: '/service-dranering.webp',
    href: '/tjanster#dranering',
    tag: 'Dränering',
    badge: 'Fuktskydd',
    highlights: [
      'Dränering och fuktisolering av källargrund',
      'Dagvattenledningar, stenkistor och infiltration',
      'Byte och anslutning av servisledningar för VA',
      'Återställning av tomt och gräsytor efter schaktning',
    ],
    faq: [
      {
        question: 'Hur vet man att det är dags att dränera om grunden?',
        answer: 'Vanliga tecken är fuktfläckar på källarväggar, unken lukt, färgsläpp eller att det gått mer än 25–30 år sedan förra dräneringen utfördes.',
      },
      {
        question: 'Isolerar ni även källarväggarna vid dränering?',
        answer: 'Ja, vi rekommenderar alltid utvändig fuktisolering (t.ex. dräneringsskivor) vilket ger både varmare källare och ett permanent fuktskydd.',
      },
    ],
  },
  {
    slug: 'snorojning',
    title: 'Snöröjning',
    shortDescription: 'Pålitlig snöröjning, halkbekämpning och sandning under vintern samt maskinell gräsklippning och tomtunderhåll på sommaren.',
    heroText: 'Pålitlig vinterväghållning och säsongsskötsel för vägar, samfälligheter och företag i Bohuslän.',
    detailedDescription: `När vintern slår till i Bohuslän ser Nordisk Bergmark AB till att vägar, industritomter, samfällighetsvägar och parkeringsytor hålls säkra och framkomliga. Vi erbjuder snöröjning med plogning, saltning och sandning med beredskap dygnet runt under vintersäsongen.

Under den varmare delen av året bistår vi även med storskalig gräsklippning, dikesrensning och allmänt markunderhåll för fastigheter och vägsamfälligheter på Orust och i Uddevalla med omnejd.`,
    heroImage: '/service-snorojning.jpg',
    image: '/service-snorojning.jpg',
    href: '/tjanster#snorojning',
    tag: 'Snöröjning',
    badge: 'Vinterväghållning',
    highlights: [
      'Snöplogning av vägar, parkeringar och infarter',
      'Halkbekämpning och sandning',
      'Beredskapsavtal för företag och samfälligheter',
      'Maskinell gräsklippning och markskötsel',
    ],
    faq: [
      {
        question: 'Erbjuder ni fasta beredskapsavtal för snöröjning?',
        answer: 'Ja, vi tecknar säsongsavtal med samfälligheter, BRF:er och företag där vi rycker ut automatiskt vid visst snödjup.',
      },
      {
        question: 'Vilka områden täcker ni med snöröjning?',
        answer: 'Vi utgår från Orust och erbjuder vinterväghållning och snöröjning i närområdet samt delar av Uddevalla och Tjörn.',
      },
    ],
  },
];

export default services;
