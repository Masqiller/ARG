---
source_file: "vendor/graphify/worked/example/raw/api.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L12"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Accept a list of file paths, run the full pipeline on each,     and return a sum

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Accept a list of file paths, run the full pipeline on each,     and return a sum"]:::centerNode
    center -->|"rationale_for"| N_raw_api_handle_upload["handle_upload[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[handle_upload()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Accept a list of file paths, run the full pipeline on each,     and return a sum]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None