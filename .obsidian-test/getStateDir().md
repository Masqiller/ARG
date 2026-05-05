---
source_file: "vendor/claude-mem/src/shared/worker-utils.ts"
type: "code"
community: "Community None"
degree: 3
location: "L284"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getStateDir()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["getStateDir[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_shared_worker_utils_ts["worker-utils.ts"]
    center -->|"calls"| N_shared_worker_utils_gethookfailurespath["getHookFailuresPath[]"]
    center -->|"calls"| N_shared_worker_utils_writehookfailurestateatomic["writeHookFailureStateAtomic[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[getHookFailuresPath()]] - `calls` [EXTRACTED]
- [[worker-utils.ts]] - `contains` [EXTRACTED]
- [[writeHookFailureStateAtomic()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getStateDir()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None