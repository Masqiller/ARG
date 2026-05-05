---
source_file: "vendor/claude-mem/src/services/server/ErrorHandler.ts"
type: "code"
community: "Community None"
degree: 6
location: "L12"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# AppError

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["AppError"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_server_error_handler_test_ts["error-handler.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_search_errors_ts["errors.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_baseroutehandler_ts["BaseRouteHandler.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_sqlite_sessionsearch_ts["SessionSearch.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_server_errorhandler_ts["ErrorHandler.ts"]
    center -->|"method"| N_server_errorhandler_apperror_constructor[".constructor[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.constructor()_40]] - `method` [EXTRACTED]
- [[BaseRouteHandler.ts]] - `imports` [EXTRACTED]
- [[ErrorHandler.ts]] - `contains` [EXTRACTED]
- [[SessionSearch.ts]] - `imports` [EXTRACTED]
- [[error-handler.test.ts]] - `imports` [EXTRACTED]
- [[errors.ts_1]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[AppError]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None