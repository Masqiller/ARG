---
source_file: "vendor/claude-mem/tests/worker/http/routes/search-routes-welcome-hint.test.ts"
type: "code"
community: "Community None"
degree: 6
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# search-routes-welcome-hint.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["search-routes-welcome-hint.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_routes_searchroutes_ts["SearchRoutes.ts"]
    center -->|"imports"| N_routes_searchroutes_searchroutes["SearchRoutes"]
    center -->|"contains"| N_routes_search_routes_welcome_hint_test_createmockres["createMockRes[]"]
    center -->|"contains"| N_routes_search_routes_welcome_hint_test_capturecontextinjecthandler["captureContextInjectHandler[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[SearchRoutes]] - `imports` [EXTRACTED]
- [[SearchRoutes.ts]] - `imports_from` [EXTRACTED]
- [[captureContextInjectHandler()]] - `contains` [EXTRACTED]
- [[createMockRes()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[search-routes-welcome-hint.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None