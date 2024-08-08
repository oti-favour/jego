import { defineField, defineType } from "sanity";
import { preview } from "sanity-plugin-icon-picker";

export default defineType({
  name: "social",
  type: "object",
  preview: {
    select: {
      title: "title",
      provider: "icon.provider",
      name: "icon.name",
    },
    prepare({ title, provider, name }) {
      const icon = { provider, name };
      return {
        title: title,
        media: preview(icon),
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
      { strict: false },
    ),
    defineField(
      {
        name: "icon",
        type: "iconPicker",
        options: {
          outputFormat: "react",
          storeSvg: true,
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
        name: "url",
        type: "url",
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
      },
      { strict: false },
    ),
  ],
});
