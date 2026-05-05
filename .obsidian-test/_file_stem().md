---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 15
location: "L39"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _file_stem()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 15

## Architecture Graph
```mermaid
graph LR
    center["_file_stem[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_import_js["_import_js[]"]
    center -->|"calls"| N_graphify_extract_extract_generic["_extract_generic[]"]
    center -->|"calls"| N_graphify_extract_extract_python_rationale["_extract_python_rationale[]"]
    center -->|"calls"| N_graphify_extract_extract_verilog["extract_verilog[]"]
    center -->|"calls"| N_graphify_extract_extract_julia["extract_julia[]"]
    center -->|"calls"| N_graphify_extract_extract_fortran["extract_fortran[]"]
    center -->|"calls"| N_graphify_extract_extract_go["extract_go[]"]
    center -->|"calls"| N_graphify_extract_extract_rust["extract_rust[]"]
    center -->|"calls"| N_graphify_extract_extract_zig["extract_zig[]"]
    center -->|"calls"| N_graphify_extract_extract_powershell["extract_powershell[]"]
    center -->|"calls"| N_graphify_extract_resolve_cross_file_imports["_resolve_cross_file_imports[]"]
    center -->|"calls"| N_graphify_extract_extract_objc["extract_objc[]"]
    center -->|"calls"| N_graphify_extract_extract_elixir["extract_elixir[]"]
    center -->|"rationale_for"| N_graphify_extract_rationale_40["Return a stem qualified with the parent directory name to avoid ID collisions"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Return a stem qualified with the parent directory name to avoid ID collisions]] - `rationale_for` [EXTRACTED]
- [[_extract_generic()]] - `calls` [EXTRACTED]
- [[_extract_python_rationale()]] - `calls` [EXTRACTED]
- [[_import_js()]] - `calls` [EXTRACTED]
- [[_resolve_cross_file_imports()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]
- [[extract_elixir()]] - `calls` [EXTRACTED]
- [[extract_fortran()]] - `calls` [EXTRACTED]
- [[extract_go()]] - `calls` [EXTRACTED]
- [[extract_julia()]] - `calls` [EXTRACTED]
- [[extract_objc()]] - `calls` [EXTRACTED]
- [[extract_powershell()]] - `calls` [EXTRACTED]
- [[extract_rust()]] - `calls` [EXTRACTED]
- [[extract_verilog()]] - `calls` [EXTRACTED]
- [[extract_zig()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_file_stem()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None