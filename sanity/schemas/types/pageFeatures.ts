import { defineType } from "sanity";
import { preview } from "sanity-plugin-icon-picker";

export default defineType({
  name: "pageFeatures",
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
    {
      name: "icon",
      type: "iconPicker",
      options: {
        outputFormat: "react",
        storeSvg: true,
      },
    },
    {
      name: "title",
      type: "string",
    },
    {
      name: "description",
      type: "text",
    },
  ],
});
