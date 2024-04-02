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
    name: "About",
    url: "/about",
  }
];

export const profileConfig: ProfileConfig = {
  avatar: "/avatar.png",
  name: "Yikafu",
  bio: "Who am I?",
  links: [
    {
      name: "GitHub",
      url: "https://github.com/yikafu",
      icon: "mdi:github",
    },
    {
      name: "twitter",
      url: "https://x.com",
      icon: "mdi:twitter",
    },
  ],
};
