---
source_file: "vendor/graphify/graphify/detect.py"
type: "code"
community: "Community None"
degree: 5
location: "L193"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# xlsx_to_markdown()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["xlsx_to_markdown[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_detect_py["detect.py"]
    center -->|"calls"| N_str["str"]
    center -->|"calls"| N_graphify_detect_convert_office_file["convert_office_file[]"]
    center -->|"calls"| N_graphify_detect_count_words["count_words[]"]
    center -->|"rationale_for"| N_graphify_detect_rationale_194["Convert an .xlsx file to markdown text using openpyxl."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Convert an .xlsx file to markdown text using openpyxl.]] - `rationale_for` [EXTRACTED]
- [[convert_office_file()]] - `calls` [EXTRACTED]
- [[count_words()]] - `calls` [EXTRACTED]
- [[detect.py]] - `contains` [EXTRACTED]
- [[str]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[xlsx_to_markdown()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None