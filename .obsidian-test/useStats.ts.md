---
source_file: "vendor/claude-mem/src/ui/viewer/hooks/useStats.ts"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# useStats.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["useStats.ts"]:::centerNode
    center -->|"imports"| N_utils_api_authfetch["authFetch[]"]
    center -->|"contains"| N_hooks_usestats_usestats["useStats[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[authFetch()]] - `imports` [EXTRACTED]
- [[useStats()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[useStats.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None