# 项目文档结构

本文档定义了 `/docs` 目录的文件系统结构规划。

## 目录结构

```
docs/
├── 00-meta/                              # 元信息（文档规范、项目概述）
│   ├── README.md                         # 本目录说明（引导文档）
│   ├── doc-types.md                      # 文档类型定义与命名规范
│   ├── file-structure.md                 # 本文件 - 文件系统结构规划
│   ├── project-overview.md               # 项目愿景、目标用户、商业模式
│   ├── glossary.md                       # 术语表（必须严格统一）
│   ├── tech-stack.md                     # 技术栈、架构原则
│   └── design-principles.md              # 设计原则、品牌规范
│
├── 01-roadmap/                           # 路线图
│   └── *.md                              # 路线图文档
│
├── 02-requirements/                      # 需求层（活跃需求）
│   ├── REQ_2026-02-05_prop-cleaning/     # 商品属性清洗需求
│   ├── REQ_2026-03-06_data-dashboard/    # 数据仪表板需求
│   └── REQ_YYYY-MM-DD_需求名称/           # 新需求按此格式命名
│   │   ├── BRD.md                        # 需求分析文档（阶段一产出）
│   │   ├── PRD/                          # 产品设计文档（阶段二产出，目录）
│   │   │   ├── modules/                  # 模块设计细节
│   │   │   ├── components/               # 组件设计细节
│   │   │   └── pages/                    # 页面设计细节
│   │   ├── SRD.md                        # 开发需求文档（阶段三产出）
│   │   ├── TC.md                         # 测试用例
│   │   ├── CKL.md                        # 上线检查清单
│   │   ├── MAN.md                        # 用户手册
│   │   ├── assets/                       # 图片、截图等资源
│   │   └── CHANGELOG.md                  # 本需求的变更记录
│   └── ...
│
├── 03-versions/                          # 版本记录
│   ├── .template/                        # 版本目录模板
│   ├── legacy/                           # Legacy 版本（使用旧的 notes/PRD 结构）
│   │   ├── README.md                     # Legacy 版本索引
│   │   └── v0.*.*/                       # Legacy 版本目录
│   │       └── README.md                 # 版本概述、需求文档、PRD 文档、变更说明
│   └── v*.*.*/                           # 新版本（使用新的 REQ 结构）
│       ├── README.md                     # 版本概述、发布日期、包含的 req 列表
│       ├── release-notes.md              # 发布说明
│       └── assets/                       # 版本相关资源（截图、演示视频等）
│
├── 04-decisions/                         # 架构决策记录（ADR）
│   └── ADR-*.md                          # 格式：ADR-序号-简短标题.md
│
├── 05-references/                        # 参考资料
│   ├── competitor-analysis/              # 竞品分析
│   └── user-research/                    # 用户研究
│
├── 06-knowledge/                         # 业务知识库
│   ├── domain-knowledge/                 # 领域知识（行业规则、业务逻辑）
│   ├── pm-notes/                         # 产品经理笔记（他人经验分享）
│   └── best-practices/                   # 最佳实践、设计模式
│
├── 99-archive/                           # 归档（废弃的需求、过时的文档）
```

## 命名约定

### 需求目录命名

格式：`REQ_YYYY-MM-DD_简短需求名称`

示例：`REQ_2024-05-001_user-profile-optimization`

### 文档命名

参见 [doc-types.md](./doc-types.md) 中的详细定义。

## 目录说明

### 02-requirements/（活跃需求）

每个需求一个独立目录，包含该需求完整的生命周期文档。

- **BRD.md** - 阶段一产出的需求分析
- **PRD/** - 阶段二产出的产品设计（目录结构，支持模块化设计）
  - **pages/** - 页面设计文档
  - **components/** - 组件设计文档
  - **modules/** - 模块设计文档
- **SRD.md** - 阶段三产出的开发需求
- **TC.md** - 测试用例
- **CKL.md** - 上线检查清单
- **MAN.md** - 用户手册
- **usecases.md** - 用户需求用例
- **assets/** - 该需求相关的图片、截图等资源
- **CHANGELOG.md** - 该需求的变更历史

#### 已整理的历史需求

- **REQ_2026-02-05_prop-cleaning** - 商品属性清洗
  - 包含：属性清洗页面、AI 清洗节点配置器
  - 对应版本：v0.1.0, v0.2.0

- **REQ_2026-03-06_data-dashboard** - 数据仪表板
  - 包含：7个看板页面、通用组件、基础功能
  - 对应版本：v0.3.0 - v0.8.0

### 03-versions/（版本记录）

记录项目版本发布历史及版本与需求的映射关系。

#### 目录结构

```
03-versions/
├── .template/                    # 版本目录模板（新版本参考）
├── legacy/                       # Legacy 版本（v0.1.0 - v0.8.0）
│   ├── README.md                 # Legacy 版本索引
│   └── v0.*.*/                   # 使用旧的 notes/PRD 结构
│       └── README.md             # 版本信息、需求文档链接、PRD 文档链接
└── v*.*.*/                       # 新版本（v1.0.0 及以后）
    ├── README.md                 # 版本概述、包含的 REQ 列表
    ├── release-notes.md          # 发布说明
    └── assets/                   # 版本资源
```

#### Legacy 版本

Legacy 版本（v0.1.0 - v0.8.0）使用旧的文档结构：
- 需求文档：`/docs/notes/requirements-*.md`
- PRD 文档：`/docs/PRD/pages/*.md` 和 `/docs/PRD/components/*.md`

#### 新版本

新版本（v1.0.0 及以后）使用新的 REQ 目录结构，每个版本目录包含：
- **README.md** - 版本概述，包含：
  - 版本号、发布日期
  - 包含的需求列表（REQ 目录）
  - 主要变更内容
- **release-notes.md** - 详细发布说明
- **assets/** - 版本相关资源

### 04-decisions/（架构决策记录）

使用 ADR（Architecture Decision Record）格式记录重要的架构决策。

### 06-knowledge/（业务知识库）

存储项目相关的业务知识和其他产品经理的经验分享：

- **domain-knowledge/** - 领域知识
  - 行业规则与标准
  - 业务逻辑说明
  - 数据模型与术语定义

- **pm-notes/** - 产品经理笔记
  - 他人经验分享
  - 行业最佳实践
  - 学习笔记与心得

- **best-practices/** - 最佳实践
  - 设计模式库
  - 常见问题解决方案
  - 可复用的设计方案

### 99-archive/（归档）

废弃的需求、过时的文档等。

已归档文件：
- `versions-legacy.md` - 旧版本文档（已迁移到 `03-versions/legacy/`）

## 迁移说明

### 已删除的旧目录

以下目录已于 2026-05-08 删除，内容已迁移到新结构：
- `notes/` - 需求讨论笔记（24 个文件，已不再需要）
- `PRD/` - 旧版 PRD 文档（16 个文件，已迁移到 `02-requirements/REQ_*/PRD/`）
- `requirements/` - 旧版需求文档（已迁移到 `02-requirements/REQ_*/BRD.md`）
- `flowcharts/` - 旧版流程图（已不再需要）

### 已整理的文件

- `prototype-tech-requirements.md` → `00-meta/tech-stack.md` - 原型技术栈和开发规范
