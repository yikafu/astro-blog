// uno.config.ts
import { defineConfig, presetAttributify, presetUno } from "unocss";
import transformerCompileClass from "@unocss/transformer-compile-class";
import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
  presets: [presetAttributify(), presetUno({ dark: "class" })],
  transformers: [transformerCompileClass(), transformerDirectives()],
  rules: [
    [
      "rules-flex",
      {
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
      },
    ],
    [
      "rules-b-base",
      {
        border: "1px solid #666",
      },
    ],
    ["rules-ts", { transition: "all 0.3s ease" }],
    ["rules-ly", { "--at-apply": "h-100% p-8 b-rd-4 bg-card dark-bg-dark-card" }],
    ["rules-card", { "--at-apply": " bg-card dark:bg-dark-card" }],
    ["rules-bg", { "--at-apply": " bg-bgcolor dark:bg-dark-bgcolor" }],
    [
      "rules-hover",
      {
        "--at-apply":
          " bg-second text-primary hover:bg-primary hover:text-second",
      },
    ],
  ],
  theme: {
    colors: {
      card: "#f5f5f5",
      bgcolor: "#dae1e7",
      primary: "#326ca3",
      second: "#d6e2ed",
      "dark-bgcolor": "#282c34",
      "dark-card": "#354e6b",
    },
  },
});
