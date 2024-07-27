import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  type: "object",
  fields: [
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
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
      },
      {
        strict: false,
      },
    ),
    defineField(
      {
        name: "heroImage",
        type: "image",
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
      },
      {
        strict: false,
      },
    ),

    defineField({
      name: "price",
      type: "number",
    }),
    defineField(
      {
        name: "images",
        type: "array",
        of: [{ type: "image" }],
        validation: (Rule) => Rule.required().min(2),
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
    defineField(
      {
        name: "pricing",
        type: "array",
        of: [{ type: "pricing" }],
        validation: (Rule) => Rule.required().min(1),
        codegen: { required: true },
      },
      {
        strict: false,
      },
    ),
    defineField(
      {
        name: "specs",
        type: "array",
        of: [{ type: "specs" }],
        validation: (Rule) => Rule.required().min(2),
      },
      {
        strict: false,
      },
    ),
    defineField(
      {
        name: "customization",
        type: "customization",
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
      },
      {
        strict: false,
      },
    ),
  ],
});
