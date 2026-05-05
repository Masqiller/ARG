---
source_file: "vendor/external_plugins/caveman/skills/compress/scripts/compress.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L60"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Strip outer ```markdown ... ``` fence when it wraps the entire output.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Strip outer ```markdown ... ``` fence when it wraps the entire output."]:::centerNode
    center -->|"rationale_for"| N_scripts_compress_strip_llm_wrapper["strip_llm_wrapper[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[strip_llm_wrapper()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Strip outer ```markdown ... ``` fence when it wraps the entire output.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None