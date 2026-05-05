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

# Uo()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["Uo[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_e["E[]"]
    center -->|"calls"| N_ui_viewer_bundle_zd["Zd[]"]
    center -->|"calls"| N_ui_viewer_bundle_tg["tg[]"]
    center -->|"calls"| N_ui_viewer_bundle_lg["lg[]"]
    center -->|"calls"| N_ui_viewer_bundle_ng["ng[]"]
    center -->|"calls"| N_ui_viewer_bundle_hy["hy[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[E()]] - `calls` [EXTRACTED]
- [[Zd()]] - `calls` [EXTRACTED]
- [[hy()]] - `calls` [EXTRACTED]
- [[lg()]] - `calls` [EXTRACTED]
- [[ng()]] - `calls` [EXTRACTED]
- [[tg()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Uo()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None