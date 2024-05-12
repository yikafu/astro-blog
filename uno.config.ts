// uno.config.ts
import { defineConfig, presetAttributify, presetUno } from "unocss";
import transformerCompileClass from "@unocss/transformer-compile-class";
import transformerDirectives from "@unocss/transformer-directives";
import { presetIcons } from "unocss";
export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno({ dark: "class" }),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
        width: "24px",
        height: "24px",
      },
    }),
  ],
  transformers: [transformerCompileClass(), transformerDirectives()],
  shortcuts: {
    "sc-flex": "flex justify-center items-center",
    "sc-ly":
      "h-100% p-8 b-rd-4 bg-card dark:bg-dark-card shadow-[#00000026_0px_2px_8px]",
    "sc-base": "border b-solid b-#666",
    "sc-card": "bg-card dark:bg-dark-card shadow-[#00000026_0px_2px_8px]",
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
