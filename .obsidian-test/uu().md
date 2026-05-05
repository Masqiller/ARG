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

# uu()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["uu[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_e["E[]"]
    center -->|"calls"| N_ui_viewer_bundle_gd["Gd[]"]
    center -->|"calls"| N_ui_viewer_bundle_tr["Tr[]"]
    center -->|"calls"| N_ui_viewer_bundle_c["$c[]"]
    center -->|"calls"| N_ui_viewer_bundle_mr["mr[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[$c()]] - `calls` [EXTRACTED]
- [[E()]] - `calls` [EXTRACTED]
- [[Gd()]] - `calls` [EXTRACTED]
- [[Tr()]] - `calls` [EXTRACTED]
- [[mr()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[uu()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None