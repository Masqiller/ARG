---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 19
location: "L933"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _extract_generic()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 19

## Architecture Graph
```mermaid
graph LR
    center["_extract_generic[]"]:::centerNode
    center -->|"calls"| N_fixtures_sample_graph_add_node[".add_node[]"]
    center -->|"calls"| N_str["str"]
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_make_id["_make_id[]"]
    center -->|"calls"| N_graphify_extract_file_stem["_file_stem[]"]
    center -->|"calls"| N_graphify_extract_extract_python["extract_python[]"]
    center -->|"calls"| N_graphify_extract_extract_js["extract_js[]"]
    center -->|"calls"| N_graphify_extract_extract_svelte["extract_svelte[]"]
    center -->|"calls"| N_graphify_extract_extract_java["extract_java[]"]
    center -->|"calls"| N_graphify_extract_extract_c["extract_c[]"]
    center -->|"calls"| N_graphify_extract_extract_cpp["extract_cpp[]"]
    center -->|"calls"| N_graphify_extract_extract_ruby["extract_ruby[]"]
    center -->|"calls"| N_graphify_extract_extract_csharp["extract_csharp[]"]
    center -->|"calls"| N_graphify_extract_extract_kotlin["extract_kotlin[]"]
    center -->|"calls"| N_graphify_extract_extract_scala["extract_scala[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.add_node()]] - `calls` [INFERRED]
- [[Generic AST extractor driven by LanguageConfig.]] - `rationale_for` [EXTRACTED]
- [[_file_stem()]] - `calls` [EXTRACTED]
- [[_make_id()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]
- [[extract_c()]] - `calls` [EXTRACTED]
- [[extract_cpp()]] - `calls` [EXTRACTED]
- [[extract_csharp()]] - `calls` [EXTRACTED]
- [[extract_java()]] - `calls` [EXTRACTED]
- [[extract_js()]] - `calls` [EXTRACTED]
- [[extract_kotlin()]] - `calls` [EXTRACTED]
- [[extract_lua()]] - `calls` [EXTRACTED]
- [[extract_php()]] - `calls` [EXTRACTED]
- [[extract_python()]] - `calls` [EXTRACTED]
- [[extract_ruby()]] - `calls` [EXTRACTED]
- [[extract_scala()]] - `calls` [EXTRACTED]
- [[extract_svelte()]] - `calls` [EXTRACTED]
- [[extract_swift()]] - `calls` [EXTRACTED]
- [[str]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_extract_generic()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None