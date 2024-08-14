import { client } from "@/sanity/lib/client";
import sanityIMageBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sanityImageUrl(image: SanityImageSource) {
  const builder = sanityIMageBuilder(client);
  return builder.image(image).url();
}

export function ScrollToElement({ hash }: { hash: string }) {
  try {
    const element = document.querySelector(hash.replace("/", ""));

    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY,
        behavior: "smooth",
      });
    }
  } catch (error) {}
}
