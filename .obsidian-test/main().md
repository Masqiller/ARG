---
source_file: "vendor/graphify/tests/bench_extract.py"
type: "code"
community: "Community None"
degree: 6
location: "L114"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# main()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["main[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_bench_extract_py["bench_extract.py"]
    center -->|"calls"| N_tests_bench_extract_count_by_ext["_count_by_ext[]"]
    center -->|"calls"| N_tests_bench_extract_format_languages["_format_languages[]"]
    center -->|"calls"| N_tests_bench_extract_run_extraction["_run_extraction[]"]
    center -->|"calls"| N_graphify_extract_collect_files["collect_files[]"]
    center -->|"calls"| N_graphify_cache_clear_cache["clear_cache[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_count_by_ext()]] - `calls` [EXTRACTED]
- [[_format_languages()]] - `calls` [EXTRACTED]
- [[_run_extraction()]] - `calls` [EXTRACTED]
- [[bench_extract.py]] - `contains` [EXTRACTED]
- [[clear_cache()]] - `calls` [INFERRED]
- [[collect_files()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[main()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None