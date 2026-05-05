---
source_file: "vendor/graphify/graphify/dedup.py"
type: "code"
community: "Community None"
degree: 5
location: "L34"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _shingles()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["_shingles[]"]:::centerNode
    center -->|"calls"| N_tests_test_dedup_test_shingles_produces_trigrams["test_shingles_produces_trigrams[]"]
    center -->|"calls"| N_tests_test_dedup_test_shingles_short_string["test_shingles_short_string[]"]
    center -->|"contains"| N_vendor_graphify_graphify_dedup_py["dedup.py"]
    center -->|"calls"| N_graphify_dedup_make_minhash["_make_minhash[]"]
    center -->|"rationale_for"| N_graphify_dedup_rationale_35["Return k-gram character shingles of text."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Return k-gram character shingles of text.]] - `rationale_for` [EXTRACTED]
- [[_make_minhash()]] - `calls` [EXTRACTED]
- [[dedup.py]] - `contains` [EXTRACTED]
- [[test_shingles_produces_trigrams()]] - `calls` [INFERRED]
- [[test_shingles_short_string()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_shingles()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None