---
source_file: "vendor/graphify/graphify/detect.py"
type: "code"
community: "Community None"
degree: 6
location: "L308"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# convert_office_file()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["convert_office_file[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_detect_py["detect.py"]
    center -->|"calls"| N_str["str"]
    center -->|"calls"| N_graphify_detect_docx_to_markdown["docx_to_markdown[]"]
    center -->|"calls"| N_graphify_detect_xlsx_to_markdown["xlsx_to_markdown[]"]
    center -->|"calls"| N_graphify_detect_detect["detect[]"]
    center -->|"rationale_for"| N_graphify_detect_rationale_309["Convert a .docx or .xlsx to a markdown sidecar in out_dir.      Returns the path"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Convert a .docx or .xlsx to a markdown sidecar in out_dir.      Returns the path]] - `rationale_for` [EXTRACTED]
- [[detect()]] - `calls` [EXTRACTED]
- [[detect.py]] - `contains` [EXTRACTED]
- [[docx_to_markdown()]] - `calls` [EXTRACTED]
- [[str]] - `calls` [EXTRACTED]
- [[xlsx_to_markdown()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[convert_office_file()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None