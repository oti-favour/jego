import { defineField, defineType } from "sanity";

export default defineType({
  name: "investors",
  type: "document",
  title: "Investors Page",
  preview: {
    select: {
      media: "home.image",
    },
    prepare({ media }) {
      return {
        title: "Investors Page",
        media,
      };
    },
  },
  groups: [
    { name: "home" },
    { name: "news" },
    { name: "finances" },
    { name: "reports" },
    { name: "security" },
  ],
  fields: [
    defineField(
      {
        name: "password",
        type: "string",
        validation: (Rule) => Rule.required().min(5).max(5),
        group: "security",
        description: "Password for the investors page.",
        codegen: { required: true },
      },
      {
        strict: false,
      },
    ),
    defineField({
      name: "passwordEnquiryEmail",
      description: "Email address to send password enquiries to",
      type: "email",
      validation: (Rule) => Rule.required(),
      group: "security",
    }),
    defineField(
      {
        name: "home",
        type: "investorsHome",
        group: "home",
        validation: (Rule) => Rule.required(),
        description: "Overview of the investors page.",
        codegen: { required: true },
      },
      {
        strict: false,
      },
    ),
    defineField(
      {
        name: "reports",
        type: "object",
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
        fields: [
          defineField(
            {
              name: "title",
              type: "string",
              codegen: { required: true },
              validation: (Rule) => Rule.required(),
            },
            {
              strict: false,
            },
          ),
          defineField(
            {
              name: "description",
              type: "text",
              codegen: { required: true },
              validation: (Rule) => Rule.required(),
            },
            {
              strict: false,
            },
          ),
        ],
        group: "reports",
      },
      {
        strict: false,
      },
    ),
    defineField(
      {
        name: "news",
        type: "array",
        of: [{ type: "reference", weak: true, to: [{ type: "news" }] }],
        group: "news",
        description:
          "Select news articles to display on the investors page, in order of importance.",
        to: { type: "news" },
        codegen: { required: true },
        validation: (Rule) => Rule.required().unique(),
      },
      {
        strict: false,
      },
    ),
  ],
});
