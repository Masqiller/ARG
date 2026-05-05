---
source_file: "vendor/claude-mem/src/services/worker/OpenRouterProvider.ts"
type: "code"
community: "Community None"
degree: 2
location: "L25"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# parseRetryAfterMs()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["parseRetryAfterMs[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_openrouterprovider_ts["OpenRouterProvider.ts"]
    center -->|"calls"| N_worker_openrouterprovider_classifyopenroutererror["classifyOpenRouterError[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[OpenRouterProvider.ts]] - `contains` [EXTRACTED]
- [[classifyOpenRouterError()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[parseRetryAfterMs()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None