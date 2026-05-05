---
source_file: "vendor/external_plugins/caveman/evals/llm_run.py"
type: "code"
community: "Community None"
degree: 4
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# llm_run.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["llm_run.py"]:::centerNode
    center -->|"contains"| N_evals_llm_run_run_claude["run_claude[]"]
    center -->|"contains"| N_evals_llm_run_claude_version["claude_version[]"]
    center -->|"contains"| N_evals_llm_run_main["main[]"]
    center -->|"rationale_for"| N_evals_llm_run_rationale_1["Run each prompt through Claude Code in three conditions and snapshot the real LL"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Run each prompt through Claude Code in three conditions and snapshot the real LL]] - `rationale_for` [EXTRACTED]
- [[claude_version()]] - `contains` [EXTRACTED]
- [[main()_14]] - `contains` [EXTRACTED]
- [[run_claude()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[llm_run.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None