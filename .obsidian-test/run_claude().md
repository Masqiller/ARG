---
source_file: "vendor/external_plugins/caveman/evals/llm_run.py"
type: "code"
community: "Community None"
degree: 2
location: "L43"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# run_claude()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["run_claude[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_evals_llm_run_py["llm_run.py"]
    center -->|"calls"| N_evals_llm_run_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[llm_run.py]] - `contains` [EXTRACTED]
- [[main()_14]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[run_claude()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None