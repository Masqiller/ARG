---
source_file: "vendor/graphify/tests/test_chunking.py"
type: "code"
community: "Community None"
degree: 3
location: "L233"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_corpus_parallel_legacy_mode_when_token_budget_is_none()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_corpus_parallel_legacy_mode_when_token_budget_is_none[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_chunking_py["test_chunking.py"]
    center -->|"rationale_for"| N_tests_test_chunking_rationale_234["token_budget=None should fall back to legacy fixed-count chunking."]
    center -->|"calls"| N_graphify_llm_extract_corpus_parallel["extract_corpus_parallel[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[extract_corpus_parallel()]] - `calls` [INFERRED]
- [[test_chunking.py]] - `contains` [EXTRACTED]
- [[token_budget=None should fall back to legacy fixed-count chunking.]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_corpus_parallel_legacy_mode_when_token_budget_is_none()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None