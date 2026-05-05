---
source_file: "vendor/claude-mem/src/services/server/ErrorHandler.ts"
type: "code"
community: "Community None"
degree: 4
location: "L24"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# createErrorResponse()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["createErrorResponse[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_server_error_handler_test_ts["error-handler.test.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_server_errorhandler_ts["ErrorHandler.ts"]
    center -->|"calls"| N_server_errorhandler_errorhandler["errorHandler[]"]
    center -->|"calls"| N_server_errorhandler_notfoundhandler["notFoundHandler[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ErrorHandler.ts]] - `contains` [EXTRACTED]
- [[error-handler.test.ts]] - `imports` [EXTRACTED]
- [[errorHandler()]] - `calls` [EXTRACTED]
- [[notFoundHandler()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[createErrorResponse()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None