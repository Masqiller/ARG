---
source_file: "vendor/graphify/graphify/llm.py"
type: "code"
community: "Community None"
degree: 8
location: "L275"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# _extract_with_adaptive_retry()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["_extract_with_adaptive_retry[]"]:::centerNode
    center -->|"calls"| N_tests_test_chunking_test_adaptive_retry_returns_directly_when_not_truncated["test_adaptive_retry_returns_directly_when_not_truncated[]"]
    center -->|"calls"| N_tests_test_chunking_test_adaptive_retry_splits_when_finish_reason_length["test_adaptive_retry_splits_when_finish_reason_length[]"]
    center -->|"calls"| N_tests_test_chunking_test_adaptive_retry_recurses_for_persistent_truncation["test_adaptive_retry_recurses_for_persistent_truncation[]"]
    center -->|"calls"| N_tests_test_chunking_test_adaptive_retry_caps_at_max_depth["test_adaptive_retry_caps_at_max_depth[]"]
    center -->|"calls"| N_tests_test_chunking_test_adaptive_retry_single_file_truncation_does_not_recurse["test_adaptive_retry_single_file_truncation_does_not_recurse[]"]
    center -->|"contains"| N_vendor_graphify_graphify_llm_py["llm.py"]
    center -->|"calls"| N_graphify_llm_extract_files_direct["extract_files_direct[]"]
    center -->|"rationale_for"| N_graphify_llm_rationale_284["Extract a chunk; if the response is truncated [`finish_reason=\"length\"`],     sp"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Extract a chunk; if the response is truncated (`finish_reason=length`),     sp]] - `rationale_for` [EXTRACTED]
- [[extract_files_direct()]] - `calls` [EXTRACTED]
- [[llm.py]] - `contains` [EXTRACTED]
- [[test_adaptive_retry_caps_at_max_depth()]] - `calls` [INFERRED]
- [[test_adaptive_retry_recurses_for_persistent_truncation()]] - `calls` [INFERRED]
- [[test_adaptive_retry_returns_directly_when_not_truncated()]] - `calls` [INFERRED]
- [[test_adaptive_retry_single_file_truncation_does_not_recurse()]] - `calls` [INFERRED]
- [[test_adaptive_retry_splits_when_finish_reason_length()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_extract_with_adaptive_retry()]]
```

#graphify/code #graphify/INFERRED #community/Community_None