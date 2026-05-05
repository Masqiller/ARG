---
source_file: "vendor/claude-mem/src/services/worker/agents/ResponseProcessor.ts"
type: "code"
community: "Community None"
degree: 2
location: "L145"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# normalizeSummaryForStorage()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["normalizeSummaryForStorage[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_agents_responseprocessor_ts["ResponseProcessor.ts"]
    center -->|"calls"| N_agents_responseprocessor_processagentresponse["processAgentResponse[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ResponseProcessor.ts]] - `contains` [EXTRACTED]
- [[processAgentResponse()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[normalizeSummaryForStorage()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None