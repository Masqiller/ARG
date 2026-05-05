---
source_file: "vendor/claude-mem/src/services/worker/agents/index.ts"
type: "code"
community: "Community None"
degree: 3
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# index.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["index.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_claudeprovider_ts["ClaudeProvider.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_openrouterprovider_ts["OpenRouterProvider.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_geminiprovider_ts["GeminiProvider.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ClaudeProvider.ts]] - `imports_from` [EXTRACTED]
- [[GeminiProvider.ts]] - `imports_from` [EXTRACTED]
- [[OpenRouterProvider.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[index.ts_4]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None