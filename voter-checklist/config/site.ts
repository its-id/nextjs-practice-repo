import { SiteConfig } from '@/types';

import { env } from '@/env.mjs';

export const siteConfig: SiteConfig = {
  name: 'Voters Checklist',
  author: 'redpangilinan',
  description: 'A simple checklist for voters.',
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'Radix UI', 'shadcn/ui'],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: 'https://its-ikd.vercel.app',
  },
  links: {
    github: 'https://github.com/nextjs-practice-repo/voter-checklist',
  },
};
