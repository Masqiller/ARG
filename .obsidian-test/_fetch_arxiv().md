---
source_file: "vendor/graphify/graphify/ingest.py"
type: "code"
community: "Community None"
degree: 7
location: "L128"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _fetch_arxiv()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["_fetch_arxiv[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_ingest_py["ingest.py"]
    center -->|"calls"| N_graphify_ingest_yaml_str["_yaml_str[]"]
    center -->|"calls"| N_graphify_ingest_safe_filename["_safe_filename[]"]
    center -->|"calls"| N_graphify_ingest_fetch_html["_fetch_html[]"]
    center -->|"calls"| N_graphify_ingest_fetch_webpage["_fetch_webpage[]"]
    center -->|"calls"| N_graphify_ingest_ingest["ingest[]"]
    center -->|"rationale_for"| N_graphify_ingest_rationale_129["Fetch arXiv abstract page."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Fetch arXiv abstract page.]] - `rationale_for` [EXTRACTED]
- [[_fetch_html()]] - `calls` [EXTRACTED]
- [[_fetch_webpage()]] - `calls` [EXTRACTED]
- [[_safe_filename()_1]] - `calls` [EXTRACTED]
- [[_yaml_str()]] - `calls` [EXTRACTED]
- [[ingest()]] - `calls` [EXTRACTED]
- [[ingest.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_fetch_arxiv()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None