---
source_file: "vendor/claude-mem/plugin/ui/viewer-bundle.js"
type: "code"
community: "Community None"
degree: 6
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# um()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["um[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_ji["Ji[]"]
    center -->|"calls"| N_ui_viewer_bundle_os["os[]"]
    center -->|"calls"| N_ui_viewer_bundle_au["Au[]"]
    center -->|"calls"| N_ui_viewer_bundle_mr["mr[]"]
    center -->|"calls"| N_ui_viewer_bundle_c["$c[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[$c()]] - `calls` [EXTRACTED]
- [[Au()]] - `calls` [EXTRACTED]
- [[Ji()]] - `calls` [EXTRACTED]
- [[mr()]] - `calls` [EXTRACTED]
- [[os()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[um()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None