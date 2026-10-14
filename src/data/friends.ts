export type Friend = {
  name: string;
  url: string;
  description?: string;
  /** Avatar image URL; falls back to the first letter of `name` */
  avatar?: string;
};

/**
 * 友链列表，按顺序显示。新增一项即可，例如：
 *
 * {
 *   name: "某某的博客",
 *   url: "https://example.com",
 *   description: "一句话介绍",
 *   avatar: "https://github.com/someone.png",
 * },
 */
export const friends: Friend[] = [
  {
    name: "Clairis's Blog",
    url: "https://clairis.cn",
    description: "欢迎来到 Clairis 的博客",
    avatar: "https://clairis.cn/images/avatar.jpg",
  },
  {
    name: "嘴哥",
    url: "https://mouthbig324-ai.github.io/",
    description: "旅行、影像与生活碎片",
    avatar:
      "https://mouthbig324-ai.github.io/_astro/graffiti-avatar.DiKG8znJ_Z2nUuKm.webp",
  },
];
