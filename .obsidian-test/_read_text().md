---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 18
location: "L191"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _read_text()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 18

## Architecture Graph
```mermaid
graph LR
    center["_read_text[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_resolve_name["_resolve_name[]"]
    center -->|"calls"| N_graphify_extract_import_python["_import_python[]"]
    center -->|"calls"| N_graphify_extract_import_js["_import_js[]"]
    center -->|"calls"| N_graphify_extract_dynamic_import_js["_dynamic_import_js[]"]
    center -->|"calls"| N_graphify_extract_import_c["_import_c[]"]
    center -->|"calls"| N_graphify_extract_import_csharp["_import_csharp[]"]
    center -->|"calls"| N_graphify_extract_import_kotlin["_import_kotlin[]"]
    center -->|"calls"| N_graphify_extract_import_scala["_import_scala[]"]
    center -->|"calls"| N_graphify_extract_import_php["_import_php[]"]
    center -->|"calls"| N_graphify_extract_get_c_func_name["_get_c_func_name[]"]
    center -->|"calls"| N_graphify_extract_get_cpp_func_name["_get_cpp_func_name[]"]
    center -->|"calls"| N_graphify_extract_js_extra_walk["_js_extra_walk[]"]
    center -->|"calls"| N_graphify_extract_csharp_extra_walk["_csharp_extra_walk[]"]
    center -->|"calls"| N_graphify_extract_swift_extra_walk["_swift_extra_walk[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_csharp_extra_walk()]] - `calls` [EXTRACTED]
- [[_dynamic_import_js()]] - `calls` [EXTRACTED]
- [[_get_c_func_name()]] - `calls` [EXTRACTED]
- [[_get_cpp_func_name()]] - `calls` [EXTRACTED]
- [[_import_c()]] - `calls` [EXTRACTED]
- [[_import_csharp()]] - `calls` [EXTRACTED]
- [[_import_js()]] - `calls` [EXTRACTED]
- [[_import_kotlin()]] - `calls` [EXTRACTED]
- [[_import_lua()]] - `calls` [EXTRACTED]
- [[_import_php()]] - `calls` [EXTRACTED]
- [[_import_python()]] - `calls` [EXTRACTED]
- [[_import_scala()]] - `calls` [EXTRACTED]
- [[_import_swift()]] - `calls` [EXTRACTED]
- [[_js_extra_walk()]] - `calls` [EXTRACTED]
- [[_read_csharp_type_name()]] - `calls` [EXTRACTED]
- [[_resolve_name()]] - `calls` [EXTRACTED]
- [[_swift_extra_walk()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_read_text()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None