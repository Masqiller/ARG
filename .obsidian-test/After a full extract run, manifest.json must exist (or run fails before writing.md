---
source_file: "vendor/graphify/tests/test_incremental.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L31"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# After a full extract run, manifest.json must exist (or run fails before writing

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["After a full extract run, manifest.json must exist [or run fails before writing"]:::centerNode
    center -->|"rationale_for"| N_tests_test_incremental_test_manifest_written_after_extract["test_manifest_written_after_extract[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_manifest_written_after_extract()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[After a full extract run, manifest.json must exist (or run fails before writing]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None