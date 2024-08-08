import FAQLayout from "@/components/home/FaqLayout";
import PageName from "@/components/PageName";
import { DynamicHeading, Paragraph } from "@/components/Typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Faqs } from "@/types/generated-types";
import Link from "next/link";

function FAQSection({ faqs }: { faqs: Faqs }) {
  return (
    <FAQLayout>
      <div className="flex min-h-svh w-full flex-col items-center px-4 lg:container">
        <PageName text={faqs.pageName} className="text-[#64748B]" />
        <div className="mb-8 flex w-full flex-col items-center lg:max-w-screen-md">
          <DynamicHeading
            level="p"
            className="mt-8 max-w-screen-sm text-center text-3xl leading-[1] md:mt-16 md:text-5xl lg:text-[52px]"
            text={faqs.title}
          />
          <Accordion type="single" collapsible className="my-8 w-full md:my-14">
            {faqs.faqs.map((faq, index) => (
              <AccordionItem
                key={faq._key}
                value={`item-${index}`}
                title={faq.question}
                className="[&[data-state=open]]:shadow-accordion px-4 py-4 md:px-8 [&[data-state=open]]:rounded-3xl [&[data-state=open]]:bg-white"
              >
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent className="text-[#64748B]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="text-center">
            <Paragraph className="flex flex-col text-[#475569]">
              <span>Can&apos;t find what you&apos;re looking for?</span>
              <span>Contact us here:</span>
            </Paragraph>
            <Link
              href={`mailto:${faqs.email}`}
              passHref
              className="text-[#009992] underline underline-offset-8"
            >
              {faqs.email}
            </Link>
          </div>
        </div>
      </div>
    </FAQLayout>
  );
}

export default FAQSection;
