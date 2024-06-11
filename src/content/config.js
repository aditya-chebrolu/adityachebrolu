import { defineCollection, z } from "astro:content";

const snippetSchema = z.object({
  description: z.union([z.string(), z.array(z.string())]),
  code: z.string(),
  codeHtml: z.optional(z.string()),
});

const sectionSchema = z.object({
  subtitle: z.string(),
  snippets: z.array(snippetSchema),
});

const postsCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    language: z.string(),
    tags: z.array(z.string()),
    sections: z.array(sectionSchema),
  }),
});

export const collections = {
  posts: postsCollection,
};
