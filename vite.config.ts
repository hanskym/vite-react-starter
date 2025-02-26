import { defineConfig } from 'vite';

import { reactRouter } from '@react-router/dev/vite';
import { visualizer } from 'rollup-plugin-visualizer';
import checker from 'vite-plugin-checker';
import { VitePWA, type VitePWAOptions } from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths';

const pwaOptions: Partial<VitePWAOptions> = {
  registerType: 'autoUpdate',
  manifest: {
    name: 'Vite React Starter',
    short_name: 'vite-react-starter',
    description: 'A Vite starter template for React with PWA.',
    lang: 'en',
    dir: 'ltr',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    prefer_related_applications: false,
    icons: [
      {
        src: '/vite.svg',
        sizes: '48x48 72x72 96x96 128x128 256x256',
        purpose: 'any',
      },
    ],
  },
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    reactRouter(),
    checker({
      typescript: true,
      // ! Incompatible with eslint@9 - https://github.com/fi3ework/vite-plugin-checker/issues/320
      //   eslint: {
      //     useFlatConfig: true,
      //     lintCommand: 'eslint .',
      //   },
    }),
    tsconfigPaths(),
    VitePWA(pwaOptions),
    visualizer(),
  ],
});
