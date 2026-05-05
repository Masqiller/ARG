---
source_file: "vendor/graphify/tests/test_dedup.py"
type: "code"
community: "Community None"
degree: 2
location: "L125"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_build_calls_dedup()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_build_calls_dedup[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_dedup_py["test_dedup.py"]
    center -->|"rationale_for"| N_tests_test_dedup_rationale_126["build[] should deduplicate near-identical nodes across extractions."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[build() should deduplicate near-identical nodes across extractions.]] - `rationale_for` [EXTRACTED]
- [[test_dedup.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_build_calls_dedup()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None