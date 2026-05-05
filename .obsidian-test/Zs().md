---
source_file: "vendor/claude-mem/plugin/ui/viewer-bundle.js"
type: "code"
community: "Community None"
degree: 8
location: "L9"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Zs()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["Zs[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_wu["wu[]"]
    center -->|"calls"| N_ui_viewer_bundle_rd["Rd[]"]
    center -->|"calls"| N_ui_viewer_bundle_bd["Bd[]"]
    center -->|"calls"| N_ui_viewer_bundle_io["io[]"]
    center -->|"calls"| N_ui_viewer_bundle_zd["Zd[]"]
    center -->|"calls"| N_ui_viewer_bundle_pn["Pn[]"]
    center -->|"calls"| N_ui_viewer_bundle_ma["Ma[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Bd()]] - `calls` [EXTRACTED]
- [[Ma()]] - `calls` [EXTRACTED]
- [[Pn()]] - `calls` [EXTRACTED]
- [[Rd()]] - `calls` [EXTRACTED]
- [[Zd()]] - `calls` [EXTRACTED]
- [[io()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]
- [[wu()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Zs()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None