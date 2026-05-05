---
source_file: "vendor/claude-mem/scripts/regenerate-claude-md.ts"
type: "code"
community: "Community None"
degree: 3
location: "L163"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# extractRelevantFile()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["extractRelevantFile[]"]:::centerNode
    center -->|"calls"| N_shared_path_utils_isdirectchild["isDirectChild[]"]
    center -->|"contains"| N_vendor_claude_mem_scripts_regenerate_claude_md_ts["regenerate-claude-md.ts"]
    center -->|"calls"| N_scripts_regenerate_claude_md_formatobservationsforclaudemd["formatObservationsForClaudeMd[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[formatObservationsForClaudeMd()_1]] - `calls` [EXTRACTED]
- [[isDirectChild()]] - `calls` [INFERRED]
- [[regenerate-claude-md.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extractRelevantFile()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None