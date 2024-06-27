import { defineField, defineType } from "sanity";

export default defineType({
  name: "mobileApp",
  type: "object",
  fields: [
    defineField(
      {
        name: "overview",
        type: "overview",
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
      },
      {
        strict: false,
      },
    ),
    defineField(
      {
        name: "comingSoon",
        type: "boolean",
        initialValue: false,
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
  ],
});
