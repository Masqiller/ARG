---
source_file: "vendor/graphify/graphify/__main__.py"
type: "code"
community: "Community None"
degree: 3
location: "L595"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _antigravity_uninstall()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["_antigravity_uninstall[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_main_py["__main__.py"]
    center -->|"calls"| N_graphify_main_main["main[]"]
    center -->|"rationale_for"| N_graphify_main_rationale_596["Remove graphify Antigravity rules, workflow, and skill files."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Remove graphify Antigravity rules, workflow, and skill files.]] - `rationale_for` [EXTRACTED]
- [[__main__.py]] - `contains` [EXTRACTED]
- [[main()_2]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_antigravity_uninstall()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None