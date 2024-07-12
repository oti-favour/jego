import dayjs from "dayjs";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "news",
  title: "News",
  type: "document",
  preview: {
    select: {
      title: "title",
      createdAt: "createdAt",
      readMinutes: "readMinutes",
      image: "image",
    },
    prepare({ title, image, createdAt, readMinutes }) {
      return {
        title,
        media: image,
        subtitle: `${dayjs(createdAt).format(
          "MMM D, YYYY",
        )} - ${readMinutes} min read`,
      };
    },
  },
  groups: [
    {
      name: "details",
    },
    {
      name: "Meta",
    },
  ],
  fields: [
    defineField(
      {
        name: "title",
        type: "string",
        codegen: { required: true },
        validation: (rule) => rule.required(),
        group: "details",
      },
      { strict: false },
    ),
    defineField(
      {
        name: "slug",
        type: "slug",
        options: {
          source: "title",
        },
        codegen: { required: true },
        validation: (rule) => rule.required(),
        group: "details",
      },
      { strict: false },
    ),
    defineField(
      {
        name: "image",
        type: "image",
        codegen: { required: true },
        validation: (rule) => rule.required(),
        group: "details",
      },
      { strict: false },
    ),
    defineField({
      name: "newsType",
      type: "string",
      validation: (rule) => rule.required(),
      group: "details",
    }),
    defineField(
      {
        name: "content",
        type: "blockContent",
        codegen: { required: true },
        validation: (rule) => rule.required(),
        group: "details",
      },
      { strict: false },
    ),
    defineField({
      name: "summary",
      type: "text",
      group: "details",
    }),
    defineField(
      {
        name: "createdAt",
        type: "datetime",
        codegen: { required: true },
        validation: (rule) => rule.required().max(new Date().toISOString()),
        group: "Meta",
      },
      { strict: false },
    ),
    defineField({
      name: "readMinutes",
      type: "number",
      group: "details",
    }),
    defineField(
      {
        name: "author",
        type: "author",
        codegen: { required: true },
        validation: (rule) => rule.required(),
        group: "Meta",
      },
      { strict: false },
    ),
    defineField(
      {
        name: "readCount",
        type: "number",
        initialValue: 0,
        codegen: { required: true },
        validation: (rule) => rule.required(),
        group: "Meta",
      },
      { strict: false },
    ),
  ],
  initialValue: {
    readCount: 0,
  },
});
