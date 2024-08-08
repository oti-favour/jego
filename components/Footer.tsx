import { sanityImageUrl } from "@/lib/utils";
import { Footer } from "@/types/generated-types";
import Link from "next/link";
import Logo from "./Logo";
import { Paragraph } from "./Typography";

function FooterSection({ footer }: { footer: Footer }) {
  const { logo, description, navItems, ...rest } = footer;

  return (
    <div className="relative isolate overflow-clip bg-black text-white">
      <div className="flex flex-col justify-evenly gap-8 px-4 pt-12 lg:flex-row lg:justify-around">
        <div className="w-full space-y-4 lg:w-auto">
          <Logo src={sanityImageUrl(logo)} />
          <Paragraph>{description}</Paragraph>
        </div>
        <NavItems navItems={navItems} />
      </div>

      <div className="mt-36 flex w-fit flex-col gap-8 px-4 pb-12 lg:mt-96 lg:w-full lg:flex-row lg:items-center lg:justify-around">
        <ul className="flex gap-8">
          <li>
            <Link href={rest.privacyPolicyURL} passHref>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href={rest.termsAndConditionsURL}>Terms</Link>
          </li>
        </ul>

        <Paragraph className="whitespace-pre-line text-center">
          {rest.copyrightInfo}
        </Paragraph>

        <Link
          href={rest.builtByURL}
          className="flex max-w-fit items-center rounded-full px-6 py-2"
          id="builtBy"
        >
          {rest.builtByTitle}
        </Link>
      </div>
      <span className="pointer-events-none absolute bottom-0 left-0 -z-10 select-none overflow-clip font-dela text-[20rem] leading-[1] text-white/5 lg:text-[25rem]">
        JéGO
      </span>
    </div>
  );
}

function NavItems({ navItems }: { navItems: Footer["navItems"] }) {
  return (
    <div className="flex w-full flex-wrap gap-8 md:gap-0 lg:w-auto lg:gap-16">
      {navItems.map((navItem) => {
        return (
          <ul key={navItem._key} className="basis-1/2 lg:basis-auto">
            <li className="space-y-4 md:mt-8 lg:mt-0">
              <span className="font-bold uppercase">{navItem.title}</span>
              <ul className="space-y-4">
                {navItem.links?.map((link) => {
                  return (
                    <li key={link._key}>
                      <Link href={link.url}>{link.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default FooterSection;
