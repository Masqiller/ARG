---
source_file: "vendor/claude-mem/src/services/sqlite/observations/files.ts"
type: "code"
community: "Community None"
degree: 7
location: "L6"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# parseFileList()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["parseFileList[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_services_sqlite_parse_file_list_test_ts["parse-file-list.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_sqlite_sessionstore_ts["SessionStore.ts"]
    center -->|"calls"| N_sqlite_sessionstore_sessionstore_getfilesforsession[".getFilesForSession[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_sqlite_observations_files_ts["files.ts"]
    center -->|"calls"| N_observations_files_getfilesforsession["getFilesForSession[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_sync_chromasync_ts["ChromaSync.ts"]
    center -->|"calls"| N_sync_chromasync_chromasync_formatobservationdocs[".formatObservationDocs[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.formatObservationDocs()]] - `calls` [INFERRED]
- [[.getFilesForSession()]] - `calls` [INFERRED]
- [[ChromaSync.ts]] - `imports` [EXTRACTED]
- [[SessionStore.ts]] - `imports` [EXTRACTED]
- [[files.ts]] - `contains` [EXTRACTED]
- [[getFilesForSession()]] - `calls` [EXTRACTED]
- [[parse-file-list.test.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[parseFileList()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None