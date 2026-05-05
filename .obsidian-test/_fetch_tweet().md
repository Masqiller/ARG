---
source_file: "vendor/graphify/graphify/ingest.py"
type: "code"
community: "Community None"
degree: 6
location: "L66"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _fetch_tweet()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["_fetch_tweet[]"]:::centerNode
    center -->|"calls"| N_graphify_security_safe_fetch_text["safe_fetch_text[]"]
    center -->|"contains"| N_vendor_graphify_graphify_ingest_py["ingest.py"]
    center -->|"calls"| N_graphify_ingest_yaml_str["_yaml_str[]"]
    center -->|"calls"| N_graphify_ingest_safe_filename["_safe_filename[]"]
    center -->|"calls"| N_graphify_ingest_ingest["ingest[]"]
    center -->|"rationale_for"| N_graphify_ingest_rationale_67["Fetch a tweet URL. Returns [content, filename]."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Fetch a tweet URL. Returns (content, filename).]] - `rationale_for` [EXTRACTED]
- [[_safe_filename()_1]] - `calls` [EXTRACTED]
- [[_yaml_str()]] - `calls` [EXTRACTED]
- [[ingest()]] - `calls` [EXTRACTED]
- [[ingest.py]] - `contains` [EXTRACTED]
- [[safe_fetch_text()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_fetch_tweet()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None