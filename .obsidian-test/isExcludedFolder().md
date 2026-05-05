---
source_file: "vendor/claude-mem/src/utils/claude-md-utils.ts"
type: "code"
community: "Community None"
degree: 2
location: "L211"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# isExcludedFolder()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["isExcludedFolder[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_utils_claude_md_utils_ts["claude-md-utils.ts"]
    center -->|"calls"| N_utils_claude_md_utils_updatefolderclaudemdfiles["updateFolderClaudeMdFiles[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[claude-md-utils.ts]] - `contains` [EXTRACTED]
- [[updateFolderClaudeMdFiles()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[isExcludedFolder()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None