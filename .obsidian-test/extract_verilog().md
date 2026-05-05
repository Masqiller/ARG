---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 6
location: "L1953"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# extract_verilog()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["extract_verilog[]"]:::centerNode
    center -->|"calls"| N_fixtures_sample_graph_add_node[".add_node[]"]
    center -->|"calls"| N_str["str"]
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_make_id["_make_id[]"]
    center -->|"calls"| N_graphify_extract_file_stem["_file_stem[]"]
    center -->|"rationale_for"| N_graphify_extract_rationale_1954["Extract modules, functions, tasks, package imports, and instantiations from .v/."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.add_node()]] - `calls` [INFERRED]
- [[Extract modules, functions, tasks, package imports, and instantiations from .v.]] - `rationale_for` [EXTRACTED]
- [[_file_stem()]] - `calls` [EXTRACTED]
- [[_make_id()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]
- [[str]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extract_verilog()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None