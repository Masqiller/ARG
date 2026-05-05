---
source_file: "vendor/graphify/tests/test_dedup.py"
type: "code"
community: "Community None"
degree: 2
location: "L21"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_shingles_produces_trigrams()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_shingles_produces_trigrams[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_dedup_py["test_dedup.py"]
    center -->|"calls"| N_graphify_dedup_shingles["_shingles[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_shingles()]] - `calls` [INFERRED]
- [[test_dedup.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_shingles_produces_trigrams()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None