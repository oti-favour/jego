"use client";
import { sanityImageUrl } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
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

  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index: number) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

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
          onClick={handleClick}
        />

        {!!currentImage && (
          <Lightbox
            onImageLoad={() => {
              window.dispatchEvent(new Event("resize"));
            }}
            mainSrc={sanityImageUrl(currentImage)}
            mainSrcThumbnail={sanityImageUrl(currentImage)}
            nextSrc={sanityImageUrl(nextImage)}
            nextSrcThumbnail={sanityImageUrl(nextImage)}
            prevSrc={sanityImageUrl(prevImage)}
            prevSrcThumbnail={sanityImageUrl(prevImage)}
            onCloseRequest={handleClose}
            onMovePrevRequest={handleMovePrev}
            onMoveNextRequest={handleMoveNext}
          />
        )}
      </div>
    </div>
  );
}

export default ReactGallery;
