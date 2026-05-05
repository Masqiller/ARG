---
source_file: "vendor/graphify/graphify/llm.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L97"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Strip optional markdown fences and parse JSON. Returns empty fragment on failure

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Strip optional markdown fences and parse JSON. Returns empty fragment on failure"]:::centerNode
    center -->|"rationale_for"| N_graphify_llm_parse_llm_json["_parse_llm_json[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_parse_llm_json()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Strip optional markdown fences and parse JSON. Returns empty fragment on failure]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None