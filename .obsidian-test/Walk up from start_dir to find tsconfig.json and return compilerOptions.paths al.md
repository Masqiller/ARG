---
source_file: "vendor/graphify/graphify/extract.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L127"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Walk up from start_dir to find tsconfig.json and return compilerOptions.paths al

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Walk up from start_dir to find tsconfig.json and return compilerOptions.paths al"]:::centerNode
    center -->|"rationale_for"| N_graphify_extract_load_tsconfig_aliases["_load_tsconfig_aliases[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_load_tsconfig_aliases()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Walk up from start_dir to find tsconfig.json and return compilerOptions.paths al]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None