---
source_file: "vendor/graphify/tests/test_chunking.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L234"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# token_budget=None should fall back to legacy fixed-count chunking.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["token_budget=None should fall back to legacy fixed-count chunking."]:::centerNode
    center -->|"rationale_for"| N_tests_test_chunking_test_corpus_parallel_legacy_mode_when_token_budget_is_none["test_corpus_parallel_legacy_mode_when_token_budget_is_none[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_corpus_parallel_legacy_mode_when_token_budget_is_none()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[token_budget=None should fall back to legacy fixed-count chunking.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None