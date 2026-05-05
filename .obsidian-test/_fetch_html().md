---
source_file: "vendor/graphify/graphify/ingest.py"
type: "code"
community: "Community None"
degree: 4
location: "L47"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _fetch_html()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["_fetch_html[]"]:::centerNode
    center -->|"calls"| N_graphify_security_safe_fetch_text["safe_fetch_text[]"]
    center -->|"contains"| N_vendor_graphify_graphify_ingest_py["ingest.py"]
    center -->|"calls"| N_graphify_ingest_fetch_webpage["_fetch_webpage[]"]
    center -->|"calls"| N_graphify_ingest_fetch_arxiv["_fetch_arxiv[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_fetch_arxiv()]] - `calls` [EXTRACTED]
- [[_fetch_webpage()]] - `calls` [EXTRACTED]
- [[ingest.py]] - `contains` [EXTRACTED]
- [[safe_fetch_text()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_fetch_html()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None