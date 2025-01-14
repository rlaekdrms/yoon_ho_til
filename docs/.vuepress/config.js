import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "en-US",

  title: "윤호의 TIL",
  description: "윤호 블로그",

  theme: defaultTheme({
    logo: "https://mblogthumb-phinf.pstatic.net/20151202_260/jju423_1449058382856rckgl_PNG/qqjzZi7ajs.png?type=w800",

    navbar: ["/", "/til/"],
    sidebar: {
      "/til/": [
        {
          text: "TIL프로젝트",
          children: ["README.md", "2025-01-09.md", "2025-01-14.md"],
        },
      ],
    },
  }),

  bundler: viteBundler(),
});
