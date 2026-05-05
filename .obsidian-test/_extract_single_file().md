---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 7
location: "L4062"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _extract_single_file()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["_extract_single_file[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_raise_recursion_limit["_raise_recursion_limit[]"]
    center -->|"calls"| N_graphify_extract_safe_extract["_safe_extract[]"]
    center -->|"calls"| N_graphify_extract_get_extractor["_get_extractor[]"]
    center -->|"rationale_for"| N_graphify_extract_rationale_4063["Worker function for parallel extraction. Runs in a subprocess.      Must be at m"]
    center -->|"calls"| N_graphify_cache_load_cached["load_cached[]"]
    center -->|"calls"| N_graphify_cache_save_cached["save_cached[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Worker function for parallel extraction. Runs in a subprocess.      Must be at m]] - `rationale_for` [EXTRACTED]
- [[_get_extractor()]] - `calls` [EXTRACTED]
- [[_raise_recursion_limit()]] - `calls` [EXTRACTED]
- [[_safe_extract()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]
- [[load_cached()]] - `calls` [INFERRED]
- [[save_cached()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_extract_single_file()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None