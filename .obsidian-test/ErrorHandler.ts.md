---
source_file: "vendor/claude-mem/src/services/server/ErrorHandler.ts"
type: "code"
community: "Community None"
degree: 12
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ErrorHandler.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 12

## Architecture Graph
```mermaid
graph LR
    center["ErrorHandler.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_server_error_handler_test_ts["error-handler.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_search_errors_ts["errors.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_baseroutehandler_ts["BaseRouteHandler.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_sessionsearch_ts["SessionSearch.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"contains"| N_server_errorhandler_apperror["AppError"]
    center -->|"contains"| N_server_errorhandler_createerrorresponse["createErrorResponse[]"]
    center -->|"contains"| N_server_errorhandler_errorhandler["errorHandler[]"]
    center -->|"contains"| N_server_errorhandler_notfoundhandler["notFoundHandler[]"]
    center -->|"contains"| N_server_errorhandler_asynchandler["asyncHandler[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_server_server_ts["Server.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[AppError]] - `contains` [EXTRACTED]
- [[BaseRouteHandler.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[Server.ts]] - `imports_from` [EXTRACTED]
- [[SessionSearch.ts]] - `imports_from` [EXTRACTED]
- [[asyncHandler()]] - `contains` [EXTRACTED]
- [[createErrorResponse()]] - `contains` [EXTRACTED]
- [[error-handler.test.ts]] - `imports_from` [EXTRACTED]
- [[errorHandler()]] - `contains` [EXTRACTED]
- [[errors.ts_1]] - `imports_from` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[notFoundHandler()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ErrorHandler.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None