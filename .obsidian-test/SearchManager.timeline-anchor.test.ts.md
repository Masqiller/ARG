---
source_file: "vendor/claude-mem/tests/worker/SearchManager.timeline-anchor.test.ts"
type: "code"
community: "Community None"
degree: 13
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# SearchManager.timeline-anchor.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 13

## Architecture Graph
```mermaid
graph LR
    center["SearchManager.timeline-anchor.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_sessionstore_ts["SessionStore.ts"]
    center -->|"imports"| N_sqlite_sessionstore_sessionstore["SessionStore"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_sessionsearch_ts["SessionSearch.ts"]
    center -->|"imports"| N_sqlite_sessionsearch_sessionsearch["SessionSearch"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_formattingservice_ts["FormattingService.ts"]
    center -->|"imports"| N_worker_formattingservice_formattingservice["FormattingService"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_timelineservice_ts["TimelineService.ts"]
    center -->|"imports"| N_worker_timelineservice_timelineservice["TimelineService"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_searchmanager_ts["SearchManager.ts"]
    center -->|"imports"| N_worker_searchmanager_searchmanager["SearchManager"]
    center -->|"contains"| N_worker_searchmanager_timeline_anchor_test_seedobservations["seedObservations[]"]
    center -->|"contains"| N_worker_searchmanager_timeline_anchor_test_extractobservationids["extractObservationIds[]"]
    center -->|"contains"| N_worker_searchmanager_timeline_anchor_test_expectanchorrendered["expectAnchorRendered[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[FormattingService]] - `imports` [EXTRACTED]
- [[FormattingService.ts]] - `imports_from` [EXTRACTED]
- [[SearchManager]] - `imports` [EXTRACTED]
- [[SearchManager.ts]] - `imports_from` [EXTRACTED]
- [[SessionSearch]] - `imports` [EXTRACTED]
- [[SessionSearch.ts]] - `imports_from` [EXTRACTED]
- [[SessionStore]] - `imports` [EXTRACTED]
- [[SessionStore.ts]] - `imports_from` [EXTRACTED]
- [[TimelineService]] - `imports` [EXTRACTED]
- [[TimelineService.ts]] - `imports_from` [EXTRACTED]
- [[expectAnchorRendered()]] - `contains` [EXTRACTED]
- [[extractObservationIds()]] - `contains` [EXTRACTED]
- [[seedObservations()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[SearchManager.timeline-anchor.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None