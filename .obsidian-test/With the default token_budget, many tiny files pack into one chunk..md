---
source_file: "vendor/graphify/tests/test_chunking.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L258"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# With the default token_budget, many tiny files pack into one chunk.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["With the default token_budget, many tiny files pack into one chunk."]:::centerNode
    center -->|"rationale_for"| N_tests_test_chunking_test_corpus_parallel_token_budget_default_packs_files["test_corpus_parallel_token_budget_default_packs_files[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_corpus_parallel_token_budget_default_packs_files()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[With the default token_budget, many tiny files pack into one chunk.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None