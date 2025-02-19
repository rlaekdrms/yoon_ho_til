import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "ko-KR",

  title: "윤호의 TIL",
  description: "윤호 블로그",
  base: "yoon_ho_til",

  theme: defaultTheme({
    logo: "https://mblogthumb-phinf.pstatic.net/20151202_260/jju423_1449058382856rckgl_PNG/qqjzZi7ajs.png?type=w800",

    navbar: ["/", "/til/"],
    sidebar: {
      "/til/": [
        {
          text: "TIL프로젝트",
          children: [
            "README.md",
            "2025-01-09.md",
            "2025-01-14.md",
            "2025-01-20.md",
            "2025-01-24.md",
            "2025-02-03.md",
            "2025-02-05.md",
            "2025-02-10.md",
            "2025-02-12.md",
            "2025-02-17.md",
          ],
        },
      ],
    },
  }),

  bundler: viteBundler(),
});
