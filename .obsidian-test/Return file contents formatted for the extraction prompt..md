---
source_file: "vendor/graphify/graphify/llm.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L81"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Return file contents formatted for the extraction prompt.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Return file contents formatted for the extraction prompt."]:::centerNode
    center -->|"rationale_for"| N_graphify_llm_read_files["_read_files[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_read_files()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Return file contents formatted for the extraction prompt.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None