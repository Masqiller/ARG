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

# gi()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["gi[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_rg["rg[]"]
    center -->|"calls"| N_ui_viewer_bundle_bg["bg[]"]
    center -->|"calls"| N_ui_viewer_bundle_qg["qg[]"]
    center -->|"calls"| N_ui_viewer_bundle_l["$l[]"]
    center -->|"calls"| N_ui_viewer_bundle_te["Te[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[$l()]] - `calls` [EXTRACTED]
- [[Te()]] - `calls` [EXTRACTED]
- [[bg()]] - `calls` [EXTRACTED]
- [[qg()]] - `calls` [EXTRACTED]
- [[rg()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[gi()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None