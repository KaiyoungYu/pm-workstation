# PM Toolsite Template

产品经理原型开发工作台模板。

一个结构化的工作空间，将 **知识管理**、**原型设计** 和 **工程开发** 整合在同一目录树下，各自独立管理，方便 AI 助手协作。

## 目录结构

```
.
├── AGENTS.md              # Codex 助手指南
├── CLAUDE.md              # Claude Code 助手指南
├── init.js                # 初始化脚本
├── knowledge/             # 知识库（文档标准、需求、路线图）
│   ├── 00-meta/           # 模板与标准（BRD/PRD/SRD/RIL）
│   ├── 01-roadmap/        # 产品路线图
│   ├── 02-requirements/   # 需求文档
│   ├── 03-versions/       # 版本迭代记录
│   └── 04-decisions/      # 架构决策（ADR）
├── prototype/             # 原型设计稿
└── project/               # 工程代码（初始化后自行配置技术栈）
```

## 快速开始

### 方式一：运行初始化脚本

```bash
node init.js
```

脚本会询问以下问题：

1. **文档语言偏好** — 中文 / 英文 / 双语
2. **项目名称** — 替换所有 `{{project_name}}` 占位符
3. **项目描述** — 一句话描述
4. **工作区选择** — 知识管理、原型设计、工程开发（可多选）
5. **开发类型** — 全栈 / 前后端分离 / 跳过
6. **AI 助手偏好** — Claude / Codex / 两者

### 方式二：让 AI 助手帮你初始化

将 `init.js` 提供给 Claude 或 Codex，它会读取其中的问题定义，逐步询问你并自动完成初始化。

## 文档工作流

参考 `knowledge/00-meta/three-phases.md`：

| Phase | 文档 | 问题 | 视角 |
|-------|------|------|------|
| 0 | RIL | 原始线索 | 忠实记录 |
| 1 | BRD | Why — 为什么做？ | 用户 + 商业 |
| 2 | PRD + Prototype | What — 做什么？ | 产品 + 交互 |
| 3 | SRD | How — 怎么做？ | 技术 + 工程 |

## 各目录说明

- **`knowledge/`** — 独立的 git 仓库。存放所有产品文档、需求、决策记录。
- **`prototype/`** — 独立的 git 仓库。存放 HTML 原型、Figma 导出、交互稿。
- **`project/`** — 独立的 git 仓库。应用源代码。初始化时选择全栈单仓库或前后端分离结构，技术栈由你自行决定。

## 注意事项

- 复制模板后，**先运行 `init.js`**，再开始工作
- `knowledge/`、`prototype/`、`project/` 各自有独立的 git 仓库，可以独立协作
- `CLAUDE.md` 和 `AGENTS.md` 在初始化后会根据你的项目信息自动更新
