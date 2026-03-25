import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  project: ['src/**/*.{js,jsx,ts,tsx,css,scss}'],
  ignoreDependencies: ['zod'],
};

export default config;
