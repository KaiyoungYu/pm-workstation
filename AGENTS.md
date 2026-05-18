# AGENTS.md

This file provides guidance to Codex (codex.ai/code) when working in this workspace.

## Project Overview

This is **{{project_name}}**.

{{project_description}}

This workspace follows a structured product development methodology, separating **knowledge**, **prototype**, and **project** into independent areas.

## Workspace Structure

```
/
├── AGENTS.md                # This file
├── knowledge/               # Documentation standards and product knowledge
│   ├── 00-meta/             # Templates (BRD, PRD, SRD, RIL, doc-types, file-structure, three-phases, tech-stack)
│   ├── 01-roadmap/          # Product roadmap and milestones
│   ├── 02-requirements/     # Requirement documents (REQ_YYYY-MM-DD_*)
│   ├── 03-versions/         # Released feature iterations
│   └── 04-decisions/        # Architecture Decision Records (ADR)
├── prototype/               # Prototype designs, mockups, and interaction drafts
└── project/                 # Application source code (initialized separately per project)
```

## Documentation Workflow

This workspace follows a **three-phase documentation workflow** defined in `knowledge/00-meta/three-phases.md`:

| Phase | Document | Question | Perspective |
|-------|----------|----------|-------------|
| 0 | **RIL** (Requirement Intake Log) | Raw clues | Faithful recording, optional |
| 1 | **BRD** (Business Requirements) | Why — Why build this? | User + Business |
| 2 | **PRD** (Product Requirements) + Prototype | What — What to build? | Product + Interaction |
| 3 | **SRD** (Specification Requirements) | How — How to build? | Tech + Engineering |

**Phase boundaries**:
- **BRD** constrains PRD's design boundary (In-Scope / Out-of-Scope)
- **PRD** designs features within BRD's scope; it is the *blueprint*
- **SRD** is the *construction drawing* that drives implementation with API specs, data models, and test cases

**Always use the `/requirement-analyzer` skill for requirement analysis work.**

**Template references**:
- **BRD**: `knowledge/00-meta/BRD-example.md`
- **PRD**: `knowledge/00-meta/PRD-example.md`
- **SRD**: `knowledge/00-meta/SRD-example.md`
- **RIL**: `knowledge/00-meta/RIL-example.md`

### Starting a New Requirement

1. (Optional) Create an **RIL** to record raw intake if starting from unprocessed clues
2. Create a directory under `knowledge/02-requirements/` with format `REQ_YYYY-MM-DD_需求名称`
3. Use `/requirement-analyzer` to generate `BRD.md`
4. Create `PRD/` and design documents (Phase 2)
5. Create `SRD.md` (Phase 3)
6. Add `TC.md`, `CKL.md`, `MAN.md` as needed

### State Machine Conventions

When a PRD or SRD involves stateful processes, always use a **state machine** to formally define the model:

1. **Diagram**: Use Mermaid `stateDiagram-v2` for state transitions
2. **Table**: Accompany with a state transition table (Current State | Trigger Event | Target State | Notes)

## Area Responsibilities

### knowledge/

Product documentation and decisions. This is an independent git repository.

- **00-meta/**: Reusable templates and standards. Do not modify these for a single project; copy and adapt when needed.
- **01-roadmap/**: Long-term direction and quarterly goals.
- **02-requirements/**: One directory per requirement, following the three-phase workflow.
- **03-versions/**: Post-release iteration records. Distinguish from requirements: `02-requirements/` is 0→1 design; `03-versions/` is 1→N evolution.
- **04-decisions/**: ADRs for significant technical or product decisions.

### prototype/

Design artifacts and interaction drafts. This is an independent git repository.

- HTML/CSS mockups
- Figma/Sketch exports
- User test prototypes
- Wireframes and flow diagrams

PRDs in `knowledge/` may reference prototypes using relative paths (`../../prototype/...`).

### project/

Application source code. This is an independent git repository.

The actual technology stack and architecture are defined per project. Refer to:
- `project/README.md` for project-specific setup
- `knowledge/00-meta/tech-stack.md` for stack selection guidelines
- `knowledge/02-requirements/REQ_*/SRD.md` for implementation specs

## File Reference Patterns

- **Meta docs**: `knowledge/00-meta/*.md`
- **Requirements**: `knowledge/02-requirements/REQ_YYYY-MM-DD_*/`
- **BRD**: `knowledge/02-requirements/REQ_*/BRD.md`
- **PRD**: `knowledge/02-requirements/REQ_*/PRD/`
- **SRD**: `knowledge/02-requirements/REQ_*/SRD.md`
- **Versions**: `knowledge/03-versions/v*_*`
- **Architecture decisions**: `knowledge/04-decisions/ADR-*.md`
- **Prototype**: `prototype/`
- **App code**: `project/`
