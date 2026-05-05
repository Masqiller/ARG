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

# yy()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["yy[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_qe["qe[]"]
    center -->|"calls"| N_ui_viewer_bundle_wg["wg[]"]
    center -->|"calls"| N_ui_viewer_bundle_aa["Aa[]"]
    center -->|"calls"| N_ui_viewer_bundle_qu["Qu[]"]
    center -->|"calls"| N_ui_viewer_bundle_m0["m0[]"]
    center -->|"calls"| N_ui_viewer_bundle_xs["Xs[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Aa()]] - `calls` [EXTRACTED]
- [[Qu()]] - `calls` [EXTRACTED]
- [[Xs()]] - `calls` [EXTRACTED]
- [[m0()]] - `calls` [EXTRACTED]
- [[qe()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]
- [[wg()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[yy()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None