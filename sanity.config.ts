"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { iconPicker } from "sanity-plugin-icon-picker";
import { simplerColorInput } from "sanity-plugin-simpler-color-input";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import COLORS from "./lib/colors";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    simplerColorInput({
      defaultColorFormat: "hex",
      defaultColorList: [{ label: "Custom...", value: "custom" }, ...COLORS],
    }),
    iconPicker(),
  ],
  document: {
    newDocumentOptions: (prev, { currentUser, creationContext }) => {
      const { schemaType, type } = creationContext;

      const isDisabled =
        schemaType === "home" ||
        schemaType === "investors" ||
        schemaType === "booking" ||
        schemaType === "footer";

      if (isDisabled) {
        return [];
      }

      if (type === "global") {
        return [];
      }

      return prev;
    },
  },
});
