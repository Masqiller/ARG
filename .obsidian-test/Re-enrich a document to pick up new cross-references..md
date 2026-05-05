---
source_file: "vendor/graphify/worked/example/raw/api.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L68"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Re-enrich a document to pick up new cross-references.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Re-enrich a document to pick up new cross-references."]:::centerNode
    center -->|"rationale_for"| N_raw_api_handle_enrich["handle_enrich[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[handle_enrich()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Re-enrich a document to pick up new cross-references.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None