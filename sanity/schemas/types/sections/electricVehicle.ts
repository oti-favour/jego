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
        of: [{ type: "product" }],
        validation: (Rule) => Rule.required().min(1),
        codegen: { required: true },
      },
      {
        strict: false,
      },
    ),
  ],
});
