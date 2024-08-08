import { defineField, defineType } from "sanity";

export default defineType({
  name: "booking",
  type: "document",
  title: "Booking Pods",
  description: "The booking pods of the site",
  preview: {
    select: {
      title: "calendlyURL",
    },
    prepare(selection) {
      return {
        title: "Booking Pod",
      };
    },
  },
  fields: [
    defineField(
      {
        name: "calendlyURL",
        type: "url",
        validation: (rule) => rule.required(),
        codegen: { required: true },
        description: "The URL to the calendly event",
      },
      {
        strict: false,
      },
    ),

    defineField(
      {
        name: "maptilerKey",
        type: "string",
        validation: (rule) => rule.required(),
        codegen: { required: true },
        description: "The MapTiler API key",
      },
      {
        strict: false,
      },
    ),
  ],
});
