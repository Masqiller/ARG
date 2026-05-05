---
source_file: "vendor/claude-mem/src/services/worker/http/shared.ts"
type: "code"
community: "Community None"
degree: 4
location: "L21"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# IngestEventBus

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["IngestEventBus"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_http_shared_ts["shared.ts"]
    center -->|"method"| N_http_shared_ingesteventbus_constructor[".constructor[]"]
    center -->|"method"| N_http_shared_ingesteventbus_takerecentsummarystored[".takeRecentSummaryStored[]"]
    center -->|"method"| N_http_shared_ingesteventbus_evictexpiredstored[".evictExpiredStored[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.constructor()_18]] - `method` [EXTRACTED]
- [[.evictExpiredStored()]] - `method` [EXTRACTED]
- [[.takeRecentSummaryStored()]] - `method` [EXTRACTED]
- [[shared.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[IngestEventBus]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None