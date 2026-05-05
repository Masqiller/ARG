---
source_file: "vendor/claude-mem/src/services/context/formatters/AgentFormatter.ts"
type: "code"
community: "Community None"
degree: 3
location: "L86"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# compactTime()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["compactTime[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_context_formatters_agentformatter_ts["AgentFormatter.ts"]
    center -->|"calls"| N_formatters_agentformatter_renderagenttablerow["renderAgentTableRow[]"]
    center -->|"calls"| N_formatters_agentformatter_renderagentfullobservation["renderAgentFullObservation[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[AgentFormatter.ts]] - `contains` [EXTRACTED]
- [[renderAgentFullObservation()]] - `calls` [EXTRACTED]
- [[renderAgentTableRow()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[compactTime()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None