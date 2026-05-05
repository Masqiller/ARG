---
source_file: "vendor/claude-mem/src/services/context/formatters/HumanFormatter.ts"
type: "code"
community: "Community None"
degree: 4
location: "L186"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# renderHumanEmptyState()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["renderHumanEmptyState[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_context_contextbuilder_ts["ContextBuilder.ts"]
    center -->|"calls"| N_context_contextbuilder_renderemptystate["renderEmptyState[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_context_formatters_humanformatter_ts["HumanFormatter.ts"]
    center -->|"calls"| N_formatters_humanformatter_formatheaderdatetime["formatHeaderDateTime[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ContextBuilder.ts]] - `imports` [EXTRACTED]
- [[HumanFormatter.ts]] - `contains` [EXTRACTED]
- [[formatHeaderDateTime()]] - `calls` [EXTRACTED]
- [[renderEmptyState()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[renderHumanEmptyState()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None