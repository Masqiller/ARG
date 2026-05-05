---
source_file: "vendor/graphify/tests/test_chunking.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L38"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# When the next file would push the chunk past the budget, start a new chunk.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["When the next file would push the chunk past the budget, start a new chunk."]:::centerNode
    center -->|"rationale_for"| N_tests_test_chunking_test_pack_chunks_starts_new_chunk_when_budget_would_overflow["test_pack_chunks_starts_new_chunk_when_budget_would_overflow[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_pack_chunks_starts_new_chunk_when_budget_would_overflow()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[When the next file would push the chunk past the budget, start a new chunk.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None