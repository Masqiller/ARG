---
source_file: "vendor/graphify/graphify/ingest.py"
type: "code"
community: "Community None"
degree: 11
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ingest.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 11

## Architecture Graph
```mermaid
graph LR
    center["ingest.py"]:::centerNode
    center -->|"contains"| N_graphify_ingest_yaml_str["_yaml_str[]"]
    center -->|"contains"| N_graphify_ingest_safe_filename["_safe_filename[]"]
    center -->|"contains"| N_graphify_ingest_detect_url_type["_detect_url_type[]"]
    center -->|"contains"| N_graphify_ingest_fetch_html["_fetch_html[]"]
    center -->|"contains"| N_graphify_ingest_html_to_markdown["_html_to_markdown[]"]
    center -->|"contains"| N_graphify_ingest_fetch_tweet["_fetch_tweet[]"]
    center -->|"contains"| N_graphify_ingest_fetch_webpage["_fetch_webpage[]"]
    center -->|"contains"| N_graphify_ingest_fetch_arxiv["_fetch_arxiv[]"]
    center -->|"contains"| N_graphify_ingest_download_binary["_download_binary[]"]
    center -->|"contains"| N_graphify_ingest_ingest["ingest[]"]
    center -->|"contains"| N_graphify_ingest_save_query_result["save_query_result[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_detect_url_type()]] - `contains` [EXTRACTED]
- [[_download_binary()]] - `contains` [EXTRACTED]
- [[_fetch_arxiv()]] - `contains` [EXTRACTED]
- [[_fetch_html()]] - `contains` [EXTRACTED]
- [[_fetch_tweet()]] - `contains` [EXTRACTED]
- [[_fetch_webpage()]] - `contains` [EXTRACTED]
- [[_html_to_markdown()]] - `contains` [EXTRACTED]
- [[_safe_filename()_1]] - `contains` [EXTRACTED]
- [[_yaml_str()]] - `contains` [EXTRACTED]
- [[ingest()]] - `contains` [EXTRACTED]
- [[save_query_result()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ingest.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None