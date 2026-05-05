---
source_file: "vendor/graphify/tests/test_chunking.py"
type: "code"
community: "Community None"
degree: 3
location: "L257"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_corpus_parallel_token_budget_default_packs_files()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_corpus_parallel_token_budget_default_packs_files[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_chunking_py["test_chunking.py"]
    center -->|"rationale_for"| N_tests_test_chunking_rationale_258["With the default token_budget, many tiny files pack into one chunk."]
    center -->|"calls"| N_graphify_llm_extract_corpus_parallel["extract_corpus_parallel[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[With the default token_budget, many tiny files pack into one chunk.]] - `rationale_for` [EXTRACTED]
- [[extract_corpus_parallel()]] - `calls` [INFERRED]
- [[test_chunking.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_corpus_parallel_token_budget_default_packs_files()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None