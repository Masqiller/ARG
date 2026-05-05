---
source_file: "vendor/claude-mem/src/services/infrastructure/CleanupV12_4_3.ts"
type: "code"
community: "Community None"
degree: 3
location: "L77"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# scanCleanupCounts()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["scanCleanupCounts[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_infrastructure_cleanupv12_4_3_ts["CleanupV12_4_3.ts"]
    center -->|"calls"| N_infrastructure_cleanupv12_4_3_runonetimev12_4_3cleanup["runOneTimeV12_4_3Cleanup[]"]
    center -->|"calls"| N_infrastructure_cleanupv12_4_3_emptycounts["emptyCounts[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CleanupV12_4_3.ts]] - `contains` [EXTRACTED]
- [[emptyCounts()]] - `calls` [EXTRACTED]
- [[runOneTimeV12_4_3Cleanup()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[scanCleanupCounts()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None