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

# ds()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["ds[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_fl["fl[]"]
    center -->|"calls"| N_ui_viewer_bundle_p["_p[]"]
    center -->|"calls"| N_ui_viewer_bundle_im["Im[]"]
    center -->|"calls"| N_ui_viewer_bundle_ho["Ho[]"]
    center -->|"calls"| N_ui_viewer_bundle_ed["ed[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Ho()]] - `calls` [EXTRACTED]
- [[Im()]] - `calls` [EXTRACTED]
- [[_p()]] - `calls` [EXTRACTED]
- [[ed()]] - `calls` [EXTRACTED]
- [[fl()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ds()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None