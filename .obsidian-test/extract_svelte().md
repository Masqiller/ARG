---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 6
location: "L1740"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# extract_svelte()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["extract_svelte[]"]:::centerNode
    center -->|"calls"| N_str["str"]
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_make_id["_make_id[]"]
    center -->|"calls"| N_graphify_extract_load_tsconfig_aliases["_load_tsconfig_aliases[]"]
    center -->|"calls"| N_graphify_extract_extract_generic["_extract_generic[]"]
    center -->|"rationale_for"| N_graphify_extract_rationale_1741["Extract imports from .svelte files: script-block via JS AST + template regex fal"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Extract imports from .svelte files script-block via JS AST + template regex fal]] - `rationale_for` [EXTRACTED]
- [[_extract_generic()]] - `calls` [EXTRACTED]
- [[_load_tsconfig_aliases()]] - `calls` [EXTRACTED]
- [[_make_id()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]
- [[str]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extract_svelte()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None