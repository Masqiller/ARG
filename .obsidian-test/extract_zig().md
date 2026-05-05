---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 6
location: "L3019"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# extract_zig()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["extract_zig[]"]:::centerNode
    center -->|"calls"| N_fixtures_sample_graph_add_node[".add_node[]"]
    center -->|"calls"| N_str["str"]
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_make_id["_make_id[]"]
    center -->|"calls"| N_graphify_extract_file_stem["_file_stem[]"]
    center -->|"rationale_for"| N_graphify_extract_rationale_3020["Extract functions, structs, enums, unions, and imports from a .zig file."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.add_node()]] - `calls` [INFERRED]
- [[Extract functions, structs, enums, unions, and imports from a .zig file.]] - `rationale_for` [EXTRACTED]
- [[_file_stem()]] - `calls` [EXTRACTED]
- [[_make_id()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]
- [[str]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extract_zig()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None