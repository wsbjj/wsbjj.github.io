import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Bu Junjie",
  DESCRIPTION: "Bu Junjie 的个人网站，记录 AI Agent、全栈应用与物联网方向的项目实践。",
  AUTHOR: "Bu Junjie",
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: "项目",
  DESCRIPTION: "从公开 GitHub 仓库中选出的 AI Agent、桌面应用与全栈项目。",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "搜索",
  DESCRIPTION: "按名称、简介或技术标签搜索项目。",
}

// Links
export const LINKS: Links = [
  {
    TEXT: "首页",
    HREF: "/",
  },
  {
    TEXT: "项目",
    HREF: "/projects",
  },
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    ICON: "github",
    TEXT: "@wsbjj",
    HREF: "https://github.com/wsbjj",
  },
]
