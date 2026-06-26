# 中环旅行社 (Zhonghuan Travel) - 入境游网站规格文档

## 1. Concept & Vision

**中环旅行社**是一家专注于入境旅游的江浙沪地区地接社，服务全球游客深度探索江南水乡之美。

网站定位：**高端定制旅行体验**，风格融合东方美学与现代奢华，让访客在浏览网站的瞬间就能感受到江南水墨画的意境与高端服务的质感。

---

## 2. Design Language

### 美学方向
**东方新奢华（Eastern Modern Luxury）** — 水墨画意境 + 现代极简 + 金色点缀

### 配色方案
| 角色 | 色值 | 用途 |
|------|------|------|
| 主色 Primary | `#1a1a2e` | 深墨色，背景/文字 |
| 次色 Secondary | `#e8d5b7` | 暖金色，标题/强调 |
| 点缀 Accent | `#c9a86c` | 金棕色，按钮/图标 |
| 背景 Background | `#faf8f5` | 米白色，主背景 |
| 文字 Text | `#2d2d2d` | 深灰，正文 |
| 浅色 Light | `#f5f0e8` | 浅米，分割区域 |

### 字体
- **标题**: `Noto Serif SC` (Google Fonts) — 宋体衬线，东方气质
- **正文**: `Inter` — 现代无衬线，清晰易读
- **英文装饰**: `Playfair Display` — 优雅衬线

### 动效
- **入场动画**: 淡入上移，400ms ease-out，stagger 100ms
- **悬停效果**: scale 1.02, 300ms ease
- **语言切换**: 平滑渐变过渡

---

## 3. Layout & Structure

### 页面结构

```
┌─────────────────────────────────────────┐
│  Navigation                              │
│  Logo: 中环旅行社 / Zhonghuan      [中/EN]│
├─────────────────────────────────────────┤
│  Hero Section                            │
│  - 全屏背景（江南水乡）                   │
│  - 品牌标语 + CTA按钮                    │
├─────────────────────────────────────────┤
│  Services (服务项目)                      │
│  - 私人定制 / 商务接待 / 特色路线         │
├─────────────────────────────────────────┤
│  Destinations (目的地)                    │
│  - 江浙沪热门景点展示                     │
├─────────────────────────────────────────┤
│  About (关于我们)                         │
├─────────────────────────────────────────┤
│  Contact (联系方式) ⭐重点               │
│  - WhatsApp: +86 180 7294 0737          │
│  - 联系表单（提交后发到 yuxuanlou2013@gmail.com）
├─────────────────────────────────────────┤
│  Footer                                  │
│  - WhatsApp: +86 180 7294 0737          │
└─────────────────────────────────────────┘
```

### 响应式
- Desktop (1200px+): 完整布局
- Tablet (768-1199px): 2列网格
- Mobile (<768px): 单列，汉堡菜单

---

## 4. Features & Interactions

### 语言切换（中/EN）
- 位于右上角
- 点击切换：中文 ↔ English
- 中环旅行社/Zhonghuan 名字始终显示
- 切换时内容平滑过渡

### Hero Section
- 全屏背景渐变遮罩
- 品牌标语随语言变化
- CTA按钮滚动到联系区域

### 服务卡片
- 3个服务（私人定制/商务接待/特色路线）
- 悬停上浮+金色边框

### 目的地展示
- 西湖、乌镇、周庄、上海外滩、苏州园林、灵山
- 悬停显示地名

### 联系表单 ⭐
- 字段：姓名、邮箱、联系方式（WhatsApp/邮箱）、留言
- 提交发送邮件到 yuxuanlou2013@gmail.com
- 使用 Formspree 或 Vercel Serverless Function

### Footer
- WhatsApp: +86 180 7294 0737 始终显示

---

## 5. Technical Approach

### 技术栈
- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React
- **部署**: Vercel
- **邮件**: Formspree (免费，无需后端)

### 语言切换实现
- 使用 React Context 管理语言状态
- 内容对象存储中英文版本
- `useLanguage` hook 切换

### 邮件发送
- 表单提交到 Formspree
- Formspree 转发到 yuxuanlou2013@gmail.com
