---
source_file: "vendor/claude-mem/plugin/ui/viewer-bundle.js"
type: "code"
community: "Community None"
degree: 11
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# gu()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 11

## Architecture Graph
```mermaid
graph LR
    center["gu[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_r["_r[]"]
    center -->|"calls"| N_ui_viewer_bundle_ar["Ar[]"]
    center -->|"calls"| N_ui_viewer_bundle_fs["fs[]"]
    center -->|"calls"| N_ui_viewer_bundle_tg["tg[]"]
    center -->|"calls"| N_ui_viewer_bundle_ng["ng[]"]
    center -->|"calls"| N_ui_viewer_bundle_ig["ig[]"]
    center -->|"calls"| N_ui_viewer_bundle_cr["Cr[]"]
    center -->|"calls"| N_ui_viewer_bundle_rg["rg[]"]
    center -->|"calls"| N_ui_viewer_bundle_rt["rt[]"]
    center -->|"calls"| N_ui_viewer_bundle_cg["cg[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Ar()]] - `calls` [EXTRACTED]
- [[Cr()]] - `calls` [EXTRACTED]
- [[_r()]] - `calls` [EXTRACTED]
- [[cg()]] - `calls` [EXTRACTED]
- [[fs()]] - `calls` [EXTRACTED]
- [[ig()]] - `calls` [EXTRACTED]
- [[ng()]] - `calls` [EXTRACTED]
- [[rg()]] - `calls` [EXTRACTED]
- [[rt()]] - `calls` [EXTRACTED]
- [[tg()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[gu()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None