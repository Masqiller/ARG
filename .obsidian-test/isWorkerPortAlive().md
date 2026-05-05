---
source_file: "vendor/claude-mem/src/shared/worker-utils.ts"
type: "code"
community: "Community None"
degree: 5
location: "L206"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# isWorkerPortAlive()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["isWorkerPortAlive[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_shared_worker_utils_ts["worker-utils.ts"]
    center -->|"calls"| N_shared_worker_utils_isworkerhealthy["isWorkerHealthy[]"]
    center -->|"calls"| N_shared_worker_utils_waitforworkerport["waitForWorkerPort[]"]
    center -->|"calls"| N_shared_worker_utils_ensureworkerrunning["ensureWorkerRunning[]"]
    center -->|"calls"| N_supervisor_index_validateworkerpidfile["validateWorkerPidFile[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ensureWorkerRunning()]] - `calls` [EXTRACTED]
- [[isWorkerHealthy()]] - `calls` [EXTRACTED]
- [[validateWorkerPidFile()]] - `calls` [INFERRED]
- [[waitForWorkerPort()]] - `calls` [EXTRACTED]
- [[worker-utils.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[isWorkerPortAlive()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None