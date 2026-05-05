---
source_file: "vendor/claude-mem/scripts/regenerate-claude-md.ts"
type: "code"
community: "Community None"
degree: 2
location: "L45"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getTypeIcon()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["getTypeIcon[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_scripts_regenerate_claude_md_ts["regenerate-claude-md.ts"]
    center -->|"calls"| N_scripts_regenerate_claude_md_formatobservationsforclaudemd["formatObservationsForClaudeMd[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[formatObservationsForClaudeMd()_1]] - `calls` [EXTRACTED]
- [[regenerate-claude-md.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getTypeIcon()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None