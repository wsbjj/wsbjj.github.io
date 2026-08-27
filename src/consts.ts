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
  DESCRIPTION: "完整收录 wsbjj 当前公开的 GitHub 仓库，包括原创项目与公开 Fork。",
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
