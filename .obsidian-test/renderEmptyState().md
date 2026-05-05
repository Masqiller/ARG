---
source_file: "vendor/claude-mem/src/services/context/ContextBuilder.ts"
type: "code"
community: "Community None"
degree: 4
location: "L60"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# renderEmptyState()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["renderEmptyState[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_context_contextbuilder_ts["ContextBuilder.ts"]
    center -->|"calls"| N_context_contextbuilder_generatecontext["generateContext[]"]
    center -->|"calls"| N_formatters_humanformatter_renderhumanemptystate["renderHumanEmptyState[]"]
    center -->|"calls"| N_formatters_agentformatter_renderagentemptystate["renderAgentEmptyState[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ContextBuilder.ts]] - `contains` [EXTRACTED]
- [[generateContext()]] - `calls` [EXTRACTED]
- [[renderAgentEmptyState()]] - `calls` [INFERRED]
- [[renderHumanEmptyState()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[renderEmptyState()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None