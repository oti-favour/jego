import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  type: "object",
  fields: [
    defineField(
      {
        name: "overview",
        type: "overview",
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
        name: "Members",
        type: "array",
        of: [{ type: "member" }],
        codegen: { required: true },
        initialValue: [],
        validation: (Rule) => Rule.unique(),
      },
      {
        strict: false,
      },
    ),
  ],
});
