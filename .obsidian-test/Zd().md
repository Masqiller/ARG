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

# Zd()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["Zd[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_x1["X1[]"]
    center -->|"calls"| N_ui_viewer_bundle_jl["jl[]"]
    center -->|"calls"| N_ui_viewer_bundle_zs["Zs[]"]
    center -->|"calls"| N_ui_viewer_bundle_na["Na[]"]
    center -->|"calls"| N_ui_viewer_bundle_uo["Uo[]"]
    center -->|"calls"| N_ui_viewer_bundle_ma["Ma[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Ma()]] - `calls` [EXTRACTED]
- [[Na()]] - `calls` [EXTRACTED]
- [[Uo()]] - `calls` [EXTRACTED]
- [[X1()]] - `calls` [EXTRACTED]
- [[Zs()]] - `calls` [EXTRACTED]
- [[jl()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Zd()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None