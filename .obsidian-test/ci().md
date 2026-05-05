---
source_file: "vendor/claude-mem/plugin/ui/viewer-bundle.js"
type: "code"
community: "Community None"
degree: 9
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ci()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["ci[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_yc["yc[]"]
    center -->|"calls"| N_ui_viewer_bundle_kt["Kt[]"]
    center -->|"calls"| N_ui_viewer_bundle_oi["oi[]"]
    center -->|"calls"| N_ui_viewer_bundle_bc["bc[]"]
    center -->|"calls"| N_ui_viewer_bundle_hc["hc[]"]
    center -->|"calls"| N_ui_viewer_bundle_z1["Z1[]"]
    center -->|"calls"| N_ui_viewer_bundle_te["Te[]"]
    center -->|"calls"| N_ui_viewer_bundle_xo["Xo[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Kt()]] - `calls` [EXTRACTED]
- [[Te()]] - `calls` [EXTRACTED]
- [[Xo()]] - `calls` [EXTRACTED]
- [[Z1()]] - `calls` [EXTRACTED]
- [[bc()]] - `calls` [EXTRACTED]
- [[hc()]] - `calls` [EXTRACTED]
- [[oi()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]
- [[yc()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ci()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None