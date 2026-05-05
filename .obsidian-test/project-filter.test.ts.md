---
source_file: "vendor/claude-mem/tests/utils/project-filter.test.ts"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# project-filter.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["project-filter.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_project_filter_ts["project-filter.ts"]
    center -->|"imports"| N_utils_project_filter_isprojectexcluded["isProjectExcluded[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[isProjectExcluded()]] - `imports` [EXTRACTED]
- [[project-filter.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[project-filter.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None