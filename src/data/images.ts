/**
 * CENTRALIZED IMAGE CONFIGURATION - SÖDERHOLMS EL & VVS
 *
 * All images used across the site are defined here.
 */

export interface ImageSlot {
  url: string;
  alt: string;
}

export interface SiteImages {
  logo: ImageSlot;
  logoDark?: ImageSlot;
  ogImage?: ImageSlot;
  hero: {
    background: ImageSlot;
    videoUrl?: string;
  };
  services: {
    [key: string]: ImageSlot | undefined;
  };
  gallery: ImageSlot[];
  cta: {
    banner: ImageSlot;
    midSection: ImageSlot;
  };
  about: {
    hero: ImageSlot;
    teamMember?: ImageSlot;
  };
  whyChooseUs: ImageSlot;
  ideaToResult: ImageSlot;
  thermia?: ImageSlot;
  portfolio: {
    image: ImageSlot;
    title: string;
    category: string;
  }[];
}

const images: SiteImages = {
  logo: {
    url: '/logo.png',
    alt: 'Söderholms El & VVS - Auktoriserad elinstallation, VVS och Thermia värmepumpar i Stockholm',
  },
  logoDark: {
    url: '/logo-dark.png',
    alt: 'Söderholms El & VVS',
  },
  ogImage: {
    url: '/og-image.png',
    alt: 'Söderholms El & VVS Logotyp',
  },
  thermia: {
    url: '/thermia-badge.png',
    alt: 'Thermia - Pionjären inom värmepumpar • Auktoriserad Partner',
  },

  hero: {
    background: {
      url: '',
      alt: 'Söderholms El & VVS i Stockholm - El, VVS och Thermia Värmepumpar sedan 1942',
    },
    videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_3G5LlmMYORSdAk8SxzXrK2S0Is5/hf_20260819_171627_1dba7b55-8a8c-498d-8342-d3f797bd45f9.mp4',
  },

  services: {
    hero: {
      url: '/gallery/gallery-2.jpg',
      alt: 'Söderholms El & VVS installation och service av värmepumpar',
    },
    'elinstallation': {
      url: '/gallery/gallery-1.jpg',
      alt: 'Auktoriserade elinstallationer och elservice i Stockholm',
    },
    'vvs-arbeten': {
      url: '/gallery/gallery-2.jpg',
      alt: 'Professionella VVS-arbeten och rörinstallationer i Stockholm',
    },
    'varmepumpar': {
      url: '/gallery/gallery-5.jpg',
      alt: 'Installation av Thermia värmepumpar i Stockholm',
    },
    'service-underhall': {
      url: '/gallery/gallery-3.jpg',
      alt: 'Service och underhåll av Thermia värmepumpar',
    },
  },

  gallery: [
    {
      url: '/gallery/gallery-1.jpg',
      alt: 'Installation av Pahlén poolvärmepump med el- och VVS-anslutningar',
    },
    {
      url: '/gallery/gallery-2.jpg',
      alt: 'Thermia bergvärmepump med ackumulatortank och kopparrörsinstallation',
    },
    {
      url: '/gallery/gallery-3.jpg',
      alt: 'Service och underhåll av Thermia Diplomat värmepump',
    },
    {
      url: '/gallery/gallery-4.jpg',
      alt: 'VVS-montör och certifierad värmepumpstekniker vid driftsatt anläggning',
    },
    {
      url: '/gallery/gallery-5.jpg',
      alt: 'Komplett modern värmeanläggning med Thermia värmepump för fastighet',
    },
    {
      url: '/gallery/gallery-6.jpg',
      alt: 'Modernisering av värmesystem med energieffektiv Thermia värmepump',
    },
  ],

  cta: {
    banner: {
      url: '/gallery/gallery-2.jpg',
      alt: 'Söderholms El & VVS - Kontakta oss för rådgivning och offert',
    },
    midSection: {
      url: '/gallery/gallery-5.jpg',
      alt: 'Söderholms El & VVS - Certifierad Thermia installatör',
    },
  },

  about: {
    hero: {
      url: '/about.jpg',
      alt: 'Söderholms El & VVS auktoriserade elektriker och VVS-montörer i Stockholm',
    },
    teamMember: {
      url: '/about.jpg',
      alt: 'Värmepumpstekniker och VVS-montör Söderholms El & VVS',
    },
  },

  whyChooseUs: {
    url: '/gallery/gallery-2.jpg',
    alt: 'Högkvalitativa installationer och personlig service sedan 1942',
  },

  ideaToResult: {
    url: '/gallery/gallery-5.jpg',
    alt: 'Från rådgivning och dimensionering till färdig värmepumpsinstallation',
  },

  portfolio: [
    {
      image: {
        url: '/gallery/gallery-2.jpg',
        alt: 'Thermia bergvärmepump installerad i villa',
      },
      title: 'Thermia Bergvärme Villa',
      category: 'Värmepumpar',
    },
    {
      image: {
        url: '/gallery/gallery-1.jpg',
        alt: 'Installation av Pahlén poolvärmepump',
      },
      title: 'Installation av Poolvärmepump',
      category: 'Värmepumpar & El',
    },
    {
      image: {
        url: '/gallery/gallery-5.jpg',
        alt: 'Komplett värmecentral för fastighet',
      },
      title: 'Värmeanläggning Fastighet',
      category: 'VVS & Värme',
    },
    {
      image: {
        url: '/gallery/gallery-3.jpg',
        alt: 'Regelbunden service av Thermia Diplomat',
      },
      title: 'Service & Underhåll Värmepump',
      category: 'Service',
    },
    {
      image: {
        url: '/gallery/gallery-4.jpg',
        alt: 'Driftsättning av energieffektiv Thermia värmepump',
      },
      title: 'Komplett Värmepumpsbyte',
      category: 'Totalentreprenad',
    },
    {
      image: {
        url: '/gallery/gallery-6.jpg',
        alt: 'Rördragning och byte till modern Thermia pump',
      },
      title: 'Modernisering Värmesystem',
      category: 'VVS & Rör',
    },
  ],
};

export default images;
