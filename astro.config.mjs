// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";

// 1. Define your URLs
const GITHUB_URL = 'https://yourusername.github.io'; // Replace with your real GitHub URL
const VERCEL_URL = 'https://bunchofcells.vercel.app';

// 2. Logic to pick the right one
// Vercel automatically sets process.env.VERCEL to '1' during build
const isVercel = process.env.VERCEL === '1';
const site = isVercel ? VERCEL_URL : GITHUB_URL;

// https://astro.build/config
export default defineConfig({
  site: site, // Apply the dynamic URL

  integrations: [react(), markdoc()],

  vite: {
    plugins: [tailwindcss()],
  },

  output: "static",
});