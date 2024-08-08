import { defineField, defineType } from "sanity";

export default defineType({
  name: "intro",
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
        name: "partners",
        type: "array",
        of: [{ type: "partner" }],
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
