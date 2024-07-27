import { defineField, defineType } from "sanity";

export default defineType({
  name: "electricVehicle",
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
        name: "products",
        type: "array",
        of: [{ type: "reference", to: [{ type: "products" }] }],
        validation: (Rule) => Rule.required().min(2),
        codegen: { required: true },
      },
      {
        strict: false,
      },
    ),
  ],
});
