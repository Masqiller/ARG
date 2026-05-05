---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 6
location: "L1623"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _extract_python_rationale()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["_extract_python_rationale[]"]:::centerNode
    center -->|"calls"| N_str["str"]
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_make_id["_make_id[]"]
    center -->|"calls"| N_graphify_extract_file_stem["_file_stem[]"]
    center -->|"calls"| N_graphify_extract_extract_python["extract_python[]"]
    center -->|"rationale_for"| N_graphify_extract_rationale_1624["Post-pass: extract docstrings and rationale comments from Python source.     Mut"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Post-pass extract docstrings and rationale comments from Python source.     Mut]] - `rationale_for` [EXTRACTED]
- [[_file_stem()]] - `calls` [EXTRACTED]
- [[_make_id()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]
- [[extract_python()]] - `calls` [EXTRACTED]
- [[str]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_extract_python_rationale()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None