---
source_file: "vendor/claude-mem/src/services/infrastructure/CleanupV12_4_3.ts"
type: "code"
community: "Community None"
degree: 7
location: "L109"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# executeCleanup()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["executeCleanup[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_infrastructure_cleanupv12_4_3_ts["CleanupV12_4_3.ts"]
    center -->|"calls"| N_infrastructure_cleanupv12_4_3_runonetimev12_4_3cleanup["runOneTimeV12_4_3Cleanup[]"]
    center -->|"calls"| N_infrastructure_cleanupv12_4_3_emptycounts["emptyCounts[]"]
    center -->|"calls"| N_infrastructure_cleanupv12_4_3_runobserversessionspurge["runObserverSessionsPurge[]"]
    center -->|"calls"| N_infrastructure_cleanupv12_4_3_runstuckpendingpurge["runStuckPendingPurge[]"]
    center -->|"calls"| N_infrastructure_cleanupv12_4_3_wipechromaartifacts["wipeChromaArtifacts[]"]
    center -->|"calls"| N_infrastructure_cleanupv12_4_3_writemarker["writeMarker[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CleanupV12_4_3.ts]] - `contains` [EXTRACTED]
- [[emptyCounts()]] - `calls` [EXTRACTED]
- [[runObserverSessionsPurge()]] - `calls` [EXTRACTED]
- [[runOneTimeV12_4_3Cleanup()]] - `calls` [EXTRACTED]
- [[runStuckPendingPurge()]] - `calls` [EXTRACTED]
- [[wipeChromaArtifacts()]] - `calls` [EXTRACTED]
- [[writeMarker()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[executeCleanup()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None