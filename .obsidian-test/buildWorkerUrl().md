---
source_file: "vendor/claude-mem/src/shared/worker-utils.ts"
type: "code"
community: "Community None"
degree: 4
location: "L69"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# buildWorkerUrl()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["buildWorkerUrl[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_shared_worker_utils_ts["worker-utils.ts"]
    center -->|"calls"| N_shared_worker_utils_getworkerport["getWorkerPort[]"]
    center -->|"calls"| N_shared_worker_utils_getworkerhost["getWorkerHost[]"]
    center -->|"calls"| N_shared_worker_utils_workerhttprequest["workerHttpRequest[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[getWorkerHost()]] - `calls` [EXTRACTED]
- [[getWorkerPort()]] - `calls` [EXTRACTED]
- [[worker-utils.ts]] - `contains` [EXTRACTED]
- [[workerHttpRequest()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[buildWorkerUrl()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None