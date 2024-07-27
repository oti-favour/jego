import { defineField, defineType } from "sanity";

export default defineType({
  name: "customization",
  type: "object",
  preview: {
    select: {
      title: "title",
      color: "colors.0.name",
      media: "colors.0.images.0",
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: selection.color,
        media: selection.media,
      };
    },
  },
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
    defineField({
      name: "colors",
      type: "array",
      of: [
        {
          title: "Color",
          type: "object",
          fields: [
            defineField({
              name: "name",
              type: "simplerColor",
              title: "Color Name",
              options: { enableSearch: true },
            }),
            defineField({
              name: "title",
              type: "text",
            }),
            defineField({
              name: "description",
              type: "text",
            }),
            defineField({
              name: "images",
              type: "array",
              of: [{ type: "image" }],
            }),
          ],
        },
      ],
    }),
  ],
});
