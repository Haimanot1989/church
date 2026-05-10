import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://haimanot1989.github.io',
  base: '/church',
  output: 'static',
  integrations: [icon()],
});
