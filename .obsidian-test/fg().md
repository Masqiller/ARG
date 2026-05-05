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

# fg()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["fg[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_lm["Lm[]"]
    center -->|"calls"| N_ui_viewer_bundle_mp["mp[]"]
    center -->|"calls"| N_ui_viewer_bundle_dp["dp[]"]
    center -->|"calls"| N_ui_viewer_bundle_os["os[]"]
    center -->|"calls"| N_ui_viewer_bundle_cd["cd[]"]
    center -->|"calls"| N_ui_viewer_bundle_xg["xg[]"]
    center -->|"calls"| N_ui_viewer_bundle_zr["zr[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Lm()]] - `calls` [EXTRACTED]
- [[cd()]] - `calls` [EXTRACTED]
- [[dp()]] - `calls` [EXTRACTED]
- [[mp()]] - `calls` [EXTRACTED]
- [[os()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]
- [[xg()]] - `calls` [EXTRACTED]
- [[zr()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[fg()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None