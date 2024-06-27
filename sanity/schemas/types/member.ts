import { defineField, defineType } from "sanity";

export default defineType({
  name: "member",
  type: "object",
  fields: [
    defineField(
      {
        name: "name",
        type: "string",
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
      },
      { strict: false },
    ),
    defineField(
      {
        name: "role",
        type: "string",
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
      },
      { strict: false },
    ),
    defineField(
      {
        name: "image",
        type: "image",
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
      },
      { strict: false },
    ),
    defineField({
      name: "bio",
      type: "text",
    }),
  ],
});
