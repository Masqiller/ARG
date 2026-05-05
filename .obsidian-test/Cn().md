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

# Cn()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["Cn[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_kt["Kt[]"]
    center -->|"calls"| N_ui_viewer_bundle_ha["ha[]"]
    center -->|"calls"| N_ui_viewer_bundle_me["mE[]"]
    center -->|"calls"| N_ui_viewer_bundle_jr["jr[]"]
    center -->|"calls"| N_ui_viewer_bundle_yr["Yr[]"]
    center -->|"calls"| N_ui_viewer_bundle_xr["xr[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Kt()]] - `calls` [EXTRACTED]
- [[Yr()]] - `calls` [EXTRACTED]
- [[ha()]] - `calls` [EXTRACTED]
- [[jr()]] - `calls` [EXTRACTED]
- [[mE()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]
- [[xr()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Cn()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None