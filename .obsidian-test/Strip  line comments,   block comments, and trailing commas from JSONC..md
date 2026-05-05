---
source_file: "vendor/graphify/graphify/extract.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L52"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Strip // line comments, /* */ block comments, and trailing commas from JSONC.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Strip // line comments, /* */ block comments, and trailing commas from JSONC."]:::centerNode
    center -->|"rationale_for"| N_graphify_extract_strip_jsonc["_strip_jsonc[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_strip_jsonc()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Strip  line comments,   block comments, and trailing commas from JSONC.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None