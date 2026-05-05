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

# zm()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["zm[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_qi["Qi[]"]
    center -->|"calls"| N_ui_viewer_bundle_ep["ep[]"]
    center -->|"calls"| N_ui_viewer_bundle_lp["lp[]"]
    center -->|"calls"| N_ui_viewer_bundle_pl["pl[]"]
    center -->|"calls"| N_ui_viewer_bundle_k["k[]"]
    center -->|"calls"| N_ui_viewer_bundle_i0["i0[]"]
    center -->|"calls"| N_ui_viewer_bundle_ey["ey[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Qi()]] - `calls` [EXTRACTED]
- [[ep()]] - `calls` [EXTRACTED]
- [[ey()]] - `calls` [EXTRACTED]
- [[i0()]] - `calls` [EXTRACTED]
- [[k()]] - `calls` [EXTRACTED]
- [[lp()]] - `calls` [EXTRACTED]
- [[pl()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[zm()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None