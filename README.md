# Bu Junjie 的个人网站

这是 [wsbjj.github.io](https://wsbjj.github.io/) 的源码仓库，用于展示个人介绍与全部公开 GitHub 仓库。

## 技术栈

- Astro
- TypeScript
- Tailwind CSS
- SolidJS
- GitHub Pages

## 本地运行

```bash
npm ci
npm run dev
```

生产构建：

```bash
npm run build
```

## 发布

推送到 `main` 分支后，`.github/workflows/deploy.yml` 会构建并发布站点。GitHub Pages 的发布来源需设置为 GitHub Actions。

## 内容来源

个人简介和项目介绍根据 [wsbjj 的 GitHub 公开资料](https://github.com/wsbjj)整理。项目详情与最新状态以各仓库为准。首页背景采用 [Teddy GR 在 Unsplash 发布的极简工作区照片](https://unsplash.com/photos/gVpXbCGG6jI)，按 Unsplash License 使用，不包含人物头像。

## 模板与许可

站点基于 [Astro Sphere](https://github.com/markhorn-dev/astro-sphere) 改造。原模板及本仓库保留的模板代码遵循 [MIT License](LICENSE)。
