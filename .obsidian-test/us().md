---
source_file: "vendor/claude-mem/plugin/ui/viewer-bundle.js"
type: "code"
community: "Community None"
degree: 10
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# us()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["us[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_e["E[]"]
    center -->|"calls"| N_ui_viewer_bundle_io["io[]"]
    center -->|"calls"| N_ui_viewer_bundle_fp["fp[]"]
    center -->|"calls"| N_ui_viewer_bundle_tg["tg[]"]
    center -->|"calls"| N_ui_viewer_bundle_js["js[]"]
    center -->|"calls"| N_ui_viewer_bundle_cr["Cr[]"]
    center -->|"calls"| N_ui_viewer_bundle_fs["fs[]"]
    center -->|"calls"| N_ui_viewer_bundle_rt["rt[]"]
    center -->|"calls"| N_ui_viewer_bundle_c["$c[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[$c()]] - `calls` [EXTRACTED]
- [[Cr()]] - `calls` [EXTRACTED]
- [[E()]] - `calls` [EXTRACTED]
- [[fp()]] - `calls` [EXTRACTED]
- [[fs()]] - `calls` [EXTRACTED]
- [[io()]] - `calls` [EXTRACTED]
- [[js()]] - `calls` [EXTRACTED]
- [[rt()]] - `calls` [EXTRACTED]
- [[tg()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[us()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None