---
source_file: "vendor/claude-mem/plugin/ui/viewer-bundle.js"
type: "code"
community: "Community None"
degree: 6
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# fp()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["fp[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_us["us[]"]
    center -->|"calls"| N_ui_viewer_bundle_ap["ap[]"]
    center -->|"calls"| N_ui_viewer_bundle_op["op[]"]
    center -->|"calls"| N_ui_viewer_bundle_tr["Tr[]"]
    center -->|"calls"| N_ui_viewer_bundle_dr["Dr[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Dr()]] - `calls` [EXTRACTED]
- [[Tr()]] - `calls` [EXTRACTED]
- [[ap()]] - `calls` [EXTRACTED]
- [[op()]] - `calls` [EXTRACTED]
- [[us()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[fp()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None