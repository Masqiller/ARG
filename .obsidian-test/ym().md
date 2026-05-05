---
source_file: "vendor/claude-mem/plugin/ui/viewer-bundle.js"
type: "code"
community: "Community None"
degree: 5
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ym()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["ym[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_np["np[]"]
    center -->|"calls"| N_ui_viewer_bundle_xp["xp[]"]
    center -->|"calls"| N_ui_viewer_bundle_xm["Xm[]"]
    center -->|"calls"| N_ui_viewer_bundle_lo["Lo[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Lo()]] - `calls` [EXTRACTED]
- [[Xm()]] - `calls` [EXTRACTED]
- [[np()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]
- [[xp()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ym()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None