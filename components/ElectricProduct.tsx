import { getProductFromRef } from "@/hooks/getData";
import { sanityImageUrl } from "@/lib/utils";
import { Product, Products, SanityReference } from "@/types/generated-types";
import Image from "next/image";
import Link from "next/link";
import { CTAPlain } from "./CTA";
import { Caption, Paragraph } from "./Typography";

async function ElectricProductItem({
  productsRef,
}: {
  productsRef: SanityReference<Products>[];
}) {
  const products = await Promise.all(
    productsRef.map(async (ref) => {
      return (await getProductFromRef(ref._ref)) as Products;
    }),
  );

  if (!products || products.length < 2) {
    return null;
  }

  const [first, second] = products;

  return (
    <div className="h-full w-full">
      <div className="grid place-items-center gap-8 py-12 lg:grid-cols-2 lg:gap-16">
        <div className="group relative h-fit w-fit">
          {first.product.images[0] && (
            <Image
              src={sanityImageUrl(first.product.images[0])}
              alt={first.product.images[0].asset._ref}
              width={1920}
              height={1080}
              className="max-w-full md:max-w-screen-sm lg:h-full lg:w-full lg:max-w-full"
            />
          )}
          <div className="absolute left-0 top-0 h-full w-full bg-black/50 text-white opacity-0 transition-all group-hover:opacity-100">
            <div className="flex h-full items-end px-6 pb-6">
              <ProductInfo product={first.product} slug={first.slug.current} />
            </div>
          </div>
        </div>

        <div className="group relative w-fit">
          {second.product.images[0] && (
            <Image
              src={sanityImageUrl(second.product.images[0])}
              alt={second.product.images[0].asset._ref}
              width={1920}
              height={1080}
              className="lg:-pt-12 aspect-square max-w-full md:max-w-screen-sm lg:aspect-auto lg:max-w-full"
            />
          )}
          <div className="absolute left-0 top-0 h-full w-full bg-black/50 text-white opacity-0 transition-all group-hover:opacity-100">
            <div className="flex h-full items-end px-6 pb-6">
              <ProductInfo
                product={second.product}
                slug={second.slug.current}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductInfo({
  product,
  slug,
}: {
  product: Partial<Product>;
  slug: string;
}) {
  const { title, description, cta, ctaText } = product;
  return (
    <div className="isolate space-y-4">
      <Caption className="font-gustavo text-3xl font-bold normal-case lg:text-4xl">
        {title}
      </Caption>
      <Paragraph className="truncate3">{description}</Paragraph>
      <CTAPlain
        className="z-[50] bg-brightTurquoise px-5 py-3 font-product text-sm lg:text-lg"
        href={cta || ""}
        text={ctaText || ""}
      />
      <Link
        href={`/products/${slug}`}
        className="absolute top-0 -z-50 h-full w-full"
      />
    </div>
  );
}

export default ElectricProductItem;
