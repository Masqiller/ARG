---
source_file: "vendor/claude-mem/tests/server/error-handler.test.ts"
type: "code"
community: "Community None"
degree: 7
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# error-handler.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["error-handler.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_server_errorhandler_ts["ErrorHandler.ts"]
    center -->|"imports"| N_server_errorhandler_apperror["AppError"]
    center -->|"imports"| N_server_errorhandler_createerrorresponse["createErrorResponse[]"]
    center -->|"imports"| N_server_errorhandler_errorhandler["errorHandler[]"]
    center -->|"imports"| N_server_errorhandler_notfoundhandler["notFoundHandler[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[AppError]] - `imports` [EXTRACTED]
- [[ErrorHandler.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[createErrorResponse()]] - `imports` [EXTRACTED]
- [[errorHandler()]] - `imports` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[notFoundHandler()]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[error-handler.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None