---
source_file: "vendor/graphify/tests/test_chunking.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L397"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# A single file that truncates can't be split further — surface a     warning and

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["A single file that truncates can't be split further — surface a     warning and"]:::centerNode
    center -->|"rationale_for"| N_tests_test_chunking_test_adaptive_retry_single_file_truncation_does_not_recurse["test_adaptive_retry_single_file_truncation_does_not_recurse[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_adaptive_retry_single_file_truncation_does_not_recurse()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[A single file that truncates can't be split further — surface a     warning and]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None