---
source_file: "vendor/claude-mem/src/services/worker/GeminiProvider.ts"
type: "code"
community: "Community None"
degree: 2
location: "L141"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# enforceRateLimitForModel()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["enforceRateLimitForModel[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_geminiprovider_ts["GeminiProvider.ts"]
    center -->|"calls"| N_worker_geminiprovider_geminiprovider_querygeminimultiturn[".queryGeminiMultiTurn[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.queryGeminiMultiTurn()]] - `calls` [EXTRACTED]
- [[GeminiProvider.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[enforceRateLimitForModel()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None