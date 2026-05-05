---
source_file: "vendor/claude-mem/src/services/sqlite/sessions/create.ts"
type: "code"
community: "Community None"
degree: 3
location: "L16"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# createSDKSession()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["createSDKSession[]"]:::centerNode
    center -->|"calls"| N_shared_platform_source_normalizeplatformsource["normalizePlatformSource[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_sqlite_sessions_create_ts["create.ts"]
    center -->|"calls"| N_sessions_create_resolvecreatesessionargs["resolveCreateSessionArgs[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[create.ts]] - `contains` [EXTRACTED]
- [[normalizePlatformSource()]] - `calls` [INFERRED]
- [[resolveCreateSessionArgs()_1]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[createSDKSession()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None