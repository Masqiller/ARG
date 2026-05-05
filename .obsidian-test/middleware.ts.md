---
source_file: "vendor/claude-mem/src/services/worker/http/middleware.ts"
type: "code"
community: "Community None"
degree: 7
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# middleware.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["middleware.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_paths_ts["paths.ts"]
    center -->|"imports"| N_shared_paths_getpackageroot["getPackageRoot[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"contains"| N_http_middleware_createmiddleware["createMiddleware[]"]
    center -->|"contains"| N_http_middleware_requirelocalhost["requireLocalhost[]"]
    center -->|"contains"| N_http_middleware_summarizerequestbody["summarizeRequestBody[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[createMiddleware()]] - `contains` [EXTRACTED]
- [[getPackageRoot()]] - `imports` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[paths.ts]] - `imports_from` [EXTRACTED]
- [[requireLocalhost()]] - `contains` [EXTRACTED]
- [[summarizeRequestBody()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[middleware.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None