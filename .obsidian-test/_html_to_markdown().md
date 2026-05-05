---
source_file: "vendor/graphify/graphify/ingest.py"
type: "code"
community: "Community None"
degree: 3
location: "L51"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _html_to_markdown()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["_html_to_markdown[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_ingest_py["ingest.py"]
    center -->|"calls"| N_graphify_ingest_fetch_webpage["_fetch_webpage[]"]
    center -->|"rationale_for"| N_graphify_ingest_rationale_52["Convert HTML to clean markdown. Uses markdownify if available, else basic strip."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Convert HTML to clean markdown. Uses markdownify if available, else basic strip.]] - `rationale_for` [EXTRACTED]
- [[_fetch_webpage()]] - `calls` [EXTRACTED]
- [[ingest.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_html_to_markdown()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None