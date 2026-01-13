/**
 * Site Configuration
 *
 * This file contains all the configuration settings for the portfolio.
 * Update these values to personalize your portfolio site.
 */

import { BookOpen, FileText, CodeXml } from "@lucide/astro";
import { Code } from "astro:components";

/**
 * Social media links configuration
 */
export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  bluesky?: string;
  instagram?: string;
  youTube?: string;
  codetips?: string;
  discord?: string;
}

/**
 * Extra link configuration for FAB component
 */
export interface ExtraLink {
  /** URL or path for the link */
  link: string;
  /** Lucide icon component */
  icon: any;
  /** Tooltip label for the link */
  label: string;
}

/**
 * Extra links configuration
 */
export interface ExtraLinks {
  /** Enable or disable the FAB component */
  enable: boolean;
  /** Array of extra links to display */
  links: ExtraLink[];
}

/**
 * Sections visibility configuration
 * Control which sections appear on the index page
 */
export interface SectionsConfig {
  /** Show/hide About section */
  about: boolean;
  /** Show/hide Projects section */
  projects: boolean;
  /** Show/hide Blog section */
  blog: boolean;
  /** Show/hide Contact section */
  contact: boolean;
}

/**
 * Main site configuration interface
 */
export interface SiteConfig {
  /** Site/Portfolio name */
  name: string;
  /** Main title/headline */
  title: string;
  /** Site description for SEO and hero section */
  description: string;
  /** Path to avatar/logo image */
  avatar: string;
  /** Location/City */
  location: string;
  /** Contact email */
  email: string;
  /** Social media profile links */
  socialLinks: SocialLinks;
  /** Enable ThemeSelector (dropdown) instead of ThemeToggle (checkbox) */
  enableThemeSelector: boolean;
  /** Extra links configuration for FAB component */
  extraLinks: ExtraLinks;
  /** Sections visibility configuration (Hero is always visible) */
  sections: SectionsConfig;
}

/**
 * Site configuration object
 * Update these values to customize your portfolio
 */
export const siteConfig: SiteConfig = {
  name: "Akshat Srivastava",
  title: "Personal Website",
  description:
    "A place for me to share my projects, blog posts, and more about my journey.",
  avatar: "../assets/hero/pengu.jpg",
  location: "🇮🇳 Gurugram, India",
  email: "akshat.srivastava2255@gmail.com",
  socialLinks: {
    github: "https://github.com/bunchofcellulose",
    linkedin: "https://www.linkedin.com/in/iam-akshat-srivastava/",
    instagram: "https://www.instagram.com/bunchofcellulose",
    discord: "https://discord.gg/bV8bxvTmzU",
  },
  enableThemeSelector: true,
  extraLinks: {
    enable: false,
    links: [
      {
        link: "https://github.com/bunchofcellulose/bunchofcellulose.github.io",
        icon: CodeXml,
        label: "GitHub Repo",
      },
    ],
  },
  sections: {
    about: true,
    projects: true,
    blog: true,
    contact: true,
  },
};
