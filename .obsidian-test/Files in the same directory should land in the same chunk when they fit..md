---
source_file: "vendor/graphify/tests/test_chunking.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L59"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Files in the same directory should land in the same chunk when they fit.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Files in the same directory should land in the same chunk when they fit."]:::centerNode
    center -->|"rationale_for"| N_tests_test_chunking_test_pack_chunks_groups_by_directory["test_pack_chunks_groups_by_directory[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_pack_chunks_groups_by_directory()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Files in the same directory should land in the same chunk when they fit.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None