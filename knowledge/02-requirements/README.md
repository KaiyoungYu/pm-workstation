# Requirements

需求文档存放目录。

## 目录命名规范

每个需求创建一个子目录，格式为：

```
REQ_YYYY-MM-DD_需求名称/
```

## 目录内容

```
REQ_YYYY-MM-DD_需求名称/
├── RIL.md          # (可选) Requirement Intake Log — 原始需求线索
├── BRD.md          # Business Requirements Document
├── PRD/            # Product Requirements + 原型相关文件
│   └── PRD.md
├── SRD.md          # Specification Requirements Document
├── TC.md           # (可选) Test Cases
├── CKL.md          # (可选) Checklist
└── MAN.md          # (可选) Manual / 运营手册
```

## 工作流程

参考 `knowledge/00-meta/three-phases.md` 的三阶段文档工作流：

1. (可选) 创建 RIL 记录原始线索
2. 创建需求目录
3. 使用 `/requirement-analyzer` 生成 BRD
4. 编写 PRD 与设计原型
5. 编写 SRD
6. 按需补充 TC、CKL、MAN
