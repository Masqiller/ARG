---
source_file: "vendor/claude-mem/src/shared/platform-source.ts"
type: "code"
community: "Community None"
degree: 2
location: "L3"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# sanitizeRawSource()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["sanitizeRawSource[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_shared_platform_source_ts["platform-source.ts"]
    center -->|"calls"| N_shared_platform_source_normalizeplatformsource["normalizePlatformSource[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[normalizePlatformSource()]] - `calls` [EXTRACTED]
- [[platform-source.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[sanitizeRawSource()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None