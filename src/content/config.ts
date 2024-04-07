import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string(),
    tags: z.array(z.string()).optional(),
    heroImage: z.string().optional(),
  }),
});
export const collections = {
  posts: postsCollection,
};
