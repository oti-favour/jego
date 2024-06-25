import { defineField, defineType } from "sanity";

export default defineType({
  name: "page",
  title: "Pages",
  type: "document",
  preview: {
    select: {
      title: "slug",
      subtitle: "title",
    },

    prepare({ title, subtitle }) {
      title = title.charAt(0).toUpperCase() + title.slice(1);
      return {
        title: title,
        subtitle: subtitle,
      };
    },
  },
  fields: [
    defineField({
      name: "slug",
      type: "string",
      title: "Slug",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required().min(20),
    }),
    defineField({
      name: "subtitle",
      type: "string",
      title: "Sub Title",
    }),
    defineField({
      name: "ctaLink",
      type: "url",
      title: "CTA Link",
    }),
    defineField({
      name: "ctaText",
      type: "string",
      title: "CTA Text",
      validation: (Rule) => Rule.max(50),
    }),
    defineField({
      name: "pageFeatures",
      type: "array",
      of: [{ type: "pageFeatures" }],
    }),
  ],
});
