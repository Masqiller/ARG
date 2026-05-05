---
source_file: "vendor/graphify/graphify/extract.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L840"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Extract require('module') from Lua variable_declaration nodes.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Extract require['module'] from Lua variable_declaration nodes."]:::centerNode
    center -->|"rationale_for"| N_graphify_extract_import_lua["_import_lua[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_import_lua()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Extract require('module') from Lua variable_declaration nodes.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None