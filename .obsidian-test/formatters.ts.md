---
source_file: "vendor/claude-mem/src/ui/viewer/utils/formatters.ts"
type: "code"
community: "Community None"
degree: 3
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# formatters.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["formatters.ts"]:::centerNode
    center -->|"contains"| N_utils_formatters_formatdate["formatDate[]"]
    center -->|"contains"| N_utils_formatters_formatuptime["formatUptime[]"]
    center -->|"contains"| N_utils_formatters_formatbytes["formatBytes[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[formatBytes()]] - `contains` [EXTRACTED]
- [[formatDate()_2]] - `contains` [EXTRACTED]
- [[formatUptime()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[formatters.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None