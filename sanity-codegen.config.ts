import { SanityCodegenConfig } from "sanity-codegen";

const config: SanityCodegenConfig = {
  schemaPath: "./sanity/schemas/index",
  outputPath: "./types/generated-types.ts",
};

export default config;
