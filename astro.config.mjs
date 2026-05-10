import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://apostolicinternational.com',
  output: 'static',
  integrations: [icon()],
});
