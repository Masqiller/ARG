---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 4
location: "L839"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _import_lua()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["_import_lua[]"]:::centerNode
    center -->|"calls"| N_str["str"]
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_read_text["_read_text[]"]
    center -->|"rationale_for"| N_graphify_extract_rationale_840["Extract require['module'] from Lua variable_declaration nodes."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Extract require('module') from Lua variable_declaration nodes.]] - `rationale_for` [EXTRACTED]
- [[_read_text()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]
- [[str]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_import_lua()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None