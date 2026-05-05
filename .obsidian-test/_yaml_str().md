---
source_file: "vendor/graphify/graphify/ingest.py"
type: "code"
community: "Community None"
degree: 6
location: "L13"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _yaml_str()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["_yaml_str[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_ingest_py["ingest.py"]
    center -->|"calls"| N_graphify_ingest_fetch_tweet["_fetch_tweet[]"]
    center -->|"calls"| N_graphify_ingest_fetch_webpage["_fetch_webpage[]"]
    center -->|"calls"| N_graphify_ingest_fetch_arxiv["_fetch_arxiv[]"]
    center -->|"calls"| N_graphify_ingest_save_query_result["save_query_result[]"]
    center -->|"rationale_for"| N_graphify_ingest_rationale_14["Escape a string for embedding in a YAML double-quoted scalar."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Escape a string for embedding in a YAML double-quoted scalar.]] - `rationale_for` [EXTRACTED]
- [[_fetch_arxiv()]] - `calls` [EXTRACTED]
- [[_fetch_tweet()]] - `calls` [EXTRACTED]
- [[_fetch_webpage()]] - `calls` [EXTRACTED]
- [[ingest.py]] - `contains` [EXTRACTED]
- [[save_query_result()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_yaml_str()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None