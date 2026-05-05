---
source_file: "vendor/graphify/tests/test_chunking.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L420"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# End-to-end: extract_corpus_parallel routes through adaptive retry,     so a chun

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["End-to-end: extract_corpus_parallel routes through adaptive retry,     so a chun"]:::centerNode
    center -->|"rationale_for"| N_tests_test_chunking_test_corpus_parallel_uses_adaptive_retry["test_corpus_parallel_uses_adaptive_retry[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_corpus_parallel_uses_adaptive_retry()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[End-to-end extract_corpus_parallel routes through adaptive retry,     so a chun]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None