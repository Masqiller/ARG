---
source_file: "vendor/graphify/graphify/detect.py"
type: "code"
community: "Community None"
degree: 4
location: "L138"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# extract_pdf_text()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["extract_pdf_text[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_detect_py["detect.py"]
    center -->|"calls"| N_str["str"]
    center -->|"calls"| N_graphify_detect_count_words["count_words[]"]
    center -->|"rationale_for"| N_graphify_detect_rationale_139["Extract plain text from a PDF file using pypdf."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Extract plain text from a PDF file using pypdf.]] - `rationale_for` [EXTRACTED]
- [[count_words()]] - `calls` [EXTRACTED]
- [[detect.py]] - `contains` [EXTRACTED]
- [[str]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extract_pdf_text()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None