---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 3
location: "L51"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _strip_jsonc()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["_strip_jsonc[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_read_tsconfig_aliases["_read_tsconfig_aliases[]"]
    center -->|"rationale_for"| N_graphify_extract_rationale_52["Strip // line comments, /* */ block comments, and trailing commas from JSONC."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Strip  line comments,   block comments, and trailing commas from JSONC.]] - `rationale_for` [EXTRACTED]
- [[_read_tsconfig_aliases()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_strip_jsonc()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None