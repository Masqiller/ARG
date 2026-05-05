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

# gs()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["gs[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_fc["fc[]"]
    center -->|"calls"| N_ui_viewer_bundle_as["as[]"]
    center -->|"calls"| N_ui_viewer_bundle_fv["Fv[]"]
    center -->|"calls"| N_ui_viewer_bundle_sg["Sg[]"]
    center -->|"calls"| N_ui_viewer_bundle_bg["bg[]"]
    center -->|"calls"| N_ui_viewer_bundle_a["$a[]"]
    center -->|"calls"| N_ui_viewer_bundle_cy["cy[]"]
    center -->|"calls"| N_ui_viewer_bundle_p0["p0[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[$a()]] - `calls` [EXTRACTED]
- [[Fv()]] - `calls` [EXTRACTED]
- [[Sg()]] - `calls` [EXTRACTED]
- [[as()]] - `calls` [EXTRACTED]
- [[bg()]] - `calls` [EXTRACTED]
- [[cy()]] - `calls` [EXTRACTED]
- [[fc()]] - `calls` [EXTRACTED]
- [[p0()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[gs()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None