---
source_file: "vendor/graphify/tests/test_incremental.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L54"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Without manifest.json, full scan message is shown (not incremental).

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Without manifest.json, full scan message is shown [not incremental]."]:::centerNode
    center -->|"rationale_for"| N_tests_test_incremental_test_no_incremental_without_manifest["test_no_incremental_without_manifest[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_no_incremental_without_manifest()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Without manifest.json, full scan message is shown (not incremental).]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None