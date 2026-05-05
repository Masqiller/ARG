---
source_file: "vendor/graphify/graphify/__main__.py"
type: "code"
community: "Community None"
degree: 7
location: "L149"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# install()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["install[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_main_py["__main__.py"]
    center -->|"calls"| N_graphify_main_refresh_all_version_stamps["_refresh_all_version_stamps[]"]
    center -->|"calls"| N_graphify_main_gemini_install["gemini_install[]"]
    center -->|"calls"| N_graphify_main_cursor_install["_cursor_install[]"]
    center -->|"calls"| N_graphify_main_install_opencode_plugin["_install_opencode_plugin[]"]
    center -->|"calls"| N_graphify_main_antigravity_install["_antigravity_install[]"]
    center -->|"calls"| N_graphify_main_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[__main__.py]] - `contains` [EXTRACTED]
- [[_antigravity_install()]] - `calls` [EXTRACTED]
- [[_cursor_install()]] - `calls` [EXTRACTED]
- [[_install_opencode_plugin()]] - `calls` [EXTRACTED]
- [[_refresh_all_version_stamps()]] - `calls` [EXTRACTED]
- [[gemini_install()]] - `calls` [EXTRACTED]
- [[main()_2]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[install()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None