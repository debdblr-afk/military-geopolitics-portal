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

const weapons = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    origin: z.string(),
    rangeKm: z.number(),
    machSpeed: z.number(),
    profile: z.string(),
    guidance: z.string(),
    hook: z.string(),
  }),
});

const naval = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    navy: z.string(),
    category: z.string(),
    disp: z.string(),
    vls: z.string(),
    sensors: z.string(),
    propulsion: z.string(),
  }),
});

export const collections = {
  dispatches,
  weapons,
  naval,
};
