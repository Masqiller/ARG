---
source_file: "vendor/external_plugins/claude-code/scripts/sweep.ts"
type: "code"
community: "Community None"
degree: 2
location: "L10"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# CLOSE_MESSAGE()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["CLOSE_MESSAGE[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_claude_code_scripts_sweep_ts["sweep.ts"]
    center -->|"calls"| N_scripts_sweep_closeexpired["closeExpired[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[closeExpired()]] - `calls` [EXTRACTED]
- [[sweep.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[CLOSE_MESSAGE()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None