---
source_file: "vendor/claude-mem/src/utils/project-name.ts"
type: "code"
community: "Community None"
degree: 5
location: "L13"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getProjectName()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["getProjectName[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_utils_project_name_test_ts["project-name.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_tests_utils_project_name_isolation_test_ts["project-name-isolation.test.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_utils_project_name_ts["project-name.ts"]
    center -->|"calls"| N_utils_project_name_expandtilde["expandTilde[]"]
    center -->|"calls"| N_utils_project_name_getprojectcontext["getProjectContext[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[expandTilde()]] - `calls` [EXTRACTED]
- [[getProjectContext()]] - `calls` [EXTRACTED]
- [[project-name-isolation.test.ts]] - `imports` [EXTRACTED]
- [[project-name.test.ts]] - `imports` [EXTRACTED]
- [[project-name.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getProjectName()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None