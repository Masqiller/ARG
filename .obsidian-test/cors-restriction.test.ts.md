---
source_file: "vendor/claude-mem/tests/worker/middleware/cors-restriction.test.ts"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# cors-restriction.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["cors-restriction.test.ts"]:::centerNode
    center -->|"contains"| N_middleware_cors_restriction_test_isallowedorigin["isAllowedOrigin[]"]
    center -->|"contains"| N_middleware_cors_restriction_test_buildproductioncorsmiddleware["buildProductionCorsMiddleware[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[buildProductionCorsMiddleware()]] - `contains` [EXTRACTED]
- [[isAllowedOrigin()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[cors-restriction.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None