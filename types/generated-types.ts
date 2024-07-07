import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Home Page
 *
 * The homepage of the site
 */
export interface Home extends SanityDocument {
  _type: "home";

  /**
   * hero — `hero`
   *
   *
   */
  hero: Hero;

  /**
   * newsletter — `newsletter`
   *
   *
   */
  newsletter: Newsletter;

  /**
   * intro — `intro`
   *
   *
   */
  intro: Intro;

  /**
   * powerPod — `powerPod`
   *
   *
   */
  powerPod: PowerPod;

  /**
   * jegoPod — `jegoPod`
   *
   *
   */
  jegoPod: JegoPod;

  /**
   * electricVehicles — `electricVehicle`
   *
   *
   */
  electricVehicles: ElectricVehicle;

  /**
   * mobileApp — `mobileApp`
   *
   *
   */
  mobileApp: MobileApp;

  /**
   * about — `about`
   *
   *
   */
  about: About;

  /**
   * faqs — `faqs`
   *
   *
   */
  faqs: Faqs;

  /**
   * gallery — `gallery`
   *
   *
   */
  gallery: Gallery;
}

/**
 * Footer
 *
 *
 */
export interface Footer extends SanityDocument {
  _type: "footer";

  /**
   * title — `string`
   *
   *
   */
  title?: string;

  /**
   * logo — `image`
   *
   *
   */
  logo: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * description — `text`
   *
   *
   */
  description: string;

  /**
   * navItems — `array`
   *
   *
   */
  navItems: Array<SanityKeyed<NavItem>>;

  /**
   * privacyPolicyURL — `url`
   *
   *
   */
  privacyPolicyURL: string;

  /**
   * termsAndConditionsURL — `url`
   *
   *
   */
  termsAndConditionsURL: string;

  /**
   * copyrightInfo — `text`
   *
   *
   */
  copyrightInfo: string;

  /**
   * builtByTitle — `string`
   *
   *
   */
  builtByTitle: string;

  /**
   * builtByURL — `url`
   *
   *
   */
  builtByURL: string;
}

/**
 * Booking Pods
 *
 * The booking pods of the site
 */
export interface Booking extends SanityDocument {
  _type: "booking";

  /**
   * title — `string`
   *
   *
   */
  title?: string;
}

export type Hero = {
  _type: "hero";
  /**
   * overview — `overview`
   *
   *
   */
  overview: Overview;

  /**
   * pageFeatures — `array`
   *
   *
   */
  pageFeatures: Array<SanityKeyed<PageFeatures>>;
};

export type Intro = {
  _type: "intro";
  /**
   * overview — `overview`
   *
   *
   */
  overview: Overview;

  /**
   * partners — `array`
   *
   *
   */
  partners: Array<SanityKeyed<Partner>>;
};

export type PowerPod = {
  _type: "powerPod";
  /**
   * overview — `overview`
   *
   *
   */
  overview: Overview;

  /**
   * video — `video`
   *
   *
   */
  video: Video;

  /**
   * pageFeatures — `array`
   *
   *
   */
  pageFeatures: Array<SanityKeyed<PageFeatures>>;
};

export type JegoPod = {
  _type: "jegoPod";
  /**
   * overview — `overview`
   *
   *
   */
  overview: Overview;

  /**
   * video — `video`
   *
   *
   */
  video: Video;

  /**
   * pageFeatures — `array`
   *
   *
   */
  pageFeatures: Array<SanityKeyed<PageFeatures>>;
};

export type ElectricVehicle = {
  _type: "electricVehicle";
  /**
   * overview — `overview`
   *
   *
   */
  overview: Overview;

  /**
   * products — `array`
   *
   *
   */
  products: Array<SanityKeyed<Product>>;
};

export type MobileApp = {
  _type: "mobileApp";
  /**
   * overview — `overview`
   *
   *
   */
  overview: Overview;

  /**
   * comingSoon — `boolean`
   *
   *
   */
  comingSoon: boolean;

  /**
   * heroImage — `image`
   *
   *
   */
  heroImage: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
};

export type About = {
  _type: "about";
  /**
   * overview — `overview`
   *
   *
   */
  overview: Overview;

  /**
   * image — `image`
   *
   *
   */
  image: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * marquee — `string`
   *
   *
   */
  marquee: string;

  /**
   * members — `array`
   *
   *
   */
  members: Array<SanityKeyed<Member>>;
};

export type Faqs = {
  _type: "faqs";
  /**
   * pageName — `string`
   *
   *
   */
  pageName: string;

  /**
   * title — `string`
   *
   *
   */
  title: string;

  /**
   * faqs — `array`
   *
   *
   */
  faqs: Array<SanityKeyed<Faq>>;

  /**
   * email — `email`
   *
   *
   */
  email: Email;
};

export type Gallery = {
  _type: "gallery";
  /**
   * title — `string`
   *
   *
   */
  title: string;

  /**
   * images — `array`
   *
   *
   */
  images: Array<
    SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
  >;

  /**
   * socials — `array`
   *
   *
   */
  socials: Array<SanityKeyed<Social>>;
};

export type Faq = {
  _type: "faq";
  /**
   * question — `string`
   *
   *
   */
  question: string;

  /**
   * answer — `text`
   *
   *
   */
  answer: string;
};

export type Member = {
  _type: "member";
  /**
   * name — `string`
   *
   *
   */
  name: string;

  /**
   * role — `string`
   *
   *
   */
  role: string;

  /**
   * image — `image`
   *
   *
   */
  image: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * bio — `text`
   *
   *
   */
  bio?: string;
};

export type Newsletter = {
  _type: "newsletter";
  /**
   * title — `string`
   *
   *
   */
  title: string;

  /**
   * description — `text`
   *
   *
   */
  description: string;

  /**
   * image — `image`
   *
   *
   */
  image: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * privacyPolicyLink — `url`
   *
   *
   */
  privacyPolicyLink: string;
};

export type Overview = {
  _type: "overview";
  /**
   * pageName — `string`
   *
   *
   */
  pageName: string;

  /**
   * title — `string`
   *
   *
   */
  title: string;

  /**
   * description — `text`
   *
   *
   */
  description: string;

  /**
   * cta — `url`
   *
   *
   */
  cta?: string;

  /**
   * ctaText — `string`
   *
   *
   */
  ctaText?: string;

  /**
   * secondaryCta — `url`
   *
   *
   */
  secondaryCta?: string;

  /**
   * secondaryCtaText — `string`
   *
   *
   */
  secondaryCtaText?: string;
};

export type PageFeatures = {
  _type: "pageFeatures";
  /**
   * icon — `iconPicker`
   *
   *
   */
  icon?: IconPicker;

  /**
   * title — `string`
   *
   *
   */
  title?: string;

  /**
   * description — `text`
   *
   *
   */
  description?: string;
};

export type Partner = {
  _type: "partner";
  /**
   * name — `string`
   *
   *
   */
  name: string;

  /**
   * logo — `image`
   *
   *
   */
  logo: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * url — `url`
   *
   *
   */
  url: string;
};

export type Product = {
  _type: "product";
  /**
   * title — `string`
   *
   *
   */
  title: string;

  /**
   * description — `text`
   *
   *
   */
  description: string;

  /**
   * price — `number`
   *
   *
   */
  price?: number;

  /**
   * images — `array`
   *
   *
   */
  images: Array<
    SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
  >;

  /**
   * cta — `url`
   *
   *
   */
  cta?: string;

  /**
   * ctaText — `string`
   *
   *
   */
  ctaText?: string;
};

export type Social = {
  _type: "social";
  /**
   * title — `string`
   *
   *
   */
  title: string;

  /**
   * icon — `iconPicker`
   *
   *
   */
  icon: IconPicker;

  /**
   * url — `url`
   *
   *
   */
  url: string;
};

export type Video = {
  _type: "video";
  /**
   * title — `string`
   *
   *
   */
  title: string;

  /**
   * videoUrl — `url`
   *
   *
   */
  videoUrl: string;
};

export type NavItem = {
  _type: "navItem";
  /**
   * title — `string`
   *
   *
   */
  title: string;

  /**
   * links — `array`
   *
   *
   */
  links?: Array<
    SanityKeyed<{
      _type: "link";
      /**
       * title — `string`
       *
       *
       */
      title: string;

      /**
       * url — `string`
       *
       *
       */
      url: string;
    }>
  >;
};

export type Documents = Home | Footer | Booking;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Email = any;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type IconPicker = any;
