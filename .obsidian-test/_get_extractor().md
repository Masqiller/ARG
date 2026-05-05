---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 5
location: "L4055"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _get_extractor()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["_get_extractor[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_extract_single_file["_extract_single_file[]"]
    center -->|"calls"| N_graphify_extract_extract_sequential["_extract_sequential[]"]
    center -->|"calls"| N_graphify_extract_extract["extract[]"]
    center -->|"rationale_for"| N_graphify_extract_rationale_4056["Return the correct extractor function for a file, or None if unsupported."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Return the correct extractor function for a file, or None if unsupported.]] - `rationale_for` [EXTRACTED]
- [[_extract_sequential()]] - `calls` [EXTRACTED]
- [[_extract_single_file()]] - `calls` [EXTRACTED]
- [[extract()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_get_extractor()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None