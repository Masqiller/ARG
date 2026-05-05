---
source_file: "vendor/graphify/tests/test_chunking.py"
type: "code"
community: "Community None"
degree: 2
location: "L100"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_pack_chunks_rejects_non_positive_budget()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_pack_chunks_rejects_non_positive_budget[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_chunking_py["test_chunking.py"]
    center -->|"calls"| N_graphify_llm_pack_chunks_by_tokens["_pack_chunks_by_tokens[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_pack_chunks_by_tokens()]] - `calls` [INFERRED]
- [[test_chunking.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_pack_chunks_rejects_non_positive_budget()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None