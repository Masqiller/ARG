---
source_file: "vendor/graphify/graphify/__main__.py"
type: "code"
community: "Community None"
degree: 4
location: "L864"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _agents_uninstall()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["_agents_uninstall[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_main_py["__main__.py"]
    center -->|"calls"| N_graphify_main_uninstall_opencode_plugin["_uninstall_opencode_plugin[]"]
    center -->|"calls"| N_graphify_main_main["main[]"]
    center -->|"rationale_for"| N_graphify_main_rationale_865["Remove the graphify section from the local AGENTS.md."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Remove the graphify section from the local AGENTS.md.]] - `rationale_for` [EXTRACTED]
- [[__main__.py]] - `contains` [EXTRACTED]
- [[_uninstall_opencode_plugin()]] - `calls` [EXTRACTED]
- [[main()_2]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_agents_uninstall()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None