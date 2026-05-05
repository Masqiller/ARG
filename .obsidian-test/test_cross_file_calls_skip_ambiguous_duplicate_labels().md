---
source_file: "vendor/graphify/tests/test_extract.py"
type: "code"
community: "Community None"
degree: 3
location: "L180"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_cross_file_calls_skip_ambiguous_duplicate_labels()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_cross_file_calls_skip_ambiguous_duplicate_labels[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_extract_py["test_extract.py"]
    center -->|"rationale_for"| N_tests_test_extract_rationale_181["Unqualified cross-file calls must not guess between duplicate helper names."]
    center -->|"calls"| N_graphify_extract_extract["extract[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Unqualified cross-file calls must not guess between duplicate helper names.]] - `rationale_for` [EXTRACTED]
- [[extract()]] - `calls` [INFERRED]
- [[test_extract.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_cross_file_calls_skip_ambiguous_duplicate_labels()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None