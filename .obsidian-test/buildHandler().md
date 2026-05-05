---
source_file: "vendor/claude-mem/tests/worker/http/routes/memory-routes.test.ts"
type: "code"
community: "Community None"
degree: 2
location: "L91"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# buildHandler()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["buildHandler[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_tests_worker_http_routes_memory_routes_test_ts["memory-routes.test.ts"]
    center -->|"calls"| N_routes_memory_routes_test_capturechain["captureChain[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[captureChain()_1]] - `calls` [EXTRACTED]
- [[memory-routes.test.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[buildHandler()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None