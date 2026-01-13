import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Hero singleton
const hero = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdoc,yaml}", base: "./src/content/hero" }),
  schema: ({ image }: any) =>
    z.object({
      name: z.string(),
      title: z.string(),
      description: z.string(),
      avatar: image().optional(),
      location: z.string().optional(),
      email: z.string().email().optional(),
      githubUrl: z.string().url().optional(),
      linkedinUrl: z.string().url().optional(),
      twitterUrl: z.string().url().optional(),
      blueskyUrl: z.string().url().optional(),
      instagramUrl: z.string().url().optional(),
      youtubeUrl: z.string().url().optional(),
      codetipsUrl: z.string().url().optional(),
      discordUrl: z.string().url().optional(),
    }),
});

// Projects collection
const projects = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdoc,yaml}",
    base: "./src/content/projects",
  }),
  schema: ({ image }: any) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image().optional(),
      startDate: z.coerce.date(),
      endDate: z.coerce.date().optional(),
      skills: z.array(z.string()),
      demoLink: z.string().url().optional(),
      sourceLink: z.string().url().optional(),
    }),
});

// Blog collection
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdoc,yaml}", base: "./src/content/blog" }),
  schema: ({ image }: any) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).optional(),
    }),
});

// About singleton
const about = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdoc,yaml}", base: "./src/content/about" }),
  schema: ({ image }: any) =>
    z.object({
      title: z.string(),
      photo: image().optional(),
    }),
});

export const collections = {
  hero,
  projects,
  blog,
  about,
};
