"use client";
import { sanityImageUrl } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import { Gallery } from "react-grid-gallery";
import { Image as SanityImage } from "sanity";

function ReactGallery({ images }: { images: SanityImage[] }) {
  const allImages = images.map((image) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const imageProp = useNextSanityImage(client, image);
    return {
      src: sanityImageUrl(image),
      alt: image.asset?._ref ?? "",
      width: imageProp.width,
      height: imageProp.height,
    };
  });

  return (
    <div>
      <div className="grid gap-4 md:hidden md:grid-cols-2">
        {allImages.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="w-full rounded-2xl"
          />
        ))}
      </div>
      <div className="hidden md:block">
        <Gallery
          enableImageSelection={false}
          images={allImages}
          margin={10}
          rowHeight={300}
        />
      </div>
    </div>
  );
}

export default ReactGallery;
