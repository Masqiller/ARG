---
source_file: "vendor/graphify/tests/test_extract.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L13"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Same input always produces same output.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Same input always produces same output."]:::centerNode
    center -->|"rationale_for"| N_tests_test_extract_test_make_id_consistent["test_make_id_consistent[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_make_id_consistent()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Same input always produces same output.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None