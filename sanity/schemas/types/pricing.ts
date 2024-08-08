import { defineField, defineType } from "sanity";

export default defineType({
  name: "pricing",
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
        name: "price",
        type: "number",
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
      },
      {
        strict: false,
      },
    ),
    defineField({
      name: "description",
      type: "text",
    }),
  ],
});
