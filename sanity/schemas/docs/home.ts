import { defineField, defineType } from "sanity";

export default defineType({
  name: "home",
  type: "document",
  title: "Home Page",
  description: "The homepage of the site",
  groups: [
    { name: "hero", default: true },
    { name: "newsletter" },
    { name: "intro" },
    { name: "powerPod" },
    { name: "jegoPod" },
    { name: "electricVehicles" },
    { name: "mobileApp" },
    { name: "about" },
    { name: "faqs" },
    { name: "gallery" },
  ],
  preview: {
    select: {
      media: "about.image",
    },
    prepare: ({ media }) => ({
      title: "Home Page",
      media,
    }),
  },
  fields: [
    defineField(
      {
        name: "hero",
        type: "hero",
        group: "hero",
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
      },
      {
        strict: false,
      },
    ),
    defineField(
      {
        name: "newsletter",
        type: "newsletter",
        group: "newsletter",
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
      },
      {
        strict: false,
      },
    ),
    defineField(
      {
        name: "intro",
        type: "intro",
        group: "intro",
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
      },
      {
        strict: false,
      },
    ),
    defineField(
      {
        name: "powerPod",
        type: "powerPod",
        group: "powerPod",
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
      },
      {
        strict: false,
      },
    ),
    defineField(
      {
        name: "jegoPod",
        type: "jegoPod",
        group: "jegoPod",
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
      },
      {
        strict: false,
      },
    ),
    defineField(
      {
        name: "electricVehicles",
        type: "electricVehicle",
        group: "electricVehicles",
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
      },
      {
        strict: false,
      },
    ),
    defineField(
      {
        name: "mobileApp",
        type: "mobileApp",
        group: "mobileApp",
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
      },
      {
        strict: false,
      },
    ),
    defineField(
      {
        name: "about",
        type: "about",
        group: "about",
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
      },
      {
        strict: false,
      },
    ),
    defineField(
      {
        name: "faqs",
        type: "faqs",
        group: "faqs",
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
      },
      {
        strict: false,
      },
    ),
    defineField(
      {
        name: "gallery",
        type: "gallery",
        group: "gallery",
        validation: (Rule) => Rule.required(),
        codegen: { required: true },
      },
      {
        strict: false,
      },
    ),
  ],
});
