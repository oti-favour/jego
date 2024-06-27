import { defineField, defineType } from "sanity";

export default defineType({
  name: "video",
  type: "object",
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
        name: "videoUrl",
        type: "url",
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
      },
      { strict: false },
    ),
  ],
});
