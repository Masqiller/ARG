---
source_file: "vendor/claude-mem/src/shared/worker-utils.ts"
type: "code"
community: "Community None"
degree: 3
location: "L326"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getFailLoudThreshold()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["getFailLoudThreshold[]"]:::centerNode
    center -->|"calls"| N_shared_hook_settings_loadfromfileonce["loadFromFileOnce[]"]
    center -->|"contains"| N_vendor_claude_mem_src_shared_worker_utils_ts["worker-utils.ts"]
    center -->|"calls"| N_shared_worker_utils_recordworkerunreachable["recordWorkerUnreachable[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[loadFromFileOnce()]] - `calls` [INFERRED]
- [[recordWorkerUnreachable()]] - `calls` [EXTRACTED]
- [[worker-utils.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getFailLoudThreshold()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None