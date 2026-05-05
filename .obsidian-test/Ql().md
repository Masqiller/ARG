---
source_file: "vendor/claude-mem/plugin/ui/viewer-bundle.js"
type: "code"
community: "Community None"
degree: 8
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Ql()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["Ql[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_ii["ii[]"]
    center -->|"calls"| N_ui_viewer_bundle_ar["Ar[]"]
    center -->|"calls"| N_ui_viewer_bundle_sp["Sp[]"]
    center -->|"calls"| N_ui_viewer_bundle_fv["Fv[]"]
    center -->|"calls"| N_ui_viewer_bundle_od["od[]"]
    center -->|"calls"| N_ui_viewer_bundle_ee["ee[]"]
    center -->|"calls"| N_ui_viewer_bundle_h0["h0[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Ar()]] - `calls` [EXTRACTED]
- [[Fv()]] - `calls` [EXTRACTED]
- [[Sp()]] - `calls` [EXTRACTED]
- [[ee()]] - `calls` [EXTRACTED]
- [[h0()]] - `calls` [EXTRACTED]
- [[ii()]] - `calls` [EXTRACTED]
- [[od()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Ql()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None