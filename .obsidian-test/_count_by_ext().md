---
source_file: "vendor/graphify/tests/bench_extract.py"
type: "code"
community: "Community None"
degree: 3
location: "L38"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _count_by_ext()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["_count_by_ext[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_bench_extract_py["bench_extract.py"]
    center -->|"calls"| N_tests_bench_extract_main["main[]"]
    center -->|"rationale_for"| N_tests_bench_extract_rationale_39["Count files by extension."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Count files by extension.]] - `rationale_for` [EXTRACTED]
- [[bench_extract.py]] - `contains` [EXTRACTED]
- [[main()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_count_by_ext()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None