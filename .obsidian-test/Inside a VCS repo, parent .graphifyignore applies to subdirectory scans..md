---
source_file: "vendor/graphify/tests/test_detect.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L160"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Inside a VCS repo, parent .graphifyignore applies to subdirectory scans.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Inside a VCS repo, parent .graphifyignore applies to subdirectory scans."]:::centerNode
    center -->|"rationale_for"| N_tests_test_detect_test_graphifyignore_discovered_from_parent_in_vcs["test_graphifyignore_discovered_from_parent_in_vcs[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_graphifyignore_discovered_from_parent_in_vcs()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Inside a VCS repo, parent .graphifyignore applies to subdirectory scans.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None