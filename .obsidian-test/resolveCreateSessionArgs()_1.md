---
source_file: "vendor/claude-mem/src/services/sqlite/sessions/create.ts"
type: "code"
community: "Community None"
degree: 3
location: "L6"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# resolveCreateSessionArgs()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["resolveCreateSessionArgs[]"]:::centerNode
    center -->|"calls"| N_shared_platform_source_normalizeplatformsource["normalizePlatformSource[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_sqlite_sessions_create_ts["create.ts"]
    center -->|"calls"| N_sessions_create_createsdksession["createSDKSession[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[create.ts]] - `contains` [EXTRACTED]
- [[createSDKSession()]] - `calls` [EXTRACTED]
- [[normalizePlatformSource()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[resolveCreateSessionArgs()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None