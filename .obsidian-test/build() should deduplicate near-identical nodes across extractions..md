---
source_file: "vendor/graphify/tests/test_dedup.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L126"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# build() should deduplicate near-identical nodes across extractions.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["build[] should deduplicate near-identical nodes across extractions."]:::centerNode
    center -->|"rationale_for"| N_tests_test_dedup_test_build_calls_dedup["test_build_calls_dedup[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_build_calls_dedup()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[build() should deduplicate near-identical nodes across extractions.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None