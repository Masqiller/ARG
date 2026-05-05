---
source_file: "vendor/claude-mem/src/utils/project-name.ts"
type: "code"
community: "Community None"
degree: 3
location: "L6"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# expandTilde()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["expandTilde[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_utils_project_name_ts["project-name.ts"]
    center -->|"calls"| N_utils_project_name_getprojectname["getProjectName[]"]
    center -->|"calls"| N_utils_project_name_getprojectcontext["getProjectContext[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[getProjectContext()]] - `calls` [EXTRACTED]
- [[getProjectName()]] - `calls` [EXTRACTED]
- [[project-name.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[expandTilde()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None