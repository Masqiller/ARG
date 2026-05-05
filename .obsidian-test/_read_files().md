---
source_file: "vendor/graphify/graphify/llm.py"
type: "code"
community: "Community None"
degree: 3
location: "L80"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _read_files()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["_read_files[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_llm_py["llm.py"]
    center -->|"calls"| N_graphify_llm_extract_files_direct["extract_files_direct[]"]
    center -->|"rationale_for"| N_graphify_llm_rationale_81["Return file contents formatted for the extraction prompt."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Return file contents formatted for the extraction prompt.]] - `rationale_for` [EXTRACTED]
- [[extract_files_direct()]] - `calls` [EXTRACTED]
- [[llm.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_read_files()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None