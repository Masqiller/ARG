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

# hl()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["hl[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_ie["ie[]"]
    center -->|"calls"| N_ui_viewer_bundle_gt["gt[]"]
    center -->|"calls"| N_ui_viewer_bundle_wm["wm[]"]
    center -->|"calls"| N_ui_viewer_bundle_pv["Pv[]"]
    center -->|"calls"| N_ui_viewer_bundle_yg["yg[]"]
    center -->|"calls"| N_ui_viewer_bundle_tl["Tl[]"]
    center -->|"calls"| N_ui_viewer_bundle_v["$v[]"]
    center -->|"calls"| N_ui_viewer_bundle_a["$a[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[$a()]] - `calls` [EXTRACTED]
- [[$v()]] - `calls` [EXTRACTED]
- [[Pv()]] - `calls` [EXTRACTED]
- [[Tl()]] - `calls` [EXTRACTED]
- [[gt()]] - `calls` [EXTRACTED]
- [[ie()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]
- [[wm()]] - `calls` [EXTRACTED]
- [[yg()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[hl()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None