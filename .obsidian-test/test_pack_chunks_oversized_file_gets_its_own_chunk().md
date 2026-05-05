---
source_file: "vendor/graphify/tests/test_chunking.py"
type: "code"
community: "Community None"
degree: 3
location: "L86"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_pack_chunks_oversized_file_gets_its_own_chunk()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_pack_chunks_oversized_file_gets_its_own_chunk[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_chunking_py["test_chunking.py"]
    center -->|"rationale_for"| N_tests_test_chunking_rationale_87["A file larger than the budget can't be split — it goes alone in a chunk."]
    center -->|"calls"| N_graphify_llm_pack_chunks_by_tokens["_pack_chunks_by_tokens[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[A file larger than the budget can't be split — it goes alone in a chunk.]] - `rationale_for` [EXTRACTED]
- [[_pack_chunks_by_tokens()]] - `calls` [INFERRED]
- [[test_chunking.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_pack_chunks_oversized_file_gets_its_own_chunk()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None