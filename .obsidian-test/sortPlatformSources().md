---
source_file: "vendor/claude-mem/src/shared/platform-source.ts"
type: "code"
community: "Community None"
degree: 3
location: "L21"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# sortPlatformSources()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["sortPlatformSources[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_shared_platform_source_ts["platform-source.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_sqlite_sessionstore_ts["SessionStore.ts"]
    center -->|"calls"| N_sqlite_sessionstore_sessionstore_getprojectcatalog[".getProjectCatalog[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.getProjectCatalog()]] - `calls` [INFERRED]
- [[SessionStore.ts]] - `imports` [EXTRACTED]
- [[platform-source.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[sortPlatformSources()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None