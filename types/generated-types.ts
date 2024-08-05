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

/**
 * products
 *
 *
 */
export interface Products extends SanityDocument {
  _type: "products";

  /**
   * slug — `slug`
   *
   *
   */
  slug: { _type: "slug"; current: string };

  /**
   * product — `product`
   *
   *
   */
  product: Product;
}

/**
 * Investors Page
 *
 *
 */
export interface Investors extends SanityDocument {
  _type: "investors";

  /**
   * password — `string`
   *
   * Password for the investors page.
   */
  password: string;

  /**
   * passwordEnquiryEmail — `email`
   *
   * Email address to send password enquiries to
   */
  passwordEnquiryEmail?: Email;

  /**
   * home — `investorsHome`
   *
   * Overview of the investors page.
   */
  home: InvestorsHome;

  /**
   * reports — `object`
   *
   *
   */
  reports: {
    _type: "reports";
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
  };

  /**
   * news — `array`
   *
   * Select news articles to display on the investors page, in order of importance.
   */
  news: Array<SanityKeyedReference<News>>;
}

/**
 * News
 *
 *
 */
export interface News extends SanityDocument {
  _type: "news";

  /**
   * title — `string`
   *
   *
   */
  title: string;

  /**
   * slug — `slug`
   *
   *
   */
  slug: { _type: "slug"; current: string };

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
   * newsType — `string`
   *
   *
   */
  newsType?: string;

  /**
   * content — `blockContent`
   *
   *
   */
  content: BlockContent;

  /**
   * summary — `text`
   *
   *
   */
  summary?: string;

  /**
   * createdAt — `datetime`
   *
   *
   */
  createdAt: string;

  /**
   * readMinutes — `number`
   *
   *
   */
  readMinutes?: number;

  /**
   * author — `author`
   *
   *
   */
  author: Author;

  /**
   * readCount — `number`
   *
   *
   */
  readCount: number;
}

/**
 * reports
 *
 *
 */
export interface Reports extends SanityDocument {
  _type: "reports";

  /**
   * title — `string`
   *
   *
   */
  title: string;

  /**
   * slug — `slug`
   *
   *
   */
  slug: { _type: "slug"; current: string };

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
   * reportCategory — `string`
   *
   *
   */
  reportCategory: "finance" | "investors" | "partners" | "annual-reports";

  /**
   * content — `blockContent`
   *
   *
   */
  content: BlockContent;

  /**
   * summary — `text`
   *
   *
   */
  summary?: string;

  /**
   * createdAt — `datetime`
   *
   *
   */
  createdAt: string;

  /**
   * readMinutes — `number`
   *
   *
   */
  readMinutes?: number;

  /**
   * author — `author`
   *
   *
   */
  author: Author;

  /**
   * readCount — `number`
   *
   *
   */
  readCount: number;
}

/**
 * locations
 *
 *
 */
export interface Locations extends SanityDocument {
  _type: "locations";

  /**
   * name — `string`
   *
   *
   */
  name: string;

  /**
   * address — `string`
   *
   *
   */
  address: string;

  /**
   * latitude — `number`
   *
   *
   */
  latitude: number;

  /**
   * longitude — `number`
   *
   *
   */
  longitude: number;

  /**
   * image — `image`
   *
   * Image of the location, this will be used as a thumbnail
   */
  image: {
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
  description?: string;

  /**
   * products — `array`
   *
   * Vehicle models available at this location
   */
  products: Array<
    SanityKeyed<{
      /**
       * product — `reference`
       *
       *
       */
      product: SanityReference<Products>;

      /**
       * comingSoon — `boolean`
       *
       *
       */
      comingSoon: boolean;
    }>
  >;
}

/**
 * waitlist
 *
 *
 */
export interface Waitlist extends SanityDocument {
  _type: "waitlist";

  /**
   * email — `email`
   *
   *
   */
  email: Email;
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
  products: Array<SanityKeyedReference<Products>>;
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

  /**
   * pricing — `array`
   *
   *
   */
  pricing: Array<SanityKeyed<Pricing>>;

  /**
   * specs — `array`
   *
   *
   */
  specs?: Array<SanityKeyed<Specs>>;

  /**
   * customization — `customization`
   *
   *
   */
  customization: Customization;
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

export type InvestorsHome = {
  _type: "investorsHome";
  /**
   * image — `image`
   *
   * Main Image to display on the investors page.
   */
  image: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * overview — `overview`
   *
   * Overview of the investors page.
   */
  overview: Overview;
};

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;

      /**
       * Alternative Text — `string`
       *
       *
       */
      alt?: string;
    }>
>;

export type Author = {
  _type: "author";
  /**
   * name — `string`
   *
   *
   */
  name: string;

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
   * role — `string`
   *
   *
   */
  role: string;

  /**
   * email — `email`
   *
   *
   */
  email?: Email;

  /**
   * bio — `text`
   *
   *
   */
  bio?: string;
};

export type Pricing = {
  _type: "pricing";
  /**
   * title — `string`
   *
   *
   */
  title: string;

  /**
   * price — `number`
   *
   *
   */
  price: number;

  /**
   * description — `text`
   *
   *
   */
  description?: string;
};

export type Specs = {
  _type: "specs";
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
};

export type Customization = {
  _type: "customization";
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
   * colors — `array`
   *
   *
   */
  colors?: Array<
    SanityKeyed<{
      /**
       * Color Name — `simplerColor`
       *
       *
       */
      name?: SimplerColor;

      /**
       * title — `text`
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

      /**
       * images — `array`
       *
       *
       */
      images?: Array<
        SanityKeyed<{
          _type: "image";
          asset: SanityReference<SanityImageAsset>;
          crop?: SanityImageCrop;
          hotspot?: SanityImageHotspot;
        }>
      >;
    }>
  >;
};

export type Documents =
  | Home
  | Booking
  | Products
  | Investors
  | News
  | Reports
  | Locations
  | Waitlist
  | Footer;

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

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type SimplerColor = any;
