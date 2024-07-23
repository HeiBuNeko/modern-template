import { appTools, defineConfig } from '@modern-js/app-tools';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
  },
  server: {
    ssr: true,
  },
  plugins: [
    appTools({
      bundler: 'experimental-rspack',
    }),
  ],
});
