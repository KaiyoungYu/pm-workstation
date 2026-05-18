# 原型开发技术要求

本原型项目基于以下技术栈构建，所有开发必须遵循以下规范：

## 1. 技术栈 (Tech Stack)
- **Framework**: Next.js (App Router)
- **UI Components**: 
  - Ant Design (主要组件库)
  - shadcn/ui (精细化定制组件)
- **Data Visualization**: 
  - VTable (@visactor/react-vtable): 用于渲染中国式复杂报表、支持百万级数据渲染
  - VChart (@visactor/react-vchart): 用于渲染统计图表和数据看板大盘图表
- **Styling**: Tailwind CSS
- **Icons**: Lucide React 或 Ant Design Icons

## 2. 目录规范 (Directory Structure)
- 页面代码位于 `/project/app` 或 `/project/src/app`。
- 组件代码位于 `/project/components`。
- 业务逻辑逻辑尽量通过 Hooks 或 Utils 抽离。

## 3. 开发流程 (Development Workflow)
- **参考 PRD**: 每一个页面或组件开发前，必须查阅 `/docs/PRD/` 下对应的文档。
- **添加链接**: 在开发好的页面、组件代码的头部注释或备注里，必须包含其对应 PRD 文档的 Markdown 链接。
  - 示例：`// PRD: [/docs/PRD/pages/index.md]`
- **响应式控制**: 默认支持桌面端，关键界面需适配移动端。

## 4. Mock 数据规范 (MSW)

原型使用 **MSW 2.x (Mock Service Worker)** + **LocalStorage** 实现无后端的数据交互体验。

- **核心文件**:
  - `mocks/handlers.ts` — 定义 API 拦截器 (`http.get/post/put/delete`)
  - `mocks/browser.ts` — 浏览器端 MSW 入口 (`setupWorker`)
  - `mocks/db.ts` — LocalStorage 数据层，提供 `getDB()` / `saveDB()` / `resetDB()`
  - `components/mock-provider.tsx` — 根布局包裹组件，负责初始化 MSW
- **初始化规则**: `MockProvider` 必须阻塞子组件渲染，直到 `worker.start()` 完成，防止页面请求早于 Service Worker 激活导致 404。
- **交互规范**: 页面通过标准 `fetch("/api/...")` 与 mock API 交互，禁止在页面中直接读写 LocalStorage。MSW 拦截请求后，由 `db.ts` 统一持久化。
- **环境限制**: 仅在 `process.env.NODE_ENV !== "production"` 时启用 MSW，生产环境自动跳过。

## 5. UI/UX 准则
- 保持视觉风格一致性，优先使用 Ant Design 的全局配置。
- 交互逻辑应在 PRD 中明确后再实施，避免随意更改。
