import { defineCollection, z } from 'astro:content';

const commonSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.date().optional(),
  
  // Images
  thumbnail: z.string().optional(),
  image: z.string().optional(),
  featuredimage: z.string().optional(),
  
  // Magazine Covers (The Fix)
  front_cover: z.string().optional(),
  back_cover: z.string().optional(),

  // Template & Layout
  templateKey: z.string().optional(),
  heading: z.string().optional(),
  subheading: z.string().optional(),
  number: z.number().optional(),
  pagetype: z.array(z.string()).optional(),
  draft: z.boolean().optional(),

  // CSS Injection Fields (Required for Issue Styling)
  customClass: z.string().optional(),
  customCSS: z.string().optional(),
  issueGlobalCSS: z.string().optional(),
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
