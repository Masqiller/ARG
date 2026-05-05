---
source_file: "vendor/claude-mem/plugin/ui/viewer-bundle.js"
type: "code"
community: "Community None"
degree: 8
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# wm()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["wm[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_zi["Zi[]"]
    center -->|"calls"| N_ui_viewer_bundle_ms["ms[]"]
    center -->|"calls"| N_ui_viewer_bundle_hl["hl[]"]
    center -->|"calls"| N_ui_viewer_bundle_hg["hg[]"]
    center -->|"calls"| N_ui_viewer_bundle_hs["hs[]"]
    center -->|"calls"| N_ui_viewer_bundle_tl["Tl[]"]
    center -->|"calls"| N_ui_viewer_bundle_sg["Sg[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Sg()]] - `calls` [EXTRACTED]
- [[Tl()]] - `calls` [EXTRACTED]
- [[Zi()]] - `calls` [EXTRACTED]
- [[hg()]] - `calls` [EXTRACTED]
- [[hl()]] - `calls` [EXTRACTED]
- [[hs()]] - `calls` [EXTRACTED]
- [[ms()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[wm()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None