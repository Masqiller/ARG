---
source_file: "vendor/claude-mem/tests/utils/project-name.test.ts"
type: "code"
community: "Community None"
degree: 3
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# project-name.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["project-name.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_project_name_ts["project-name.ts"]
    center -->|"imports"| N_utils_project_name_getprojectname["getProjectName[]"]
    center -->|"imports"| N_utils_project_name_getprojectcontext["getProjectContext[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[getProjectContext()]] - `imports` [EXTRACTED]
- [[getProjectName()]] - `imports` [EXTRACTED]
- [[project-name.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[project-name.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None