---
source_file: "vendor/graphify/tests/test_detect.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L108"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Comment lines in .graphifyignore are not treated as patterns.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Comment lines in .graphifyignore are not treated as patterns."]:::centerNode
    center -->|"rationale_for"| N_tests_test_detect_test_graphifyignore_comments_ignored["test_graphifyignore_comments_ignored[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_graphifyignore_comments_ignored()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Comment lines in .graphifyignore are not treated as patterns.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None