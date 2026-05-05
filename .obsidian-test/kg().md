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

# kg()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["kg[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_fc["fc[]"]
    center -->|"calls"| N_ui_viewer_bundle_ar["Ar[]"]
    center -->|"calls"| N_ui_viewer_bundle_zt["zt[]"]
    center -->|"calls"| N_ui_viewer_bundle_bm["Bm[]"]
    center -->|"calls"| N_ui_viewer_bundle_sg["Sg[]"]
    center -->|"calls"| N_ui_viewer_bundle_ry["ry[]"]
    center -->|"calls"| N_ui_viewer_bundle_cy["cy[]"]
    center -->|"calls"| N_ui_viewer_bundle_oy["oy[]"]
    center -->|"calls"| N_ui_viewer_bundle_xr["xr[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Ar()]] - `calls` [EXTRACTED]
- [[Bm()]] - `calls` [EXTRACTED]
- [[Sg()]] - `calls` [EXTRACTED]
- [[cy()]] - `calls` [EXTRACTED]
- [[fc()]] - `calls` [EXTRACTED]
- [[oy()]] - `calls` [EXTRACTED]
- [[ry()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]
- [[xr()]] - `calls` [EXTRACTED]
- [[zt()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[kg()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None