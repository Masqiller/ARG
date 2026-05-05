---
source_file: "vendor/graphify/tests/test_chunking.py"
type: "code"
community: "Community None"
degree: 3
location: "L370"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_adaptive_retry_caps_at_max_depth()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_adaptive_retry_caps_at_max_depth[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_chunking_py["test_chunking.py"]
    center -->|"rationale_for"| N_tests_test_chunking_rationale_371["If everything truncates, retries stop at max_depth — partial result     kept wit"]
    center -->|"calls"| N_graphify_llm_extract_with_adaptive_retry["_extract_with_adaptive_retry[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[If everything truncates, retries stop at max_depth — partial result     kept wit]] - `rationale_for` [EXTRACTED]
- [[_extract_with_adaptive_retry()]] - `calls` [INFERRED]
- [[test_chunking.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_adaptive_retry_caps_at_max_depth()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None