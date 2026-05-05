---
source_file: "vendor/claude-mem/scripts/regenerate-claude-md.ts"
type: "code"
community: "Community None"
degree: 5
location: "L349"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# regenerateFolder()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["regenerateFolder[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_scripts_regenerate_claude_md_ts["regenerate-claude-md.ts"]
    center -->|"calls"| N_scripts_regenerate_claude_md_findobservationsbyfolder["findObservationsByFolder[]"]
    center -->|"calls"| N_scripts_regenerate_claude_md_formatobservationsforclaudemd["formatObservationsForClaudeMd[]"]
    center -->|"calls"| N_scripts_regenerate_claude_md_writeclaudemdtofolderforregenerate["writeClaudeMdToFolderForRegenerate[]"]
    center -->|"calls"| N_scripts_regenerate_claude_md_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[findObservationsByFolder()_1]] - `calls` [EXTRACTED]
- [[formatObservationsForClaudeMd()_1]] - `calls` [EXTRACTED]
- [[main()_39]] - `calls` [EXTRACTED]
- [[regenerate-claude-md.ts]] - `contains` [EXTRACTED]
- [[writeClaudeMdToFolderForRegenerate()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[regenerateFolder()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None