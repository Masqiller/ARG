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

# zr()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["zr[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_ig["ig[]"]
    center -->|"calls"| N_ui_viewer_bundle_fg["fg[]"]
    center -->|"calls"| N_ui_viewer_bundle_wg["wg[]"]
    center -->|"calls"| N_ui_viewer_bundle_cd["cd[]"]
    center -->|"calls"| N_ui_viewer_bundle_n0["n0[]"]
    center -->|"calls"| N_ui_viewer_bundle_sd["sd[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[cd()]] - `calls` [EXTRACTED]
- [[fg()]] - `calls` [EXTRACTED]
- [[ig()]] - `calls` [EXTRACTED]
- [[n0()]] - `calls` [EXTRACTED]
- [[sd()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]
- [[wg()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[zr()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None