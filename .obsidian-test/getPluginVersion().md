---
source_file: "vendor/claude-mem/src/shared/worker-utils.ts"
type: "code"
community: "Community None"
degree: 2
location: "L105"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getPluginVersion()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["getPluginVersion[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_shared_worker_utils_ts["worker-utils.ts"]
    center -->|"calls"| N_shared_worker_utils_checkworkerversion["checkWorkerVersion[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[checkWorkerVersion()]] - `calls` [EXTRACTED]
- [[worker-utils.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getPluginVersion()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None