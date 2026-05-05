---
source_file: "vendor/claude-mem/plugin/ui/viewer-bundle.js"
type: "code"
community: "Community None"
degree: 9
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# zt()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["zt[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_dm["dm[]"]
    center -->|"calls"| N_ui_viewer_bundle_pl["pl[]"]
    center -->|"calls"| N_ui_viewer_bundle_wv["Wv[]"]
    center -->|"calls"| N_ui_viewer_bundle_sg["Sg[]"]
    center -->|"calls"| N_ui_viewer_bundle_kg["kg[]"]
    center -->|"calls"| N_ui_viewer_bundle_ra["ra[]"]
    center -->|"calls"| N_ui_viewer_bundle_od["od[]"]
    center -->|"calls"| N_ui_viewer_bundle_ee["ee[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Sg()]] - `calls` [EXTRACTED]
- [[Wv()]] - `calls` [EXTRACTED]
- [[dm()]] - `calls` [EXTRACTED]
- [[ee()]] - `calls` [EXTRACTED]
- [[kg()]] - `calls` [EXTRACTED]
- [[od()]] - `calls` [EXTRACTED]
- [[pl()]] - `calls` [EXTRACTED]
- [[ra()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[zt()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None