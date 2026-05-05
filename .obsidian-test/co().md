---
source_file: "vendor/claude-mem/plugin/ui/viewer-bundle.js"
type: "code"
community: "Community None"
degree: 7
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# co()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["co[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_ie["ie[]"]
    center -->|"calls"| N_ui_viewer_bundle_r0["r0[]"]
    center -->|"calls"| N_ui_viewer_bundle_rl["Rl[]"]
    center -->|"calls"| N_ui_viewer_bundle_km["km[]"]
    center -->|"calls"| N_ui_viewer_bundle_v["$v[]"]
    center -->|"calls"| N_ui_viewer_bundle_sg["Sg[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[$v()]] - `calls` [EXTRACTED]
- [[Rl()]] - `calls` [EXTRACTED]
- [[Sg()]] - `calls` [EXTRACTED]
- [[ie()]] - `calls` [EXTRACTED]
- [[km()]] - `calls` [EXTRACTED]
- [[r0()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[co()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None