---
source_file: "vendor/graphify/tests/test_chunking.py"
type: "code"
community: "Community None"
degree: 3
location: "L343"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_adaptive_retry_recurses_for_persistent_truncation()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_adaptive_retry_recurses_for_persistent_truncation[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_chunking_py["test_chunking.py"]
    center -->|"rationale_for"| N_tests_test_chunking_rationale_344["When even the half-chunk truncates, split again. With 8 files and a     truncati"]
    center -->|"calls"| N_graphify_llm_extract_with_adaptive_retry["_extract_with_adaptive_retry[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[When even the half-chunk truncates, split again. With 8 files and a     truncati]] - `rationale_for` [EXTRACTED]
- [[_extract_with_adaptive_retry()]] - `calls` [INFERRED]
- [[test_chunking.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_adaptive_retry_recurses_for_persistent_truncation()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None