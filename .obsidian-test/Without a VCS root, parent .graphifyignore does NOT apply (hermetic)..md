---
source_file: "vendor/graphify/tests/test_detect.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L142"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Without a VCS root, parent .graphifyignore does NOT apply (hermetic).

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Without a VCS root, parent .graphifyignore does NOT apply [hermetic]."]:::centerNode
    center -->|"rationale_for"| N_tests_test_detect_test_graphifyignore_hermetic_without_vcs["test_graphifyignore_hermetic_without_vcs[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_graphifyignore_hermetic_without_vcs()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Without a VCS root, parent .graphifyignore does NOT apply (hermetic).]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None