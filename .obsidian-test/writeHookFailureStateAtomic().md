---
source_file: "vendor/claude-mem/src/shared/worker-utils.ts"
type: "code"
community: "Community None"
degree: 5
location: "L309"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# writeHookFailureStateAtomic()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["writeHookFailureStateAtomic[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_shared_worker_utils_ts["worker-utils.ts"]
    center -->|"calls"| N_shared_worker_utils_getstatedir["getStateDir[]"]
    center -->|"calls"| N_shared_worker_utils_gethookfailurespath["getHookFailuresPath[]"]
    center -->|"calls"| N_shared_worker_utils_recordworkerunreachable["recordWorkerUnreachable[]"]
    center -->|"calls"| N_shared_worker_utils_resetworkerfailurecounter["resetWorkerFailureCounter[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[getHookFailuresPath()]] - `calls` [EXTRACTED]
- [[getStateDir()]] - `calls` [EXTRACTED]
- [[recordWorkerUnreachable()]] - `calls` [EXTRACTED]
- [[resetWorkerFailureCounter()]] - `calls` [EXTRACTED]
- [[worker-utils.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[writeHookFailureStateAtomic()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None