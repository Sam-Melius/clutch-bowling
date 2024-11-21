import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { apiVersion, dataset, projectId } from "./sanity/env";  // Import once from env
import { schema } from "./sanity/schema";  // Import once from schema

export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  schema,
  apiVersion,
  plugins: [visionTool(), structureTool(),],
});
