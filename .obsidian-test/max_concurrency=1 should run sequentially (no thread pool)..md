---
source_file: "vendor/graphify/tests/test_chunking.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L181"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# max_concurrency=1 should run sequentially (no thread pool).

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["max_concurrency=1 should run sequentially [no thread pool]."]:::centerNode
    center -->|"rationale_for"| N_tests_test_chunking_test_corpus_parallel_sequential_when_max_concurrency_is_one["test_corpus_parallel_sequential_when_max_concurrency_is_one[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_corpus_parallel_sequential_when_max_concurrency_is_one()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[max_concurrency=1 should run sequentially (no thread pool).]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None