---
source_file: "vendor/claude-mem/tests/infrastructure/cleanup-v12_4_3.test.ts"
type: "code"
community: "Community None"
degree: 10
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# cleanup-v12_4_3.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["cleanup-v12_4_3.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_infrastructure_cleanupv12_4_3_ts["CleanupV12_4_3.ts"]
    center -->|"imports"| N_infrastructure_cleanupv12_4_3_runonetimev12_4_3cleanup["runOneTimeV12_4_3Cleanup[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_database_ts["Database.ts"]
    center -->|"imports"| N_sqlite_database_claudememdatabase["ClaudeMemDatabase"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_paths_ts["paths.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"contains"| N_infrastructure_cleanup_v12_4_3_test_silencelogger["silenceLogger[]"]
    center -->|"contains"| N_infrastructure_cleanup_v12_4_3_test_restorelogger["restoreLogger[]"]
    center -->|"contains"| N_infrastructure_cleanup_v12_4_3_test_seeddatabase["seedDatabase[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ClaudeMemDatabase]] - `imports` [EXTRACTED]
- [[CleanupV12_4_3.ts]] - `imports_from` [EXTRACTED]
- [[Database.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[paths.ts]] - `imports_from` [EXTRACTED]
- [[restoreLogger()]] - `contains` [EXTRACTED]
- [[runOneTimeV12_4_3Cleanup()]] - `imports` [EXTRACTED]
- [[seedDatabase()]] - `contains` [EXTRACTED]
- [[silenceLogger()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[cleanup-v12_4_3.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None