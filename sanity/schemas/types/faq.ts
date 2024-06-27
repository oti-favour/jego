import { defineField, defineType } from "sanity";

export default defineType({
  name: "faq",
  type: "object",
  fields: [
    defineField(
      {
        name: "question",
        type: "string",
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
      },
      { strict: false },
    ),
    defineField(
      {
        name: "answer",
        type: "text",
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
      },
      { strict: false },
    ),
  ],
});
