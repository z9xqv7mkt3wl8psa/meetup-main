import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "Meetup",
  description: "Modern Next.js powered Video calling app",
  keywords: [
    "reactjs",
    "nextjs",
    "vercel",
    "react",
    "getstream",
    "stream",
    "shadcn",
    "shadcn-ui",
    "radix-ui",
    "cn",
    "clsx",
    "zoom-clone",
    "realtime-video",
    "realtime-chat",
    "live-audio",
    "live-video",
    "live-chat",
    "radix-toast",
    "lucide-react",
    "next-themes",
    "postcss",
    "prettier",
    "react-dom",
    "tailwindcss",
    "tailwindcss-animate",
    "ui/ux",
    "js",
    "ts",
    "javascript",
    "typescript",
    "eslint",
    "html",
    "css",
  ],
  authors: {
    name: "Mahitha Pandaraboina",
    url: "https://github.com/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const appConfig = {
  appName: "meetup",
} as const;

export const links = {
  sourceCode: "https://github.com/your-repo", // ← Replace with actual repo link if needed
};
