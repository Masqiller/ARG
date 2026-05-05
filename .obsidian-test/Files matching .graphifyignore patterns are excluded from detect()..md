---
source_file: "vendor/graphify/tests/test_detect.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L84"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Files matching .graphifyignore patterns are excluded from detect().

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Files matching .graphifyignore patterns are excluded from detect[]."]:::centerNode
    center -->|"rationale_for"| N_tests_test_detect_test_graphifyignore_excludes_file["test_graphifyignore_excludes_file[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_graphifyignore_excludes_file()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Files matching .graphifyignore patterns are excluded from detect().]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None