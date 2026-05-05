---
source_file: "vendor/claude-mem/scripts/regenerate-claude-md.ts"
type: "code"
community: "Community None"
degree: 3
location: "L240"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# writeClaudeMdToFolderForRegenerate()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["writeClaudeMdToFolderForRegenerate[]"]:::centerNode
    center -->|"calls"| N_utils_claude_md_utils_replacetaggedcontent["replaceTaggedContent[]"]
    center -->|"contains"| N_vendor_claude_mem_scripts_regenerate_claude_md_ts["regenerate-claude-md.ts"]
    center -->|"calls"| N_scripts_regenerate_claude_md_regeneratefolder["regenerateFolder[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[regenerate-claude-md.ts]] - `contains` [EXTRACTED]
- [[regenerateFolder()_1]] - `calls` [EXTRACTED]
- [[replaceTaggedContent()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[writeClaudeMdToFolderForRegenerate()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None