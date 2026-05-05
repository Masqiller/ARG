---
source_file: "vendor/claude-mem/scripts/strip-comments.ts"
type: "code"
community: "Community None"
degree: 6
location: "L163"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# spliceRanges()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["spliceRanges[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_scripts_strip_comments_ts["strip-comments.ts"]
    center -->|"calls"| N_scripts_strip_comments_stripjslike["stripJsLike[]"]
    center -->|"calls"| N_scripts_strip_comments_collapseblanklines["collapseBlankLines[]"]
    center -->|"calls"| N_scripts_strip_comments_stripcss["stripCss[]"]
    center -->|"calls"| N_scripts_strip_comments_stripmarkdown["stripMarkdown[]"]
    center -->|"calls"| N_scripts_strip_comments_striphtml["stripHtml[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[collapseBlankLines()]] - `calls` [EXTRACTED]
- [[strip-comments.ts]] - `contains` [EXTRACTED]
- [[stripCss()]] - `calls` [EXTRACTED]
- [[stripHtml()]] - `calls` [EXTRACTED]
- [[stripJsLike()]] - `calls` [EXTRACTED]
- [[stripMarkdown()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[spliceRanges()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None