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

# pg()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["pg[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_vl["vl[]"]
    center -->|"calls"| N_ui_viewer_bundle_yu["Yu[]"]
    center -->|"calls"| N_ui_viewer_bundle_wv["Wv[]"]
    center -->|"calls"| N_ui_viewer_bundle_wg["wg[]"]
    center -->|"calls"| N_ui_viewer_bundle_g["_g[]"]
    center -->|"calls"| N_ui_viewer_bundle_ee["ee[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Wv()]] - `calls` [EXTRACTED]
- [[Yu()]] - `calls` [EXTRACTED]
- [[_g()]] - `calls` [EXTRACTED]
- [[ee()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]
- [[vl()]] - `calls` [EXTRACTED]
- [[wg()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[pg()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None