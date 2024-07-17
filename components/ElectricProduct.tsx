import { sanityImageUrl } from "@/lib/utils";
import { Product } from "@/types/generated-types";
import Image from "next/image";
import { CTAPlain } from "./CTA";
import { Caption, Paragraph } from "./Typography";

function ElectricProductItem({ product }: { product: Product }) {
  const { images, ...rest } = product;

  const [firstImage, secondImage] = images || [null, null];

  return (
    <div className="h-full w-full">
      <div className="grid place-items-center gap-8 py-12 lg:grid-cols-2 lg:gap-16">
        <div className="group relative h-fit w-fit">
          {firstImage && (
            <Image
              src={sanityImageUrl(firstImage)}
              alt={firstImage.asset._ref}
              width={1920}
              height={1080}
              className="max-w-full md:max-w-screen-sm lg:h-full lg:w-full lg:max-w-full"
            />
          )}
          <div className="absolute left-0 top-0 h-full w-full bg-black/50 text-white opacity-0 transition-all group-hover:opacity-100">
            <div className="flex h-full items-end px-6 pb-6">
              <ProductInfo product={rest} />
            </div>
          </div>
        </div>

        <div className="w-fit">
          {secondImage && (
            <Image
              src={sanityImageUrl(secondImage)}
              alt={secondImage.asset._ref}
              width={1920}
              height={1080}
              className="aspect-square max-w-full md:max-w-screen-sm lg:-mt-12 lg:aspect-auto lg:max-w-full"
            />
          )}
        </div>
      </div>
    </div>
  );
}

function ProductInfo({ product }: { product: Partial<Product> }) {
  const { title, description, cta, ctaText } = product;
  return (
    <div className="space-y-4">
      <Caption className="font-gustavo text-3xl font-bold normal-case lg:text-4xl">
        {title}
      </Caption>
      <Paragraph className="">{description}</Paragraph>
      <CTAPlain
        className="bg-brightTurquoise px-5 py-3 font-product text-sm lg:text-lg"
        href={cta || ""}
        text={ctaText || ""}
      />
    </div>
  );
}

export default ElectricProductItem;
