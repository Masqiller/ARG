---
source_file: "vendor/graphify/tests/test_extract.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L181"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Unqualified cross-file calls must not guess between duplicate helper names.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Unqualified cross-file calls must not guess between duplicate helper names."]:::centerNode
    center -->|"rationale_for"| N_tests_test_extract_test_cross_file_calls_skip_ambiguous_duplicate_labels["test_cross_file_calls_skip_ambiguous_duplicate_labels[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_cross_file_calls_skip_ambiguous_duplicate_labels()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Unqualified cross-file calls must not guess between duplicate helper names.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None