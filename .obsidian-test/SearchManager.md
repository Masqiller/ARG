---
source_file: "vendor/claude-mem/src/services/worker/SearchManager.ts"
type: "code"
community: "Community None"
degree: 23
location: "L23"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# SearchManager

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 23

## Architecture Graph
```mermaid
graph LR
    center["SearchManager"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_worker_searchmanager_timeline_anchor_test_ts["SearchManager.timeline-anchor.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_searchmanager_ts["SearchManager.ts"]
    center -->|"method"| N_worker_searchmanager_searchmanager_constructor[".constructor[]"]
    center -->|"method"| N_worker_searchmanager_searchmanager_getorchestrator[".getOrchestrator[]"]
    center -->|"method"| N_worker_searchmanager_searchmanager_getformatter[".getFormatter[]"]
    center -->|"method"| N_worker_searchmanager_searchmanager_getsessionstore[".getSessionStore[]"]
    center -->|"method"| N_worker_searchmanager_searchmanager_querychroma[".queryChroma[]"]
    center -->|"method"| N_worker_searchmanager_searchmanager_searchchromafortimeline[".searchChromaForTimeline[]"]
    center -->|"method"| N_worker_searchmanager_searchmanager_normalizeparams[".normalizeParams[]"]
    center -->|"method"| N_worker_searchmanager_searchmanager_search[".search[]"]
    center -->|"method"| N_worker_searchmanager_searchmanager_parsenumericanchor[".parseNumericAnchor[]"]
    center -->|"method"| N_worker_searchmanager_searchmanager_timeline[".timeline[]"]
    center -->|"method"| N_worker_searchmanager_searchmanager_decisions[".decisions[]"]
    center -->|"method"| N_worker_searchmanager_searchmanager_changes[".changes[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.changes()]] - `method` [EXTRACTED]
- [[.constructor()_6]] - `method` [EXTRACTED]
- [[.decisions()]] - `method` [EXTRACTED]
- [[.getContextTimeline()]] - `method` [EXTRACTED]
- [[.getFormatter()]] - `method` [EXTRACTED]
- [[.getOrchestrator()]] - `method` [EXTRACTED]
- [[.getRecentContext()]] - `method` [EXTRACTED]
- [[.getSessionStore()]] - `method` [EXTRACTED]
- [[.getTimelineByQuery()]] - `method` [EXTRACTED]
- [[.howItWorks()]] - `method` [EXTRACTED]
- [[.normalizeParams()]] - `method` [EXTRACTED]
- [[.parseNumericAnchor()]] - `method` [EXTRACTED]
- [[.queryChroma()]] - `method` [EXTRACTED]
- [[.search()]] - `method` [EXTRACTED]
- [[.searchChromaForTimeline()]] - `method` [EXTRACTED]
- [[.searchObservations()]] - `method` [EXTRACTED]
- [[.searchSessions()]] - `method` [EXTRACTED]
- [[.searchUserPrompts()]] - `method` [EXTRACTED]
- [[.timeline()]] - `method` [EXTRACTED]
- [[SearchManager.timeline-anchor.test.ts]] - `imports` [EXTRACTED]
- [[SearchManager.ts]] - `contains` [EXTRACTED]
- [[SearchRoutes.ts]] - `imports` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[SearchManager]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None