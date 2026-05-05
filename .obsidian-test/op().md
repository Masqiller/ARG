---
source_file: "vendor/claude-mem/plugin/ui/viewer-bundle.js"
type: "code"
community: "Community None"
degree: 7
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# op()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["op[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_yc["yc[]"]
    center -->|"calls"| N_ui_viewer_bundle_mr["mr[]"]
    center -->|"calls"| N_ui_viewer_bundle_fp["fp[]"]
    center -->|"calls"| N_ui_viewer_bundle_hs["hs[]"]
    center -->|"calls"| N_ui_viewer_bundle_yg["yg[]"]
    center -->|"calls"| N_ui_viewer_bundle_c["$c[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[$c()]] - `calls` [EXTRACTED]
- [[fp()]] - `calls` [EXTRACTED]
- [[hs()]] - `calls` [EXTRACTED]
- [[mr()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]
- [[yc()]] - `calls` [EXTRACTED]
- [[yg()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[op()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None