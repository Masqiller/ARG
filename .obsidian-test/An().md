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

# An()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["An[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_ld["ld[]"]
    center -->|"calls"| N_ui_viewer_bundle_v["$v[]"]
    center -->|"calls"| N_ui_viewer_bundle_sg["Sg[]"]
    center -->|"calls"| N_ui_viewer_bundle_ey["ey[]"]
    center -->|"calls"| N_ui_viewer_bundle_ty["ty[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[$v()]] - `calls` [EXTRACTED]
- [[Sg()]] - `calls` [EXTRACTED]
- [[ey()]] - `calls` [EXTRACTED]
- [[ld()]] - `calls` [EXTRACTED]
- [[ty()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[An()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None