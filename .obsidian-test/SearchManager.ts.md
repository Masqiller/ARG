---
source_file: "vendor/claude-mem/src/services/worker/SearchManager.ts"
type: "code"
community: "Community None"
degree: 33
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# SearchManager.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 33

## Architecture Graph
```mermaid
graph LR
    center["SearchManager.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_worker_searchmanager_timeline_anchor_test_ts["SearchManager.timeline-anchor.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_timeline_formatting_ts["timeline-formatting.ts"]
    center -->|"imports"| N_shared_timeline_formatting_formatdatetime["formatDateTime[]"]
    center -->|"imports"| N_shared_timeline_formatting_formattime["formatTime[]"]
    center -->|"imports"| N_shared_timeline_formatting_formatdate["formatDate[]"]
    center -->|"imports"| N_shared_timeline_formatting_extractfirstfile["extractFirstFile[]"]
    center -->|"imports"| N_shared_timeline_formatting_estimatetokens["estimateTokens[]"]
    center -->|"imports"| N_shared_timeline_formatting_groupbydate["groupByDate[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_formattingservice_ts["FormattingService.ts"]
    center -->|"imports"| N_worker_formattingservice_formattingservice["FormattingService"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_sessionsearch_ts["SessionSearch.ts"]
    center -->|"imports"| N_sqlite_sessionsearch_sessionsearch["SessionSearch"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_sessionstore_ts["SessionStore.ts"]
    center -->|"imports"| N_sqlite_sessionstore_sessionstore["SessionStore"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ChromaSync]] - `imports` [EXTRACTED]
- [[ChromaSync.ts]] - `imports_from` [EXTRACTED]
- [[ChromaUnavailableError]] - `imports` [EXTRACTED]
- [[FormattingService]] - `imports` [EXTRACTED]
- [[FormattingService.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[ModeManager]] - `imports` [EXTRACTED]
- [[ModeManager.ts]] - `imports_from` [EXTRACTED]
- [[ResultFormatter]] - `imports` [EXTRACTED]
- [[ResultFormatter.ts]] - `imports_from` [EXTRACTED]
- [[SearchManager]] - `contains` [EXTRACTED]
- [[SearchManager.timeline-anchor.test.ts]] - `imports_from` [EXTRACTED]
- [[SearchRoutes.ts]] - `imports_from` [EXTRACTED]
- [[SessionSearch]] - `imports` [EXTRACTED]
- [[SessionSearch.ts]] - `imports_from` [EXTRACTED]
- [[SessionStore]] - `imports` [EXTRACTED]
- [[SessionStore.ts]] - `imports_from` [EXTRACTED]
- [[TimelineService]] - `imports` [EXTRACTED]
- [[TimelineService.ts]] - `imports_from` [EXTRACTED]
- [[errors.ts_1]] - `imports_from` [EXTRACTED]
- [[estimateTokens()_1]] - `imports` [EXTRACTED]
- [[extractFirstFile()]] - `imports` [EXTRACTED]
- [[formatDate()_1]] - `imports` [EXTRACTED]
- [[formatDateTime()]] - `imports` [EXTRACTED]
- [[formatTime()_1]] - `imports` [EXTRACTED]
- [[getProjectContext()]] - `imports` [EXTRACTED]
- [[groupByDate()]] - `imports` [EXTRACTED]
- [[index.ts_5]] - `imports_from` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[project-name.ts]] - `imports_from` [EXTRACTED]
- [[timeline-formatting.ts]] - `imports_from` [EXTRACTED]
- [[types.ts_6]] - `imports_from` [EXTRACTED]
- [[worker-service.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[SearchManager.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None