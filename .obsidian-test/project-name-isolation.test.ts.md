---
source_file: "vendor/claude-mem/tests/utils/project-name-isolation.test.ts"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# project-name-isolation.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["project-name-isolation.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_project_name_ts["project-name.ts"]
    center -->|"imports"| N_utils_project_name_getprojectname["getProjectName[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[getProjectName()]] - `imports` [EXTRACTED]
- [[project-name.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[project-name-isolation.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None