---
source_file: "vendor/graphify/tests/test_chunking.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L344"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# When even the half-chunk truncates, split again. With 8 files and a     truncati

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["When even the half-chunk truncates, split again. With 8 files and a     truncati"]:::centerNode
    center -->|"rationale_for"| N_tests_test_chunking_test_adaptive_retry_recurses_for_persistent_truncation["test_adaptive_retry_recurses_for_persistent_truncation[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_adaptive_retry_recurses_for_persistent_truncation()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[When even the half-chunk truncates, split again. With 8 files and a     truncati]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None