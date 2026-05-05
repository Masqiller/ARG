---
source_file: "vendor/claude-mem/src/services/context/formatters/AgentFormatter.ts"
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
    center -->|"contains"| N_vendor_claude_mem_src_services_context_formatters_agentformatter_ts["AgentFormatter.ts"]
    center -->|"calls"| N_formatters_agentformatter_renderagentheader["renderAgentHeader[]"]
    center -->|"calls"| N_formatters_agentformatter_renderagentemptystate["renderAgentEmptyState[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[AgentFormatter.ts]] - `contains` [EXTRACTED]
- [[renderAgentEmptyState()]] - `calls` [EXTRACTED]
- [[renderAgentHeader()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[formatHeaderDateTime()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None