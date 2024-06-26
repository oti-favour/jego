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
 * Pages
 *
 *
 */
export interface Page extends SanityDocument {
  _type: "page";

  /**
   * Slug — `slug`
   *
   *
   */
  slug: { _type: "slug"; current: string };

  /**
   * title — `string`
   *
   *
   */
  title: string;

  /**
   * Sub Title — `string`
   *
   *
   */
  subtitle?: string;

  /**
   * CTA Link — `url`
   *
   *
   */
  ctaLink?: string;

  /**
   * CTA Text — `string`
   *
   *
   */
  ctaText?: string;

  /**
   * pageFeatures — `array`
   *
   *
   */
  pageFeatures: Array<SanityKeyed<PageFeatures>>;
}

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

export type Documents = Page;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type IconPicker = any;
