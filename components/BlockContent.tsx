import { sanityImageUrl } from "@/lib/utils";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

function BlockContent({ value }: { value: any }) {
  return <PortableText value={value} components={RichTextComponent} />;
}

export default BlockContent;

export const RichTextComponent: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative mx-auto my-5 h-96 w-full">
          <Image
            className="object-contain"
            src={sanityImageUrl(value)}
            fill
            alt="..."
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => {
      return (
        <ul className="ml-10 list-disc space-y-2 py-5 sm:space-y-3">
          {children}
        </ul>
      );
    },
    number: ({ children }: any) => {
      return (
        <ul className="ml-10 list-decimal space-y-2 py-5 sm:space-y-3">
          {children}
        </ul>
      );
    },
  },
  block: {
    normal: ({ children }: any) => (
      <p className="my-2 text-base md:my-5">{children}</p>
    ),
    h1: ({ children }: any) => (
      <h1 className="my-3 text-2xl font-semibold leading-tight sm:text-3xl">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="my-3 text-2xl font-semibold leading-tight md:my-5">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="my-3 text-xl font-semibold leading-tight md:my-5">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="my-3 text-xl font-semibold leading-tight md:my-5">
        {children}
      </h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="my-3 text-lg font-semibold leading-tight md:my-5">
        {children}
      </h5>
    ),
    h6: ({ children }: any) => (
      <h6 className="text-md my-3 font-semibold leading-tight md:my-5">
        {children}
      </h6>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="mt-4 border-l-4 border-gray-400 pl-4 italic text-gray-600 sm:mt-6 md:mt-8">
        {children}
      </blockquote>
    ),

    customHeading: ({ children }: any) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          target="_blank"
          className="text-blue-700 hover:text-blue-900"
        >
          {children}
        </Link>
      );
    },
  },
  hardBreak: ({ children }: any) => {
    return <span className="space-y-1">{children}</span>;
  },
};
