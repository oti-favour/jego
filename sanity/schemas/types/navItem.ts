import { defineField, defineType } from "sanity";

export default defineType({
  name: "navItem",
  type: "object",
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
    defineField({
      name: "links",
      type: "array",
      of: [
        defineField({
          name: "link",
          type: "object",
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
                name: "url",
                type: "string",
                validation: (Rule) => Rule.required(),
                codegen: { required: true },
              },
              {
                strict: false,
              },
            ),
          ],
        }),
      ],
    }),
  ],
});
