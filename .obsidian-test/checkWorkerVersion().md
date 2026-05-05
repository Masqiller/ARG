---
source_file: "vendor/claude-mem/src/shared/worker-utils.ts"
type: "code"
community: "Community None"
degree: 4
location: "L129"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# checkWorkerVersion()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["checkWorkerVersion[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_shared_worker_utils_ts["worker-utils.ts"]
    center -->|"calls"| N_shared_worker_utils_getpluginversion["getPluginVersion[]"]
    center -->|"calls"| N_shared_worker_utils_getworkerversion["getWorkerVersion[]"]
    center -->|"calls"| N_shared_worker_utils_ensureworkerrunning["ensureWorkerRunning[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ensureWorkerRunning()]] - `calls` [EXTRACTED]
- [[getPluginVersion()]] - `calls` [EXTRACTED]
- [[getWorkerVersion()]] - `calls` [EXTRACTED]
- [[worker-utils.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[checkWorkerVersion()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None