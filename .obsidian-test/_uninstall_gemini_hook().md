---
source_file: "vendor/graphify/graphify/__main__.py"
type: "code"
community: "Community None"
degree: 3
location: "L319"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _uninstall_gemini_hook()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["_uninstall_gemini_hook[]"]:::centerNode
    center -->|"calls"| N_str["str"]
    center -->|"contains"| N_vendor_graphify_graphify_main_py["__main__.py"]
    center -->|"calls"| N_graphify_main_gemini_uninstall["gemini_uninstall[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[__main__.py]] - `contains` [EXTRACTED]
- [[gemini_uninstall()]] - `calls` [EXTRACTED]
- [[str]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_uninstall_gemini_hook()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None