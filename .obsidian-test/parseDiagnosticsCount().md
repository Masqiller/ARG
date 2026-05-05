---
source_file: "vendor/claude-mem/scripts/strip-comments.ts"
type: "code"
community: "Community None"
degree: 2
location: "L120"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# parseDiagnosticsCount()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["parseDiagnosticsCount[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_scripts_strip_comments_ts["strip-comments.ts"]
    center -->|"calls"| N_scripts_strip_comments_stripjslike["stripJsLike[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[strip-comments.ts]] - `contains` [EXTRACTED]
- [[stripJsLike()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[parseDiagnosticsCount()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None