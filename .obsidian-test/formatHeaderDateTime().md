---
source_file: "vendor/claude-mem/src/services/context/formatters/HumanFormatter.ts"
type: "code"
community: "Community None"
degree: 3
location: "L12"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# formatHeaderDateTime()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["formatHeaderDateTime[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_context_formatters_humanformatter_ts["HumanFormatter.ts"]
    center -->|"calls"| N_formatters_humanformatter_renderhumanheader["renderHumanHeader[]"]
    center -->|"calls"| N_formatters_humanformatter_renderhumanemptystate["renderHumanEmptyState[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[HumanFormatter.ts]] - `contains` [EXTRACTED]
- [[renderHumanEmptyState()]] - `calls` [EXTRACTED]
- [[renderHumanHeader()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[formatHeaderDateTime()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None