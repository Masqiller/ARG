---
source_file: "vendor/graphify/graphify/report.py"
type: "code"
community: "Community None"
degree: 3
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _safe_community_name()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["_safe_community_name[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_report_py["report.py"]
    center -->|"calls"| N_graphify_report_generate["generate[]"]
    center -->|"rationale_for"| N_graphify_report_rationale_9["Mirrors export.safe_name so community hub filenames and report wikilinks always"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Mirrors export.safe_name so community hub filenames and report wikilinks always]] - `rationale_for` [EXTRACTED]
- [[generate()]] - `calls` [EXTRACTED]
- [[report.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_safe_community_name()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None