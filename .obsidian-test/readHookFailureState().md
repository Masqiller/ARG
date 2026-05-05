---
source_file: "vendor/claude-mem/src/shared/worker-utils.ts"
type: "code"
community: "Community None"
degree: 4
location: "L292"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# readHookFailureState()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["readHookFailureState[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_shared_worker_utils_ts["worker-utils.ts"]
    center -->|"calls"| N_shared_worker_utils_gethookfailurespath["getHookFailuresPath[]"]
    center -->|"calls"| N_shared_worker_utils_recordworkerunreachable["recordWorkerUnreachable[]"]
    center -->|"calls"| N_shared_worker_utils_resetworkerfailurecounter["resetWorkerFailureCounter[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[getHookFailuresPath()]] - `calls` [EXTRACTED]
- [[recordWorkerUnreachable()]] - `calls` [EXTRACTED]
- [[resetWorkerFailureCounter()]] - `calls` [EXTRACTED]
- [[worker-utils.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[readHookFailureState()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None