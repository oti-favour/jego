import { defineField, defineType } from "sanity";

export default defineType({
  name: "overview",
  type: "object",
  fields: [
    defineField(
      {
        name: "pageName",
        type: "string",
        validation: (Rule) => Rule.required().min(3).max(100),
        codegen: { required: true },
      },
      {
        strict: false,
      },
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
        name: "description",
        type: "text",
        validation: (Rule) => Rule.required().max(400),
        codegen: { required: true },
      },
      {
        strict: false,
      },
    ),
    defineField({
      name: "cta",
      type: "url",
    }),
    defineField({
      name: "ctaText",
      type: "string",
      validation: (Rule) => Rule.max(50),
    }),
    defineField({
      name: "secondaryCta",
      type: "url",
    }),
    defineField({
      name: "secondaryCtaText",
      type: "string",
      validation: (Rule) => Rule.max(50),
    }),
  ],
});
