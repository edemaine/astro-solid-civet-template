import { defineConfig } from 'astro/config'
import civetPlugin from 'vite-plugin-civet'
import solidJs from "@astrojs/solid-js"

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [civetPlugin({
      stripTypes: false,
      outputExtension: 'tsx',
      outputTransformerPlugin: 'astro:jsx',
    })]
  },
  integrations: [solidJs()]
});
