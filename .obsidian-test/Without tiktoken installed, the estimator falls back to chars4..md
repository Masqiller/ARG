---
source_file: "vendor/graphify/tests/test_chunking.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L128"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Without tiktoken installed, the estimator falls back to chars/4.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Without tiktoken installed, the estimator falls back to chars/4."]:::centerNode
    center -->|"rationale_for"| N_tests_test_chunking_test_estimate_file_tokens_falls_back_to_chars_when_no_tokenizer["test_estimate_file_tokens_falls_back_to_chars_when_no_tokenizer[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_estimate_file_tokens_falls_back_to_chars_when_no_tokenizer()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Without tiktoken installed, the estimator falls back to chars4.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None