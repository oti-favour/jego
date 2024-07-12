import { defineField, defineType } from "sanity";

export default defineType({
  name: "investorsHome",
  type: "object",
  fields: [
    defineField(
      {
        name: "image",
        type: "image",
        description: "Main Image to display on the investors page.",
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
      },
      {
        strict: false,
      },
    ),
    defineField(
      {
        name: "overview",
        type: "overview",
        description: "Overview of the investors page.",
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
      },
      {
        strict: false,
      },
    ),
  ],
});
