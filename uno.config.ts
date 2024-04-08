// uno.config.ts
import { defineConfig, presetAttributify, presetUno } from "unocss";
import transformerCompileClass from "@unocss/transformer-compile-class";
import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
  presets: [presetAttributify(), presetUno({ dark: "class" })],
  transformers: [transformerCompileClass(), transformerDirectives()],
  shortcuts: {
    "sc-flex": "flex justify-center items-center",
    "sc-ts": "transition-all duration-300 ease",
    "sc-ly": "h-100% p-8 b-rd-4 bg-card dark:bg-dark-card",
    "sc-base": "border b-solid b-#666",
    "sc-card": "bg-card dark:bg-dark-card",
    "sc-bg": "bg-bgcolor dark:bg-dark-bgcolor",
    "sc-hover": "bg-second text-primary hover:bg-primary hover:text-second",
  },
  theme: {
    colors: {
      card: "#f5f5f5",
      bgcolor: "#dae1e7",
      primary: "#326ca3",
      second: "#d6e2ed",
      dark: {
        card: "#354e6b",
        bgcolor: "#282c34",
      },
    },
  },
});
