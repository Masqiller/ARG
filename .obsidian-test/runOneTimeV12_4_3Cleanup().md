---
source_file: "vendor/claude-mem/src/services/infrastructure/CleanupV12_4_3.ts"
type: "code"
community: "Community None"
degree: 9
location: "L26"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# runOneTimeV12_4_3Cleanup()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["runOneTimeV12_4_3Cleanup[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_infrastructure_cleanup_v12_4_3_test_ts["cleanup-v12_4_3.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"calls"| N_services_worker_service_workerservice_initializebackground[".initializeBackground[]"]
    center -->|"calls"| N_services_worker_service_main["main[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_infrastructure_cleanupv12_4_3_ts["CleanupV12_4_3.ts"]
    center -->|"calls"| N_infrastructure_cleanupv12_4_3_emptycounts["emptyCounts[]"]
    center -->|"calls"| N_infrastructure_cleanupv12_4_3_writemarker["writeMarker[]"]
    center -->|"calls"| N_infrastructure_cleanupv12_4_3_scancleanupcounts["scanCleanupCounts[]"]
    center -->|"calls"| N_infrastructure_cleanupv12_4_3_executecleanup["executeCleanup[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.initializeBackground()]] - `calls` [INFERRED]
- [[CleanupV12_4_3.ts]] - `contains` [EXTRACTED]
- [[cleanup-v12_4_3.test.ts]] - `imports` [EXTRACTED]
- [[emptyCounts()]] - `calls` [EXTRACTED]
- [[executeCleanup()]] - `calls` [EXTRACTED]
- [[main()_22]] - `calls` [INFERRED]
- [[scanCleanupCounts()]] - `calls` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]
- [[writeMarker()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[runOneTimeV12_4_3Cleanup()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None