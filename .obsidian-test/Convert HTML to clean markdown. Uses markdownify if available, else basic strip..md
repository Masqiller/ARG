---
source_file: "vendor/graphify/graphify/ingest.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L52"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Convert HTML to clean markdown. Uses markdownify if available, else basic strip.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Convert HTML to clean markdown. Uses markdownify if available, else basic strip."]:::centerNode
    center -->|"rationale_for"| N_graphify_ingest_html_to_markdown["_html_to_markdown[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_html_to_markdown()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Convert HTML to clean markdown. Uses markdownify if available, else basic strip.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None