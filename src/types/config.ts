export type SiteConfig = {
  title: string;
  subtitle: string;
  banner?: {
    enable: boolean;
    src: string;
  };
};

export type LinkStyle = {
  name: string;
  url: string;
  icon?: string;
};

export type NavConfig = LinkStyle[];

export type ProfileConfig = {
  avatar?: string;
  name: string;
  bio?: string;
  links: LinkStyle[];
};
