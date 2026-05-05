---
source_file: "vendor/graphify/graphify/ingest.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L28"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Classify the URL for targeted extraction.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Classify the URL for targeted extraction."]:::centerNode
    center -->|"rationale_for"| N_graphify_ingest_detect_url_type["_detect_url_type[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_detect_url_type()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Classify the URL for targeted extraction.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None