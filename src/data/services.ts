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
    slug: 'elinstallation',
    title: 'Elinstallationer',
    shortDescription: 'Auktoriserade elinstallationer och elservice för privatpersoner, bostadsrättsföreningar och företag i hela Stockholmsområdet.',
    heroText: 'Trygga och fackmannamässiga elinstallationer utförda av behöriga elektriker i Stockholm.',
    detailedDescription: `Söderholms El & VVS erbjuder kompletta och säkra elinstallationer för både renovering och nybyggnation i Stockholm med omnejd. Våra behöriga elektriker har mångårig erfarenhet av allt från modernisering av elcentraler och installation av jordfelsbrytare till belysningsstyrning, laddboxar för elbil och kraftmatning till värmepumpar.

Vi sätter elsäkerhet och precision i främsta rummet. Oavsett om det handlar om ett mindre serviceuppdrag i en villa eller en omfattande elentreprenad för en fastighetsägare ser vi till att anläggningen uppfyller rådande elsäkerhetskrav och levererar pålitlig drift under många år framöver.`,
    heroImage: '/gallery/gallery-1.jpg',
    image: '/gallery/gallery-1.jpg',
    href: '/tjanster#elinstallation',
    tag: 'Elinstallation',
    badge: 'Auktoriserad El',
    highlights: [
      'Byte av elcentraler och säkringsskåp',
      'Installation av laddboxar för elbil',
      'Elanslutning av värmepumpar och värmesystem',
      'Felsökning, elbesiktning och modernisering',
    ],
    faq: [
      {
        question: 'Är era elektriker certifierade och behöriga?',
        answer: 'Ja, vi är registrerade hos Elsäkerhetsverket och alla våra elinstallationer utförs enligt gällande svenska standarder och säkerhetsföreskrifter.',
      },
      {
        question: 'Hjälper ni till med installation av elbilsladdare?',
        answer: 'Absolut. Vi hjälper dig att välja rätt laddbox, kontrollerar huvudsäkringen och utför en komplett och säker elinstallation med Grön Teknik-avdrag.',
      },
    ],
  },
  {
    slug: 'vvs-arbeten',
    title: 'VVS & Rörarbeten',
    shortDescription: 'Professionella VVS-arbeten, rördragning, badrumsinstallationer och stambyten med långsiktig trygghetsgaranti.',
    heroText: 'Fackmannamässiga VVS-arbeten och rörinstallationer med högsta precision i Stockholm.',
    detailedDescription: `VVS-arbeten kräver stor yrkesskicklighet och noggrannhet för att förebygga vattenskador och garantera optimal funktion. På Söderholms El & VVS utför vi alla typer av rörarbeten för villor, flerbostadshus och kommersiella lokaler i Stockholm.

Våra certifierade VVS-montörer hjälper dig med allt från rördragning vid köks- och badrumsrenoveringar till byte av ventiler, cirkulationspumpar, varmvattenberedare och anslutning av sanitetsporslin. Vi arbetar uteslutande med beprövade kvalitetsprodukter och godkända rörsystem.`,
    heroImage: '/gallery/gallery-2.jpg',
    image: '/gallery/gallery-2.jpg',
    href: '/tjanster#vvs-arbeten',
    tag: 'VVS & Rör',
    badge: 'Säker Vatten',
    highlights: [
      'Rördragning för värme, vatten och avlopp',
      'Installation och utbyte av varmvattenberedare',
      'VVS-arbeten vid badrums- och köksrenovering',
      'Montering av blandare, wc-stolar och sanitet',
    ],
    faq: [
      {
        question: 'Arbetar ni enligt branschreglerna Säker Vatten?',
        answer: 'Ja, våra VVS-montörer följer alltid branschreglerna Säker Vatteninstallation för att säkerställa högsta kvalitet och minimera risken för framtida fuktskador.',
      },
      {
        question: 'Kan ni hjälpa till vid akuta rörläckor eller stopp?',
        answer: 'Ja, vi bistår med snabb felsökning och åtgärd vid vattenläckage och trasiga ventiler i Storstockholm.',
      },
    ],
  },
  {
    slug: 'varmepumpar',
    title: 'Thermia Värmepumpar',
    shortDescription: 'Certifierad försäljning, dimensionering och installation av marknadsledande Thermia bergvärme och luft/vattenvärmepumpar.',
    heroText: 'Sänk dina uppvärmningskostnader och få perfekt inomhusklimat med Thermia värmepumpar.',
    detailedDescription: `Som certifierad återförsäljare och installatör av Thermia värmepumpar hjälper Söderholms El & VVS dig att investera i en modern, energieffektiv och driftsäker värmelösning. Thermia ligger i absolut framkant när det gäller svensk värmepumpsteknik med hög verkningsgrad och tyst drift.

Vi tar ett helhetsansvar för hela installationen: från noggrann energiberäkning och dimensionering till rördragning, elanslutning och driftsättning. Oavsett om du väljer bergvärme, jordvärme eller luft/vattenvärmepump ser vi till att anläggningen trimmas in för maximal energibesparing.`,
    heroImage: '/gallery/gallery-5.jpg',
    image: '/gallery/gallery-5.jpg',
    href: '/tjanster#varmepumpar',
    tag: 'Värmepumpar',
    badge: 'Thermia Partner',
    highlights: [
      'Auktoriserad återförsäljare och installatör av Thermia',
      'Energieffektiv bergvärme och luft/vattenvärmepumpar',
      'Komplett totalentreprenad från kalkyl till igångkörning',
      'Utbyte av gamla värmepannor och direktverkande el',
    ],
    faq: [
      {
        question: 'Hur mycket kan jag spara genom att installera en Thermia värmepump?',
        answer: 'Beroende på ditt befintliga värmesystem kan en modern Thermia värmepump minska uppvärmningskostnaderna med upp till 80 procent.',
      },
      {
        question: 'Hjälper ni till med dimensionering och energiberäkning?',
        answer: 'Ja, vi gör alltid en noggrann kalkyl baserad på fastighetens yta, isolering och hushållets energibehov för att rekommendera optimal värmepump.',
      },
    ],
  },
  {
    slug: 'service-underhall',
    title: 'Service & Underhåll',
    shortDescription: 'Regelbunden service, driftoptimering och konsultation för värmepumpar och värmeanläggningar som säkerställer lång livslängd.',
    heroText: 'Regelbunden service och expertkonsultation för maximal prestanda och problemfri drift.',
    detailedDescription: `En värmepump arbetar året runt och behöver kontinuerlig tillsyn för att bibehålla sin höga verkningsgrad och långa livslängd. Söderholms El & VVS erbjuder professionell service och underhåll av Thermia värmepumpar samt övriga värmeanläggningar i Stockholm.

Vid en servicekontroll går vi igenom köldmediekrets, expansionskärl, cirkulationspumpar, filter och styrinställningar. Genom att upptäcka slitage och felinställningar i tid undviker du onödiga driftstopp och säkerställer att värmepumpen alltid arbetar med optimal energieffektivitet.`,
    heroImage: '/gallery/gallery-3.jpg',
    image: '/gallery/gallery-3.jpg',
    href: '/tjanster#service-underhall',
    tag: 'Service & Rådgivning',
    badge: 'Förebyggande Service',
    highlights: [
      'Auktoriserad service på Thermia värmepumpar',
      'Funktionskontroll, filterrengöring och tryckkontroll',
      'Driftoptimering för lägre elförbrukning',
      'Rådgivning och konsultation vid uppgradering',
    ],
    faq: [
      {
        question: 'Hur ofta bör man utföra service på sin värmepump?',
        answer: 'Vi rekommenderar en professionell genomgång vartannat till vart tredje år för att säkerställa högsta verkningsgrad och förebygga kostsamma reparationer.',
      },
      {
        question: 'Servar ni även äldre modeller av Thermia?',
        answer: 'Ja, vi har stor erfarenhet av både äldre och nyare Thermia-modeller och tillgång till originalreservdelar för snabb åtgärd.',
      },
    ],
  },
];

export default services;
