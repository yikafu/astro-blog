// @unocss-include
// 配置文件
import type { SiteConfig, NavConfig, ProfileConfig } from "./types/config";
export const siteConfig: SiteConfig = {
  title: "Blog",
  subtitle: "Site"
};

export const navConfig: NavConfig = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Archives",
    url: "/archives",
  },
  {
    name: "Tags",
    url: "/tags",
  },
  {
    name: "About",
    url: "/about",
  }
];

export const profileConfig: ProfileConfig = {
  avatar: "https://avatars.githubusercontent.com/u/98627904?s=400&u=f482d08494cc4f0f64769ccfc049655734073673&v=4",
  name: "Yikafu",
  bio: "Who am I?",
  links: [
    {
      name: "GitHub",
      url: "https://github.com/yikafu",
      icon: "i-tabler-brand-github",
    },
    {
      name: "twitter",
      url: "https://x.com",
      icon: "i-tabler-brand-twitter",

    },
  ],
};
