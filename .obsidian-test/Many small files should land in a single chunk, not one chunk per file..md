---
source_file: "vendor/graphify/tests/test_chunking.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L23"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Many small files should land in a single chunk, not one chunk per file.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Many small files should land in a single chunk, not one chunk per file."]:::centerNode
    center -->|"rationale_for"| N_tests_test_chunking_test_pack_chunks_packs_small_files_together["test_pack_chunks_packs_small_files_together[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_pack_chunks_packs_small_files_together()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Many small files should land in a single chunk, not one chunk per file.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None