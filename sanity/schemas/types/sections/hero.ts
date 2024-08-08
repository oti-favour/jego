import { defineField, defineType } from "sanity";

export default defineType({
  name: "hero",
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
        name: "pageFeatures",
        type: "array",
        of: [{ type: "pageFeatures" }],
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
