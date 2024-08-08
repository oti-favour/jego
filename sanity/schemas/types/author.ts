import { defineField, defineType } from "sanity";

export default defineType({
  name: "author",
  type: "object",
  fields: [
    defineField(
      {
        name: "name",
        type: "string",
        codegen: { required: true },
        validation: (rule) => rule.required(),
      },
      {
        strict: false,
      },
    ),
    defineField(
      {
        name: "image",
        type: "image",
        codegen: { required: true },
        validation: (rule) => rule.required(),
      },
      {
        strict: false,
      },
    ),
    defineField(
      {
        name: "role",
        type: "string",
        codegen: { required: true },
        validation: (rule) => rule.required(),
      },
      {
        strict: false,
      },
    ),
    defineField({
      name: "email",
      type: "email",
    }),
    defineField({
      name: "bio",
      type: "text",
    }),
  ],
});
