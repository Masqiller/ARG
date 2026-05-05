---
source_file: "vendor/claude-mem/src/services/context/formatters/HumanFormatter.ts"
type: "code"
community: "Community None"
degree: 2
location: "L24"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# renderHumanHeader()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["renderHumanHeader[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_context_formatters_humanformatter_ts["HumanFormatter.ts"]
    center -->|"calls"| N_formatters_humanformatter_formatheaderdatetime["formatHeaderDateTime[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[HumanFormatter.ts]] - `contains` [EXTRACTED]
- [[formatHeaderDateTime()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[renderHumanHeader()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None