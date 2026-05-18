# Project

应用源代码目录。

## 说明

此目录用于存放实际的应用代码。初始化时根据你的选择，可能生成以下结构之一：

- **全栈应用**：代码直接放在此目录根下
- **前后端分离**：`frontend/` + `backend/` 两个子目录
- **跳过配置**：保持为空，后续自行初始化

## 初始化建议

根据你的技术选型，在此目录下初始化项目：

```bash
# 示例：Next.js 全栈
cd project
npx create-next-app@latest .

# 示例：前后端分离
cd project
mkdir frontend backend
cd frontend && npx create-vite .
cd ../backend && npm init -y
```
