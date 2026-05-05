---
source_file: "vendor/graphify/tests/test_chunking.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L154"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# With max_concurrency > 1, total wall time should be ~max(chunk times),     not t

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["With max_concurrency > 1, total wall time should be ~max[chunk times],     not t"]:::centerNode
    center -->|"rationale_for"| N_tests_test_chunking_test_corpus_parallel_runs_chunks_concurrently["test_corpus_parallel_runs_chunks_concurrently[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_corpus_parallel_runs_chunks_concurrently()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[With max_concurrency  1, total wall time should be ~max(chunk times),     not t]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None