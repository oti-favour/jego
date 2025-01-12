import GalleryLayout from "@/components/home/Gallery";
import { Caption, DynamicHeading } from "@/components/Typography";
import { sanityImageUrl } from "@/lib/utils";
import { Gallery } from "@/types/generated-types";
import Image from "next/image";
import Link from "next/link";
import SVG from "react-inlinesvg";

function GallerySection({ gallery }: { gallery: Gallery }) {
  const { images, title, socials } = gallery;

  const firstTwoImages = images.slice(0, 2);

  const restOfImages = images.slice(2);
  return (
    <GalleryLayout>
      <div className="relative isolate flex min-h-svh flex-col space-y-12 px-0 py-12 lg:container md:px-4 lg:space-y-24 lg:py-24 overflow-hidden">
        <div className="flex h-full w-full flex-1 grow items-center justify-center">
          <div className="w-full space-y-12">
            <div className="relative my-32 flex items-center justify-center text-center">
              <div className="max-w-36 text-center md:max-w-screen-sm">
                <DynamicHeading
                  level="p"
                  className="text-center text-3xl leading-[1] md:text-5xl lg:text-6xl"
                >
                  {title}
                </DynamicHeading>
              </div>
              <div className="absolute left-0 top-0 -z-10 h-full w-full">
                <div className="flex h-full w-full items-center justify-center">
                  <div className="grid h-fit w-full grid-cols-2 place-content-between gap-36 overflow-clip">
                    {firstTwoImages.map((image, index) => (
                      <div key={image._key} className="relative">
                        <Image
                          src={sanityImageUrl(image)}
                          alt={image.asset._ref}
                          width={1920}
                          height={1080}
                          className={`h-full w-full max-w-36 -rotate-3 rounded-lg object-contain md:max-w-52 md:rotate-0 lg:max-w-xs ${index % 2 === 0 ? "pt-[150%] md:pt-[70%] lg:ml-16" : "] md:pb-70%[] ml-auto pb-[150%] md:pb-[100%] lg:pb-0"}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Caption className="font-gustavoBold text-base md:text-2xl lg:text-3xl">
                Socials
              </Caption>
              <div className="flex justify-center space-x-4">
                {socials.map((social) => (
                  <Link
                    key={social._key}
                    href={social.url}
                    target="_blank"
                    passHref
                    className="group flex h-14 w-14 items-center justify-center rounded-full border border-white hover:bg-white"
                    title={social.title}
                  >
                    <SVG
                      src={social.icon.svg}
                      width={100}
                      height={100}
                      className="text-white group-hover:text-black"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-auto grid h-fit w-full grid-cols-2 place-content-between gap-36 overflow-clip">
          {restOfImages.map((image, index) => (
            <div key={image._key} className="relative">
              <Image
                src={sanityImageUrl(image)}
                alt={image.asset._ref}
                width={1920}
                height={1080}
                className={`h-auto w-auto max-w-36 -rotate-12 rounded-xl object-contain md:max-w-64 md:rotate-0 lg:max-w-xs ${index % 2 === 0 ? "pt-[100%] md:pt-24 lg:ml-12" : "ml-auto pb-[100%] md:pb-24"}`}
              />
            </div>
          ))}
        </div>
      </div>
    </GalleryLayout>
  );
}

export default GallerySection;
