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

# lg()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["lg[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_uo["Uo[]"]
    center -->|"calls"| N_ui_viewer_bundle_ng["ng[]"]
    center -->|"calls"| N_ui_viewer_bundle_ma["Ma[]"]
    center -->|"calls"| N_ui_viewer_bundle_ee["ee[]"]
    center -->|"calls"| N_ui_viewer_bundle_sl["sl[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Ma()]] - `calls` [EXTRACTED]
- [[Uo()]] - `calls` [EXTRACTED]
- [[ee()]] - `calls` [EXTRACTED]
- [[ng()]] - `calls` [EXTRACTED]
- [[sl()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[lg()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None