import { defineField, defineType } from "sanity";

export default defineType({
  name: "faqs",
  type: "object",
  fields: [
    defineField(
      {
        name: "pageName",
        type: "string",
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
        initialValue: "FAQs",
      },
      { strict: false },
    ),
    defineField(
      {
        name: "title",
        type: "string",
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
      },
      {
        strict: false,
      },
    ),
    defineField(
      {
        name: "faqs",
        type: "array",
        of: [{ type: "faq" }],
        codegen: { required: true },
        initialValue: [],
        validation: (Rule) => Rule.unique(),
      },
      {
        strict: false,
      },
    ),
    defineField(
      {
        name: "email",
        type: "email",
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
      },
      {
        strict: false,
      },
    ),
  ],
});
