import { defineField, defineType } from "sanity";

export default defineType({
  name: "booking",
  type: "document",
  title: "Booking Pods",
  description: "The booking pods of the site",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
  ],
});
