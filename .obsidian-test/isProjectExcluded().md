---
source_file: "vendor/claude-mem/src/utils/project-filter.ts"
type: "code"
community: "Community None"
degree: 7
location: "L23"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# isProjectExcluded()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["isProjectExcluded[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_utils_project_filter_test_ts["project-filter.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_shared_should_track_project_ts["should-track-project.ts"]
    center -->|"calls"| N_shared_should_track_project_shouldtrackproject["shouldTrackProject[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_shared_ts["shared.ts"]
    center -->|"calls"| N_http_shared_ingestobservation["ingestObservation[]"]
    center -->|"contains"| N_vendor_claude_mem_src_utils_project_filter_ts["project-filter.ts"]
    center -->|"calls"| N_utils_project_filter_globtoregex["globToRegex[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[globToRegex()]] - `calls` [EXTRACTED]
- [[ingestObservation()]] - `calls` [INFERRED]
- [[project-filter.test.ts]] - `imports` [EXTRACTED]
- [[project-filter.ts]] - `contains` [EXTRACTED]
- [[shared.ts]] - `imports` [EXTRACTED]
- [[should-track-project.ts]] - `imports` [EXTRACTED]
- [[shouldTrackProject()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[isProjectExcluded()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None