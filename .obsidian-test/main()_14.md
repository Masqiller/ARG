---
source_file: "vendor/external_plugins/caveman/evals/llm_run.py"
type: "code"
community: "Community None"
degree: 3
location: "L64"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# main()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["main[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_evals_llm_run_py["llm_run.py"]
    center -->|"calls"| N_evals_llm_run_run_claude["run_claude[]"]
    center -->|"calls"| N_evals_llm_run_claude_version["claude_version[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[claude_version()]] - `calls` [EXTRACTED]
- [[llm_run.py]] - `contains` [EXTRACTED]
- [[run_claude()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[main()_14]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None