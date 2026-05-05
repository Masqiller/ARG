---
source_file: "vendor/graphify/tests/bench_extract.py"
type: "code"
community: "Community None"
degree: 4
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# bench_extract.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["bench_extract.py"]:::centerNode
    center -->|"contains"| N_tests_bench_extract_count_by_ext["_count_by_ext[]"]
    center -->|"contains"| N_tests_bench_extract_format_languages["_format_languages[]"]
    center -->|"contains"| N_tests_bench_extract_run_extraction["_run_extraction[]"]
    center -->|"contains"| N_tests_bench_extract_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_count_by_ext()]] - `contains` [EXTRACTED]
- [[_format_languages()]] - `contains` [EXTRACTED]
- [[_run_extraction()]] - `contains` [EXTRACTED]
- [[main()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[bench_extract.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None