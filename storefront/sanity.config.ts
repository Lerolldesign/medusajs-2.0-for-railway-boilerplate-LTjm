"use client"

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision"
import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { structure } from "./src/sanity/structure"

import Logo_brown_sanity from "@modules/layout/templates/logoSanity"
import { apiVersion, dataset, projectId } from "./src/sanity/env"
import { schemaTypes } from "./src/sanity/schemaTypes"

export default defineConfig({
  basePath: "/studio",
  name: "default",
  icon: Logo_brown_sanity,
  title: "La Lune Curieuse",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
