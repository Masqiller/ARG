---
source_file: "vendor/graphify/tests/test_chunking.py"
type: "code"
community: "Community None"
degree: 3
location: "L317"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_adaptive_retry_splits_when_finish_reason_length()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_adaptive_retry_splits_when_finish_reason_length[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_chunking_py["test_chunking.py"]
    center -->|"rationale_for"| N_tests_test_chunking_rationale_318["finish_reason='length' triggers split-in-half. Both halves succeed     on the se"]
    center -->|"calls"| N_graphify_llm_extract_with_adaptive_retry["_extract_with_adaptive_retry[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_extract_with_adaptive_retry()]] - `calls` [INFERRED]
- [[finish_reason='length' triggers split-in-half. Both halves succeed     on the se]] - `rationale_for` [EXTRACTED]
- [[test_chunking.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_adaptive_retry_splits_when_finish_reason_length()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None