---
source_file: "vendor/graphify/tests/test_chunking.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L87"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# A file larger than the budget can't be split — it goes alone in a chunk.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["A file larger than the budget can't be split — it goes alone in a chunk."]:::centerNode
    center -->|"rationale_for"| N_tests_test_chunking_test_pack_chunks_oversized_file_gets_its_own_chunk["test_pack_chunks_oversized_file_gets_its_own_chunk[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_pack_chunks_oversized_file_gets_its_own_chunk()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[A file larger than the budget can't be split — it goes alone in a chunk.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None