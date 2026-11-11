import { defineCollection, z } from 'astro:content';

const dispatches = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.string().or(z.date()),
    defcon: z.string().default('DEFCON 3'),
    theater: z.string(),
    pantoneColor: z.string(),
    summary: z.string(),
  }),
});

export const collections = {
  dispatches,
};
