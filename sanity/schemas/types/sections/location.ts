import { defineField, defineType } from "sanity";

export default defineType({
  name: "locations",
  type: "document",
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
        name: "address",
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
        name: "latitude",
        type: "number",
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
      },
      {
        strict: false,
      },
    ),
    defineField(
      {
        name: "longitude",
        type: "number",
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
        description: "Image of the location, this will be used as a thumbnail",
        codegen: { required: true },
      },
      {
        strict: false,
      },
    ),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField(
      {
        name: "products",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              defineField(
                {
                  name: "product",
                  type: "reference",
                  to: [{ type: "products" }],
                  validation: (Rule) => Rule.required(),
                  codegen: { required: true },
                },
                {
                  strict: false,
                },
              ),
              defineField(
                {
                  name: "comingSoon",
                  type: "boolean",
                  initialValue: false,
                  validation: (Rule) => Rule.required(),
                  codegen: { required: true },
                },
                {
                  strict: false,
                },
              ),
            ],
          },
        ],
        validation: (Rule) => Rule.required(),
        description: "Vehicle models available at this location",
        codegen: { required: true },
      },
      {
        strict: false,
      },
    ),
  ],
});
