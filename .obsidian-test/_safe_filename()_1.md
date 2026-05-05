---
source_file: "vendor/graphify/graphify/ingest.py"
type: "code"
community: "Community None"
degree: 6
location: "L18"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _safe_filename()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["_safe_filename[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_ingest_py["ingest.py"]
    center -->|"calls"| N_graphify_ingest_fetch_tweet["_fetch_tweet[]"]
    center -->|"calls"| N_graphify_ingest_fetch_webpage["_fetch_webpage[]"]
    center -->|"calls"| N_graphify_ingest_fetch_arxiv["_fetch_arxiv[]"]
    center -->|"calls"| N_graphify_ingest_download_binary["_download_binary[]"]
    center -->|"rationale_for"| N_graphify_ingest_rationale_19["Turn a URL into a safe filename."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Turn a URL into a safe filename.]] - `rationale_for` [EXTRACTED]
- [[_download_binary()]] - `calls` [EXTRACTED]
- [[_fetch_arxiv()]] - `calls` [EXTRACTED]
- [[_fetch_tweet()]] - `calls` [EXTRACTED]
- [[_fetch_webpage()]] - `calls` [EXTRACTED]
- [[ingest.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_safe_filename()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None