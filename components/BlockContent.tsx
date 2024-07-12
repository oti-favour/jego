import { sanityImageUrl } from "@/lib/utils";
import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";

function BlockContent({ value }: { value: any }) {
  return <PortableText value={value} components={components} />;
}

export default BlockContent;

// Barebones lazy-loaded image component
const SampleImageComponent = ({
  value,
  isInline,
}: {
  value: any;
  isInline: any;
}) => {
  const { width, height } = getImageDimensions(value);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={sanityImageUrl(value)}
      alt={value.alt || " "}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? "inline-block" : "block",

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  );
};

const components = {
  types: {
    image: SampleImageComponent,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
};
