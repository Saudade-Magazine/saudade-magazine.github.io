import { defineCollection, z } from 'astro:content';

const commonSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.date().optional(),
  thumbnail: z.string().optional(),
  templateKey: z.string().optional(),
  // Add other fields as discovered
  image: z.string().optional(),
  featuredimage: z.string().optional(),
  heading: z.string().optional(),
  subheading: z.string().optional(),
  number: z.number().optional(),
  pagetype: z.array(z.string()).optional(),
  // Provision for Git push Draft Posts
  draft: z.boolean().optional(),
}).partial();

const issues = defineCollection({
  type: 'content',
  schema: commonSchema,

const pages = defineCollection({
  type: 'content',
  schema: commonSchema,
});

export const collections = {
  issues,
  pages,
};
