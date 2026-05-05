---
source_file: "vendor/claude-mem/src/services/infrastructure/GracefulShutdown.ts"
type: "code"
community: "Community None"
degree: 2
location: "L60"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# closeHttpServer()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["closeHttpServer[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_infrastructure_gracefulshutdown_ts["GracefulShutdown.ts"]
    center -->|"calls"| N_infrastructure_gracefulshutdown_performgracefulshutdown["performGracefulShutdown[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[GracefulShutdown.ts]] - `contains` [EXTRACTED]
- [[performGracefulShutdown()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[closeHttpServer()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None