/**
 * CENTRALIZED IMAGE CONFIGURATION - NORDISK BERGMARK AB
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
  portfolio: {
    image: ImageSlot;
    title: string;
    category: string;
  }[];
}

const images: SiteImages = {
  logo: {
    url: '/logo.png',
    alt: 'Nordisk Bergmark AB - Bergsprängning, stenspräckning och markarbeten på Orust och i Bohuslän',
  },
  logoDark: {
    url: '/logo-dark.png',
    alt: 'Nordisk Bergmark AB',
  },
  ogImage: {
    url: '/og-image.png',
    alt: 'Nordisk Bergmark AB Logotyp',
  },

  hero: {
    background: {
      url: '/hero-main.webp',
      alt: 'Nordisk Bergmark AB professionella markarbeten, bergsprängning och schaktning',
    },
    videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_3G5LlmMYORSdAk8SxzXrK2S0Is5/hf_20260918_142212_05bae687-470d-442c-a0d8-78c8ac61ca86.mp4',
  },

  services: {
    'bergsprangning': {
      url: '/gallery/gallery-3.jpg',
      alt: 'Bergsprängning och stenspräckning på Orust och i Bohuslän',
    },
    'markarbete': {
      url: '/gallery/gallery-1.jpg',
      alt: 'Markarbete och grävning för fastigheter och tomter',
    },
    'dranering': {
      url: '/service-dranering.webp',
      alt: 'Husdränering och dagvattenledningar',
    },
    'snorojning': {
      url: '/service-snorojning.jpg',
      alt: 'Snöröjning, snöplogning och halkbekämpning i Bohuslän',
    },
  },

  gallery: [
    {
      url: '/gallery/gallery-1.jpg',
      alt: 'Bandgrävare Volvo under markberedning och tomtplanering',
    },
    {
      url: '/gallery/gallery-2.jpg',
      alt: 'Minigrävare vid stenspräckning och bergsschakt intill villa',
    },
    {
      url: '/gallery/gallery-3.jpg',
      alt: 'Bergsprängning med sprängmattor på skärgårdstomt i Bohuslän',
    },
    {
      url: '/gallery/gallery-4.jpg',
      alt: 'Precisionssprängning under sprängmattor',
    },
    {
      url: '/about.jpg',
      alt: 'Atlas Copco borrigg för bergborrning Nordisk Bergmark AB',
    },
  ],

  cta: {
    banner: {
      url: '/gallery/gallery-3.jpg',
      alt: 'Nordisk Bergmark AB bergsprängning och markarbete',
    },
    midSection: {
      url: '/gallery/gallery-2.jpg',
      alt: 'Nordisk Bergmark AB schakt och stenspräckning',
    },
  },

  about: {
    hero: {
      url: '/about.jpg',
      alt: 'Nordisk Bergmark AB borrigg och maskinpark på Orust och i Bohuslän',
    },
  },

  whyChooseUs: {
    url: '/gallery/gallery-1.jpg',
    alt: 'Professionella markarbeten med modern maskinpark - Nordisk Bergmark AB',
  },

  ideaToResult: {
    url: '/gallery/gallery-3.jpg',
    alt: 'Från berg och råmark till färdig tomt i Bohuslän',
  },

  portfolio: [
    {
      image: {
        url: '/gallery/gallery-3.jpg',
        alt: 'Bergsprängning för nybyggnation på havstomt i Bohuslän',
      },
      title: 'Bergsprängning Havstomt',
      category: 'Bergsprängning',
    },
    {
      image: {
        url: '/gallery/gallery-2.jpg',
        alt: 'Skonsam stenspräckning intill befintlig villa och trädgård',
      },
      title: 'Stenspräckning Villa',
      category: 'Stenspräckning',
    },
    {
      image: {
        url: '/gallery/gallery-1.jpg',
        alt: 'Tomtplanering och grundschaktning på Orust',
      },
      title: 'Markarbete & Tomtplanering',
      category: 'Markarbeten',
    },
    {
      image: {
        url: '/about.jpg',
        alt: 'Borrning i granit med modern bandburen borrigg',
      },
      title: 'Bergborrning med Borrigg',
      category: 'Bergborrning',
    },
    {
      image: {
        url: '/gallery/gallery-4.jpg',
        alt: 'Säker bergsprängning under sprängmattor',
      },
      title: 'Precisionssprängning Berg',
      category: 'Bergarbeten',
    },
  ],
};

export default images;
