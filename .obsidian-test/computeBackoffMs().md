---
source_file: "vendor/claude-mem/src/services/worker/retry.ts"
type: "code"
community: "Community None"
degree: 2
location: "L47"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# computeBackoffMs()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["computeBackoffMs[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_retry_ts["retry.ts"]
    center -->|"calls"| N_worker_retry_withretry["withRetry[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[retry.ts]] - `contains` [EXTRACTED]
- [[withRetry()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[computeBackoffMs()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None