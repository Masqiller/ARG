---
source_file: "vendor/claude-mem/tests/worker/http/routes/data-routes-coercion.test.ts"
type: "code"
community: "Community None"
degree: 6
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# data-routes-coercion.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["data-routes-coercion.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_routes_dataroutes_ts["DataRoutes.ts"]
    center -->|"imports"| N_routes_dataroutes_dataroutes["DataRoutes"]
    center -->|"contains"| N_routes_data_routes_coercion_test_createmockreqres["createMockReqRes[]"]
    center -->|"contains"| N_routes_data_routes_coercion_test_capturechain["captureChain[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[DataRoutes]] - `imports` [EXTRACTED]
- [[DataRoutes.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[captureChain()]] - `contains` [EXTRACTED]
- [[createMockReqRes()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[data-routes-coercion.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None