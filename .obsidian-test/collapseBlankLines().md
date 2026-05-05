---
source_file: "vendor/claude-mem/scripts/strip-comments.ts"
type: "code"
community: "Community None"
degree: 3
location: "L159"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# collapseBlankLines()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["collapseBlankLines[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_scripts_strip_comments_ts["strip-comments.ts"]
    center -->|"calls"| N_scripts_strip_comments_spliceranges["spliceRanges[]"]
    center -->|"calls"| N_scripts_strip_comments_striphashcomments["stripHashComments[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[spliceRanges()]] - `calls` [EXTRACTED]
- [[strip-comments.ts]] - `contains` [EXTRACTED]
- [[stripHashComments()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[collapseBlankLines()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None