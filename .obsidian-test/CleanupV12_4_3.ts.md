---
source_file: "vendor/claude-mem/src/services/infrastructure/CleanupV12_4_3.ts"
type: "code"
community: "Community None"
degree: 13
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# CleanupV12_4_3.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 13

## Architecture Graph
```mermaid
graph LR
    center["CleanupV12_4_3.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_infrastructure_cleanup_v12_4_3_test_ts["cleanup-v12_4_3.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_paths_ts["paths.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"contains"| N_infrastructure_cleanupv12_4_3_runonetimev12_4_3cleanup["runOneTimeV12_4_3Cleanup[]"]
    center -->|"contains"| N_infrastructure_cleanupv12_4_3_scancleanupcounts["scanCleanupCounts[]"]
    center -->|"contains"| N_infrastructure_cleanupv12_4_3_executecleanup["executeCleanup[]"]
    center -->|"contains"| N_infrastructure_cleanupv12_4_3_runobserversessionspurge["runObserverSessionsPurge[]"]
    center -->|"contains"| N_infrastructure_cleanupv12_4_3_runstuckpendingpurge["runStuckPendingPurge[]"]
    center -->|"contains"| N_infrastructure_cleanupv12_4_3_wipechromaartifacts["wipeChromaArtifacts[]"]
    center -->|"contains"| N_infrastructure_cleanupv12_4_3_writemarker["writeMarker[]"]
    center -->|"contains"| N_infrastructure_cleanupv12_4_3_emptycounts["emptyCounts[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[cleanup-v12_4_3.test.ts]] - `imports_from` [EXTRACTED]
- [[emptyCounts()]] - `contains` [EXTRACTED]
- [[executeCleanup()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[paths.ts]] - `imports_from` [EXTRACTED]
- [[runObserverSessionsPurge()]] - `contains` [EXTRACTED]
- [[runOneTimeV12_4_3Cleanup()]] - `contains` [EXTRACTED]
- [[runStuckPendingPurge()]] - `contains` [EXTRACTED]
- [[scanCleanupCounts()]] - `contains` [EXTRACTED]
- [[wipeChromaArtifacts()]] - `contains` [EXTRACTED]
- [[worker-service.ts]] - `imports_from` [EXTRACTED]
- [[writeMarker()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[CleanupV12_4_3.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None