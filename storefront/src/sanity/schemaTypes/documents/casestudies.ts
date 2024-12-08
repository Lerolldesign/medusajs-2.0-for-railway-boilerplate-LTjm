import { DocumentTextIcon } from "@sanity/icons"

import { defineField, defineType } from "sanity"

export default defineType({
  name: "galerie",
  title: "Casestudies",
  icon: DocumentTextIcon,
  type: "document",
  groups: [
    {
      name: "seo",
      title: "seo",
    },
    {
      name: "images",
      title: "Images de la galerie",
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Cela génére l'url d'accès au casestudy",
      options: {
        source: "title",
        maxLength: 96,
        isUnique: (value: any, context: any) =>
          context.defaultIsUnique(value, context),
      },
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Date de la prise de vue",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "excerpt",
      title: "Extrait",
      type: "text",
      validation: (rule: any) => rule.max(200).error("Max 200 characters"),
    }),
    defineField({
      name: "categorie",
      title: "Categorie",
      type: "text",
      validation: (rule: any) => rule.max(200).error("Max 200 characters"),
    }),
    defineField({ name: "link", title: "Lien", type: "string" }),
    defineField({
      name: "body",
      title: "Contenu",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [{ type: "text", name: "alt", title: "Alt" }],
        },
      ],
    }),
    defineField({
      name: "image1",
      title: "Photo miniature & page",
      type: "image",
      group: "images",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "image2",
      title: "image2",
      type: "image",
      group: "images",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "image3",
      title: "image3",
      type: "image",
      group: "images",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "image4",
      title: "image4",
      type: "image",
      group: "images",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "image5",
      title: "image5",
      type: "image",
      group: "images",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "image6",
      title: "image6",
      type: "image",
      group: "images",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image1",
    },
    prepare({ title, media }: { title: string; media: any }) {
      return { title, media }
    },
  },
})
