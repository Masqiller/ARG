---
source_file: "vendor/claude-mem/scripts/translate-readme/index.ts"
type: "code"
community: "Community None"
degree: 2
location: "L16"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# hashContent()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["hashContent[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_scripts_translate_readme_index_ts["index.ts"]
    center -->|"calls"| N_translate_readme_index_translatereadme["translateReadme[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[index.ts_14]] - `contains` [EXTRACTED]
- [[translateReadme()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[hashContent()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None