---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 5
location: "L78"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _read_tsconfig_aliases()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["_read_tsconfig_aliases[]"]:::centerNode
    center -->|"calls"| N_str["str"]
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_strip_jsonc["_strip_jsonc[]"]
    center -->|"calls"| N_graphify_extract_load_tsconfig_aliases["_load_tsconfig_aliases[]"]
    center -->|"rationale_for"| N_graphify_extract_rationale_79["Recursively read path aliases from a tsconfig, following extends chains.      Ch"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Recursively read path aliases from a tsconfig, following extends chains.      Ch]] - `rationale_for` [EXTRACTED]
- [[_load_tsconfig_aliases()]] - `calls` [EXTRACTED]
- [[_strip_jsonc()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]
- [[str]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_read_tsconfig_aliases()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None