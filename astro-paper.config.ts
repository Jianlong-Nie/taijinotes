import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
    site: {
    url: "https://yinhem.com/",
    title: "小聂｜陈氏太极拳学习笔记",
    description: "记录陈氏太极拳套路、缠丝功、瓦楞掌、推手、拳理心得与日常练功复盘，纯个人习武随笔资料库。",
    author: "小聂",
    profile: "https://jianlongnie.com/", // 个人主页，没有可留空
    ogImage: "taiji-cover.jpg", // 替换成太极拳封面图，放到public目录
    lang: "zh", // 全站中文
    timezone: "Asia/Shanghai", // 中国时区
    dir: "ltr",
  },
  posts: {
    perPage: 6,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/Jianlong-Nie/taijinotes/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/satnaing/astro-paper" },
    { name: "x",        url: "https://x.com/username" },
    { name: "linkedin", url: "https://www.linkedin.com/in/username/" },
    { name: "mail",     url: "mailto:yourmail@gmail.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});