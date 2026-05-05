---
source_file: "vendor/graphify/tests/test_languages.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L810"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Dynamic imports should have EXTRACTED confidence (they are deterministic string

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Dynamic imports should have EXTRACTED confidence [they are deterministic string"]:::centerNode
    center -->|"rationale_for"| N_tests_test_languages_test_ts_dynamic_import_confidence["test_ts_dynamic_import_confidence[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_ts_dynamic_import_confidence()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Dynamic imports should have EXTRACTED confidence (they are deterministic string]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None