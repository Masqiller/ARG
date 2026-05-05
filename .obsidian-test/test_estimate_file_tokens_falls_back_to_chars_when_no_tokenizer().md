---
source_file: "vendor/graphify/tests/test_chunking.py"
type: "code"
community: "Community None"
degree: 2
location: "L127"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_estimate_file_tokens_falls_back_to_chars_when_no_tokenizer()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_estimate_file_tokens_falls_back_to_chars_when_no_tokenizer[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_chunking_py["test_chunking.py"]
    center -->|"rationale_for"| N_tests_test_chunking_rationale_128["Without tiktoken installed, the estimator falls back to chars/4."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Without tiktoken installed, the estimator falls back to chars4.]] - `rationale_for` [EXTRACTED]
- [[test_chunking.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_estimate_file_tokens_falls_back_to_chars_when_no_tokenizer()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None