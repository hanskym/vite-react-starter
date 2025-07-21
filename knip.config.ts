import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  project: ['src/**/*.{js,jsx,ts,tsx,css,scss}'],
  ignoreDependencies: ['@react-router/node', 'isbot', 'zod', '@commitlint/cli'],
};

export default config;
