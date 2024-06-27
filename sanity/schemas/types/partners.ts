import { defineField } from "sanity";

export default defineField({
  name: "partner",
  type: "object",
  fields: [
    defineField(
      {
        name: "name",
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
        name: "logo",
        type: "image",
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
      {
        strict: false,
      },
    ),
  ],
});
