import { defineField, defineType } from "sanity";

export default defineType({
  name: "gallery",
  type: "object",
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
        name: "images",
        type: "array",
        of: [{ type: "image" }],
        initialValue: [],
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
      },
      { strict: false },
    ),
    defineField(
      {
        name: "socials",
        type: "array",
        of: [{ type: "social" }],
        initialValue: [],
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
      },
      { strict: false },
    ),
  ],
});
