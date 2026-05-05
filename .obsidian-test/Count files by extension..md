---
source_file: "vendor/graphify/tests/bench_extract.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L39"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Count files by extension.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Count files by extension."]:::centerNode
    center -->|"rationale_for"| N_tests_bench_extract_count_by_ext["_count_by_ext[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_count_by_ext()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Count files by extension.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None