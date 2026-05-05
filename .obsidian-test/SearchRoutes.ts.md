---
source_file: "vendor/claude-mem/src/services/worker/http/routes/SearchRoutes.ts"
type: "code"
community: "Community None"
degree: 20
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# SearchRoutes.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 20

## Architecture Graph
```mermaid
graph LR
    center["SearchRoutes.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_worker_http_routes_search_routes_welcome_hint_test_ts["search-routes-welcome-hint.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_timeline_formatting_ts["timeline-formatting.ts"]
    center -->|"imports"| N_shared_timeline_formatting_groupbydate["groupByDate[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_paths_ts["paths.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_settingsdefaultsmanager_ts["SettingsDefaultsManager.ts"]
    center -->|"imports"| N_shared_settingsdefaultsmanager_settingsdefaultsmanager["SettingsDefaultsManager"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_searchmanager_ts["SearchManager.ts"]
    center -->|"imports"| N_worker_searchmanager_searchmanager["SearchManager"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_baseroutehandler_ts["BaseRouteHandler.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_middleware_validatebody_ts["validateBody.ts"]
    center -->|"imports"| N_middleware_validatebody_validatebody["validateBody[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_context_observationcompiler_ts["ObservationCompiler.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[BaseRouteHandler.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[ObservationCompiler.ts]] - `imports_from` [EXTRACTED]
- [[SearchManager]] - `imports` [EXTRACTED]
- [[SearchManager.ts]] - `imports_from` [EXTRACTED]
- [[SearchRoutes]] - `contains` [EXTRACTED]
- [[SettingsDefaultsManager]] - `imports` [EXTRACTED]
- [[SettingsDefaultsManager.ts]] - `imports_from` [EXTRACTED]
- [[countObservationsByProjects()]] - `imports` [EXTRACTED]
- [[getCachedSettings()]] - `contains` [EXTRACTED]
- [[groupByDate()]] - `imports` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[paths.ts]] - `imports_from` [EXTRACTED]
- [[projectsHaveObservations()]] - `contains` [EXTRACTED]
- [[search-routes-welcome-hint.test.ts]] - `imports_from` [EXTRACTED]
- [[timeline-formatting.ts]] - `imports_from` [EXTRACTED]
- [[types.ts_6]] - `imports_from` [EXTRACTED]
- [[validateBody()]] - `imports` [EXTRACTED]
- [[validateBody.ts]] - `imports_from` [EXTRACTED]
- [[worker-service.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[SearchRoutes.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None