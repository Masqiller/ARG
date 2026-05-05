---
source_file: "vendor/claude-mem/src/utils/project-filter.ts"
type: "code"
community: "Community None"
degree: 2
location: "L5"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# globToRegex()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["globToRegex[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_utils_project_filter_ts["project-filter.ts"]
    center -->|"calls"| N_utils_project_filter_isprojectexcluded["isProjectExcluded[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[isProjectExcluded()]] - `calls` [EXTRACTED]
- [[project-filter.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[globToRegex()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None