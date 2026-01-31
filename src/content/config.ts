import { defineCollection, z } from 'astro:content';

const commonSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.date().optional(),
  thumbnail: z.string().optional(),
  templateKey: z.string().optional(),
  image: z.string().optional(),
  featuredimage: z.string().optional(),
  heading: z.string().optional(),
  subheading: z.string().optional(),
  number: z.number().optional(),
  pagetype: z.array(z.string()).optional(),
  draft: z.boolean().optional(),
}).partial();

// Collection 1: Issues
const issues = defineCollection({
  type: 'content',
  schema: commonSchema,
});

// Collection 2: Pages (For Index, Contact, etc)
const pages = defineCollection({
  type: 'content',
  schema: commonSchema,
});

// Export only what we use
export const collections = {
  issues,
  pages,
};
