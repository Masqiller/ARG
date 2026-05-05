---
source_file: "vendor/claude-mem/src/services/infrastructure/CleanupV12_4_3.ts"
type: "code"
community: "Community None"
degree: 2
location: "L220"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# runStuckPendingPurge()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["runStuckPendingPurge[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_infrastructure_cleanupv12_4_3_ts["CleanupV12_4_3.ts"]
    center -->|"calls"| N_infrastructure_cleanupv12_4_3_executecleanup["executeCleanup[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CleanupV12_4_3.ts]] - `contains` [EXTRACTED]
- [[executeCleanup()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[runStuckPendingPurge()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None