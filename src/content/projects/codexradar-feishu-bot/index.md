---
title: "CodexRadar Feishu Bot"
summary: "定时读取 Codex 雷达公开数据，生成模型智力、性价比与任务推荐卡片并推送到飞书群。"
date: "2026-07-24"
image: "/assets/projects/codexradar-feishu-bot.png"
imageAlt: "CodexRadar Feishu Bot GitHub 仓库预览"
tags: ["Python", "Feishu", "Automation"]
repoUrl: "https://github.com/wsbjj/codexradar-feishu-bot"
---

该机器人按周期读取 Codex 雷达公开 JSON，计算模型排名和推荐，并通过飞书自定义机器人发送卡片。

## 项目重点

- 主备数据源自动切换。
- 输出智力、性价比及复杂/日常任务推荐。
- 支持排名异动提醒与定时简报。
- 提供 Docker 部署和本地调试方式。
