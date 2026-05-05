---
source_file: "vendor/graphify/tests/bench_extract.py"
type: "code"
community: "Community None"
degree: 2
location: "L88"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _format_languages()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["_format_languages[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_bench_extract_py["bench_extract.py"]
    center -->|"calls"| N_tests_bench_extract_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[bench_extract.py]] - `contains` [EXTRACTED]
- [[main()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_format_languages()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None