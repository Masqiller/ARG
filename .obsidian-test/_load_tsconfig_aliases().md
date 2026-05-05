---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 7
location: "L126"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _load_tsconfig_aliases()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["_load_tsconfig_aliases[]"]:::centerNode
    center -->|"calls"| N_str["str"]
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_read_tsconfig_aliases["_read_tsconfig_aliases[]"]
    center -->|"calls"| N_graphify_extract_import_js["_import_js[]"]
    center -->|"calls"| N_graphify_extract_dynamic_import_js["_dynamic_import_js[]"]
    center -->|"calls"| N_graphify_extract_extract_svelte["extract_svelte[]"]
    center -->|"rationale_for"| N_graphify_extract_rationale_127["Walk up from start_dir to find tsconfig.json and return compilerOptions.paths al"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Walk up from start_dir to find tsconfig.json and return compilerOptions.paths al]] - `rationale_for` [EXTRACTED]
- [[_dynamic_import_js()]] - `calls` [EXTRACTED]
- [[_import_js()]] - `calls` [EXTRACTED]
- [[_read_tsconfig_aliases()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]
- [[extract_svelte()]] - `calls` [EXTRACTED]
- [[str]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_load_tsconfig_aliases()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None