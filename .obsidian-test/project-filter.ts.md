---
source_file: "vendor/claude-mem/src/utils/project-filter.ts"
type: "code"
community: "Community None"
degree: 5
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# project-filter.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["project-filter.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_utils_project_filter_test_ts["project-filter.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_should_track_project_ts["should-track-project.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_shared_ts["shared.ts"]
    center -->|"contains"| N_utils_project_filter_globtoregex["globToRegex[]"]
    center -->|"contains"| N_utils_project_filter_isprojectexcluded["isProjectExcluded[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[globToRegex()]] - `contains` [EXTRACTED]
- [[isProjectExcluded()]] - `contains` [EXTRACTED]
- [[project-filter.test.ts]] - `imports_from` [EXTRACTED]
- [[shared.ts]] - `imports_from` [EXTRACTED]
- [[should-track-project.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[project-filter.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None