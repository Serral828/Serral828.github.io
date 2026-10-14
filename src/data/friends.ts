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
export const friends: Friend[] = [];
