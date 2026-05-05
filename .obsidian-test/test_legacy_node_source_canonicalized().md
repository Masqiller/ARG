---
source_file: "vendor/graphify/tests/test_build.py"
type: "code"
community: "Community None"
degree: 2
location: "L32"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_legacy_node_source_canonicalized()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_legacy_node_source_canonicalized[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_build_py["test_build.py"]
    center -->|"rationale_for"| N_tests_test_build_rationale_33["Legacy 'source' key on nodes is renamed to 'source_file' before graph build."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Legacy 'source' key on nodes is renamed to 'source_file' before graph build.]] - `rationale_for` [EXTRACTED]
- [[test_build.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_legacy_node_source_canonicalized()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None