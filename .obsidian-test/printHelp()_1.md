---
source_file: "vendor/claude-mem/scripts/strip-comments.ts"
type: "code"
community: "Community None"
degree: 2
location: "L43"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# printHelp()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["printHelp[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_scripts_strip_comments_ts["strip-comments.ts"]
    center -->|"calls"| N_scripts_strip_comments_parseargs["parseArgs[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[parseArgs()_1]] - `calls` [EXTRACTED]
- [[strip-comments.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[printHelp()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None