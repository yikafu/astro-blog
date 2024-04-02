import { defineConfig } from "astro/config";
import icon from "astro-icon";
import UnoCSS from 'unocss/astro'
// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: false
    }),
    icon({
      include: {
        mdi: ["*"],
        'material-symbols': ["*"],
      },
    }),
  ],
});
