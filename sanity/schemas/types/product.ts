import { defineField, defineType } from "sanity";

export default defineType({
  name: "products",
  type: "document",
  preview: {
    select: {
      title: "product.title",
      media: "product.heroImage",
    },

    prepare(selection) {
      return {
        title: selection.title,
        media: selection.media,
      };
    },
  },
  fields: [
    defineField(
      {
        name: "slug",
        type: "slug",
        options: {
          source: "product.title",
          maxLength: 96,
        },
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
      },
      {
        strict: false,
      },
    ),
    defineField(
      {
        name: "product",
        type: "product",
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
      },
      {
        strict: false,
      },
    ),
  ],
});
