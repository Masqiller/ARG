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

# Ji()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["Ji[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_um["um[]"]
    center -->|"calls"| N_ui_viewer_bundle_po["po[]"]
    center -->|"calls"| N_ui_viewer_bundle_dp["dp[]"]
    center -->|"calls"| N_ui_viewer_bundle_qy["qy[]"]
    center -->|"calls"| N_ui_viewer_bundle_od["od[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[dp()]] - `calls` [EXTRACTED]
- [[od()]] - `calls` [EXTRACTED]
- [[po()]] - `calls` [EXTRACTED]
- [[qy()]] - `calls` [EXTRACTED]
- [[um()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Ji()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None