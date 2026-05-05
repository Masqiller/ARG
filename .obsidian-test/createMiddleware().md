---
source_file: "vendor/claude-mem/src/services/worker/http/middleware.ts"
type: "code"
community: "Community None"
degree: 3
location: "L8"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# createMiddleware()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["createMiddleware[]"]:::centerNode
    center -->|"calls"| N_shared_paths_getpackageroot["getPackageRoot[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_http_middleware_ts["middleware.ts"]
    center -->|"calls"| N_server_server_server_setupmiddleware[".setupMiddleware[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.setupMiddleware()]] - `calls` [INFERRED]
- [[getPackageRoot()]] - `calls` [INFERRED]
- [[middleware.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[createMiddleware()]]
```

#graphify/code #graphify/INFERRED #community/Community_None