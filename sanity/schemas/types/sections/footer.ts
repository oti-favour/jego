import { defineField, defineType } from "sanity";

export default defineType({
  name: "footer",
  type: "document",
  title: "Footer",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
      readOnly: true,
      initialValue: "Footer",
    }),
    defineField(
      {
        name: "logo",
        type: "image",
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
        name: "navItems",
        type: "array",
        of: [
          {
            type: "navItem",
          },
        ],
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
      },
      {
        strict: false,
      },
    ),
    defineField(
      {
        name: "privacyPolicyURL",
        type: "url",
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
      },
      {
        strict: false,
      },
    ),
    defineField(
      {
        name: "termsAndConditionsURL",
        type: "url",
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
      },
      {
        strict: false,
      },
    ),
    defineField(
      {
        name: "copyrightInfo",
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
        name: "builtByTitle",
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
        name: "builtByURL",
        type: "url",
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
      },
      {
        strict: false,
      },
    ),
  ],
});
