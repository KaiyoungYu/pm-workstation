#!/usr/bin/env node

/**
 * PM Toolsite Template — Initialization Script
 *
 * This script initializes a new project from the template by asking
 * a series of questions and generating the workspace accordingly.
 *
 * Usage:
 *   node init.js
 *
 * Or let your AI assistant read this file and ask you the questions interactively.
 */

const fs = require("fs");
const path = require("path");

// ─────────────────────────────────────────────
// QUESTION DEFINITIONS
// ─────────────────────────────────────────────

const QUESTIONS = [
  {
    id: "language",
    prompt:
      "文档语言偏好？这会影响生成文档的默认语言。\n  1) 中文为主\n  2) 英文为主\n  3) 中英双语\n请选择 (1-3):",
    type: "single",
    options: { "1": "zh", "2": "en", "3": "bilingual" },
  },
  {
    id: "project_name",
    prompt: "新项目叫什么名字？",
    type: "text",
  },
  {
    id: "project_description",
    prompt: "用一句话描述这个项目：",
    type: "text",
  },
  {
    id: "workspaces",
    prompt:
      "需要哪些工作区？（多选，用逗号分隔）\n  [a] 知识管理 (knowledge/) — 文档标准、需求、路线图\n  [b] 原型设计 (prototype/) — 原型稿、交互设计\n  [c] 工程开发 (project/) — 源代码\n例如输入 a,b 或 a,b,c:",
    type: "multi",
    default: ["a"],
  },
  {
    id: "dev_type",
    prompt:
      "工程开发类型？\n  1) 全栈应用（单仓库）\n  2) 前后端分离（多仓库）\n  3) 跳过，稍后自行配置\n请选择 (1-3):",
    type: "single",
    options: { "1": "fullstack", "2": "separated", "3": "skip" },
    condition: (answers) => answers.workspaces.includes("c"),
  },
  {
    id: "ai_assistants",
    prompt:
      "希望哪些 AI 助手参与？（多选，用逗号分隔）\n  [a] Claude Code — 生成 CLAUDE.md\n  [b] Codex — 生成 AGENTS.md\n  [c] 两者都要\n例如输入 a,b 或 c:",
    type: "multi",
    default: ["c"],
  },
];

// ─────────────────────────────────────────────
// UTILITIES
// ─────────────────────────────────────────────

function ask(question) {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    readline.question(question + "\n> ", (answer) => {
      readline.close();
      resolve(answer.trim());
    });
  });
}

function replaceInFile(filePath, replacements) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, "utf-8");
  for (const [key, value] of Object.entries(replacements)) {
    const regex = new RegExp(
      key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
      "g"
    );
    content = content.replace(regex, value);
  }
  fs.writeFileSync(filePath, content, "utf-8");
}

function removeDir(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  fs.rmSync(dirPath, { recursive: true, force: true });
}

// ─────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────

async function main() {
  console.log("\n╔══════════════════════════════════════════╗");
  console.log("║   PM Toolsite Template — Initialization  ║");
  console.log("╚══════════════════════════════════════════╝\n");

  const answers = {};

  // 1. Collect answers
  for (const q of QUESTIONS) {
    if (q.condition && !q.condition(answers)) continue;

    let answer = await ask(q.prompt);

    if (q.type === "multi") {
      answer = answer
        .split(/[,\s]+/)
        .map((s) => s.trim().toLowerCase())
        .filter(Boolean);
      if (answer.length === 0) answer = q.default || [];
    } else if (q.type === "single") {
      answer = q.options[answer] || q.options["1"];
    }

    answers[q.id] = answer;
    console.log();
  }

  // 2. Apply workspace selections
  const hasKnowledge = answers.workspaces.includes("a");
  const hasPrototype = answers.workspaces.includes("b");
  const hasProject = answers.workspaces.includes("c");

  if (!hasKnowledge) removeDir("knowledge");
  if (!hasPrototype) removeDir("prototype");
  if (!hasProject) removeDir("project");

  // 3. Adjust project structure based on dev_type
  if (hasProject) {
    if (answers.dev_type === "separated") {
      fs.mkdirSync("project/frontend", { recursive: true });
      fs.mkdirSync("project/backend", { recursive: true });
      fs.writeFileSync(
        "project/frontend/README.md",
        "# Frontend\n\n前端项目目录。请在此初始化你的前端工程。\n",
        "utf-8"
      );
      fs.writeFileSync(
        "project/backend/README.md",
        "# Backend\n\n后端服务目录。请在此初始化你的后端工程。\n",
        "utf-8"
      );
    }
    // fullstack or skip: keep empty project/ with only README.md
  }

  // 4. Replace placeholders in CLAUDE.md / AGENTS.md
  const replacements = {
    "{{project_name}}": answers.project_name,
    "{{project_description}}": answers.project_description,
  };

  const hasClaude = answers.ai_assistants.includes("a");
  const hasCodex = answers.ai_assistants.includes("b") || answers.ai_assistants.includes("c");

  if (hasClaude) replaceInFile("CLAUDE.md", replacements);
  else fs.unlinkSync("CLAUDE.md");

  if (hasCodex) replaceInFile("AGENTS.md", replacements);
  else fs.unlinkSync("AGENTS.md");

  // 5. Initialize git repos
  const { execSync } = require("child_process");
  if (hasKnowledge && fs.existsSync("knowledge")) {
    try {
      execSync("git init", { cwd: "knowledge", stdio: "ignore" });
    } catch {}
  }
  if (hasPrototype && fs.existsSync("prototype")) {
    try {
      execSync("git init", { cwd: "prototype", stdio: "ignore" });
    } catch {}
  }
  if (hasProject && fs.existsSync("project")) {
    try {
      execSync("git init", { cwd: "project", stdio: "ignore" });
    } catch {}
  }

  // 6. Summary
  console.log("✅ 初始化完成！\n");
  console.log("项目配置摘要:");
  console.log(`  名称: ${answers.project_name}`);
  console.log(`  描述: ${answers.project_description}`);
  console.log(`  语言: ${answers.language}`);
  console.log(`  工作区: ${answers.workspaces.join(", ")}`);
  if (hasProject) {
    console.log(`  开发类型: ${answers.dev_type || "N/A"}`);
  }
  console.log(`  AI 助手: ${answers.ai_assistants.join(", ")}`);
  console.log("\n下一步建议:");
  if (hasProject) {
    console.log("  1. 在 project/ 下初始化你的工程代码");
    if (answers.dev_type === "separated") {
      console.log("     前后端分离结构已生成: project/frontend/ + project/backend/");
    }
  }
  if (hasKnowledge) {
    console.log("  2. 在 knowledge/02-requirements/ 下创建你的第一个需求");
  }
  if (hasPrototype) {
    console.log("  3. 在 prototype/ 下存放原型设计稿");
  }
}

main().catch((err) => {
  console.error("初始化失败:", err);
  process.exit(1);
});
