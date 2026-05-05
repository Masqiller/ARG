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

# rg()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["rg[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_gi["gi[]"]
    center -->|"calls"| N_ui_viewer_bundle_iv["Iv[]"]
    center -->|"calls"| N_ui_viewer_bundle_gu["gu[]"]
    center -->|"calls"| N_ui_viewer_bundle_eu["eu[]"]
    center -->|"calls"| N_ui_viewer_bundle_l["$l[]"]
    center -->|"calls"| N_ui_viewer_bundle_g["_g[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[$l()]] - `calls` [EXTRACTED]
- [[Iv()]] - `calls` [EXTRACTED]
- [[_g()]] - `calls` [EXTRACTED]
- [[eu()]] - `calls` [EXTRACTED]
- [[gi()]] - `calls` [EXTRACTED]
- [[gu()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[rg()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None