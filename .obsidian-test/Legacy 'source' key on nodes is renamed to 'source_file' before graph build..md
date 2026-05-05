---
source_file: "vendor/graphify/tests/test_build.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L33"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Legacy 'source' key on nodes is renamed to 'source_file' before graph build.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Legacy 'source' key on nodes is renamed to 'source_file' before graph build."]:::centerNode
    center -->|"rationale_for"| N_tests_test_build_test_legacy_node_source_canonicalized["test_legacy_node_source_canonicalized[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_legacy_node_source_canonicalized()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Legacy 'source' key on nodes is renamed to 'source_file' before graph build.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None