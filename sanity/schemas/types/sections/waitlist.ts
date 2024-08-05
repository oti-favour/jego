import { defineField, defineType } from "sanity";

export default defineType({
  name: "waitlist",
  type: "document",
  fields: [
    defineField(
      {
        name: "email",
        type: "email",
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
      },
      {
        strict: false,
      },
    ),
  ],
  preview: {
    select: {
      title: "email",
      subtitle: "_createdAt",
    },
  },
});
