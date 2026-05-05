---
source_file: "vendor/graphify/tests/test_chunking.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L205"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# A single chunk raising should be logged but not abort the run.     Other chunks'

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["A single chunk raising should be logged but not abort the run.     Other chunks'"]:::centerNode
    center -->|"rationale_for"| N_tests_test_chunking_test_corpus_parallel_continues_after_chunk_failure["test_corpus_parallel_continues_after_chunk_failure[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_corpus_parallel_continues_after_chunk_failure()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[A single chunk raising should be logged but not abort the run.     Other chunks']]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None