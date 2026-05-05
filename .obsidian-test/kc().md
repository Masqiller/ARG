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

# kc()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["kc[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_mg["mg[]"]
    center -->|"calls"| N_ui_viewer_bundle_yg["yg[]"]
    center -->|"calls"| N_ui_viewer_bundle_wo["wo[]"]
    center -->|"calls"| N_ui_viewer_bundle_ln["ln[]"]
    center -->|"calls"| N_ui_viewer_bundle_at["at[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[at()]] - `calls` [EXTRACTED]
- [[ln()]] - `calls` [EXTRACTED]
- [[mg()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]
- [[wo()]] - `calls` [EXTRACTED]
- [[yg()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[kc()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None