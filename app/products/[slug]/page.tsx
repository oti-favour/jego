import GoBack from "@/components/GoBack";
import ReactGallery from "@/components/ReactGallery";
import { Caption, DynamicHeading, Paragraph } from "@/components/Typography";
import WaitlistDialog from "@/components/WaitlistForm";
import { getProductsFromSlug } from "@/hooks/getData";
import { cn, sanityImageUrl } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import "react-image-lightbox/style.css";

async function page({ params: { slug } }: { params: { slug: string } }) {
  const { product } = (await getProductsFromSlug(slug)) || {};

  if (!product) {
    return notFound();
  }

  return (
    <div className="min-h-svh w-full bg-[#F7F7F7]">
      <div className="relative isolate min-w-full">
        <GoBack
          href="/"
          className="absolute left-[20%] top-12 z-50 bg-[#F1F5F9]"
        />
        <Image
          src={sanityImageUrl(product.heroImage)}
          alt={product.heroImage.asset._ref}
          width={1920}
          height={1080}
          className="aspect-[16/5] max-w-full object-cover"
        />
        <div className="absolute top-0 h-full w-full bg-gradient-to-t from-[#F7F7F7] via-[#F7F7F7]/10 to-transparent"></div>
      </div>
      <div className="px-4 lg:container">
        <div className="flex w-full flex-col items-center space-y-6 md:space-y-12">
          <div className="mt-6 flex w-full items-center justify-between md:mt-12">
            <DynamicHeading
              level="h1"
              className="font-gustavoBold text-2xl normal-case md:text-5xl"
            >
              {product.title}
            </DynamicHeading>
            <WaitlistDialog product={product} />
          </div>

          <div className="min-w-full rounded-3xl bg-white p-4 shadow-productDetail lg:p-12">
            <div className="grid space-y-6 divide-y">
              <Section title="description">
                <Paragraph className="mt-2 w-full min-w-full whitespace-pre-line font-product text-[#475569] md:min-w-full">
                  {product.description}
                </Paragraph>
              </Section>
              <Section title="pricing">
                <ul className="space-y-2 md:max-w-fit">
                  {product?.pricing?.map((price, index) => (
                    <li key={index} className="grid grid-cols-2 gap-4 md:gap-8">
                      <Paragraph className="whitespace-nowrap">
                        {price.title}
                      </Paragraph>
                      <Paragraph className="w-full min-w-full whitespace-pre-line font-productBold text-black md:min-w-full">
                        <span>$</span>
                        <span>{price.price}</span>
                      </Paragraph>
                    </li>
                  ))}
                </ul>
              </Section>
              <Section title="specs">
                <ul className="grid gap-8 lg:grid-cols-2 lg:gap-4">
                  {product?.specs?.map((spec, index) => (
                    <li
                      key={index}
                      className="grid grid-cols-[1fr_auto] gap-4 md:grid-cols-2 md:gap-8"
                    >
                      <div className="flex items-center gap-2">
                        <Check className="h-6 w-6 text-[#15803D]" />
                        <Paragraph className="whitespace-nowrap font-productBold text-black">
                          {spec.title}
                        </Paragraph>
                      </div>
                      <Paragraph className="w-full min-w-full whitespace-pre-line font-product text-[#475569] md:min-w-full">
                        {spec.description}
                      </Paragraph>
                    </li>
                  ))}
                </ul>
              </Section>
              <Section title={product.customization.title}>
                <Paragraph className="mt-2 w-full max-w-full whitespace-pre-line font-product text-[#475569] md:max-w-full">
                  {product.customization.description}
                </Paragraph>
                <div className="mt-4">
                  <Caption className="font-gustavoBold text-black">
                    Colors
                  </Caption>
                  <div className="mt-2 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
                    {product.customization.colors?.map((color, index) => {
                      const { name } = color;
                      return (
                        <div key={index} className="flex flex-col space-y-2">
                          <div className="space-y-2">
                            <div
                              className={cn("h-44 w-full rounded-lg")}
                              style={{ backgroundColor: name?.value }}
                            />
                            <Caption className="font-productBold text-black">
                              {color.title}
                            </Caption>
                          </div>
                          <Paragraph className="mt-2 w-full max-w-full whitespace-pre-line font-product text-sm text-[#64748B] md:max-w-full md:text-sm">
                            {color.description}
                          </Paragraph>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Section>
              <Section title="images">
                <ReactGallery images={product.images} />
              </Section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full pt-4">
      <Caption className="font-gustavoBold">{title}</Caption>
      <div className="mt-2 w-full min-w-full whitespace-pre-line font-product text-[#475569] md:min-w-full">
        {children}
      </div>
    </div>
  );
}

export default page;
