---
source_file: "vendor/claude-mem/src/shared/worker-utils.ts"
type: "code"
community: "Community None"
degree: 5
location: "L338"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# recordWorkerUnreachable()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["recordWorkerUnreachable[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_shared_worker_utils_ts["worker-utils.ts"]
    center -->|"calls"| N_shared_worker_utils_readhookfailurestate["readHookFailureState[]"]
    center -->|"calls"| N_shared_worker_utils_writehookfailurestateatomic["writeHookFailureStateAtomic[]"]
    center -->|"calls"| N_shared_worker_utils_getfailloudthreshold["getFailLoudThreshold[]"]
    center -->|"calls"| N_shared_worker_utils_executewithworkerfallback["executeWithWorkerFallback[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[executeWithWorkerFallback()]] - `calls` [EXTRACTED]
- [[getFailLoudThreshold()]] - `calls` [EXTRACTED]
- [[readHookFailureState()]] - `calls` [EXTRACTED]
- [[worker-utils.ts]] - `contains` [EXTRACTED]
- [[writeHookFailureStateAtomic()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[recordWorkerUnreachable()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None