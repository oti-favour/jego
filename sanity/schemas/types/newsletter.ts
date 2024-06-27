import { defineField, defineType } from "sanity";

export default defineType({
  name: "newsletter",
  type: "object",
  validation: (Rule) => Rule.required(),
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
        name: "description",
        type: "text",
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
      },
      {
        strict: false,
      },
    ),
    defineField(
      {
        name: "image",
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
        name: "privacyPolicyLink",
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
