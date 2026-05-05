---
source_file: "vendor/claude-mem/plugin/ui/viewer-bundle.js"
type: "code"
community: "Community None"
degree: 11
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _g()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 11

## Architecture Graph
```mermaid
graph LR
    center["_g[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_yn["Yn[]"]
    center -->|"calls"| N_ui_viewer_bundle_e["E[]"]
    center -->|"calls"| N_ui_viewer_bundle_ls["ls[]"]
    center -->|"calls"| N_ui_viewer_bundle_rg["rg[]"]
    center -->|"calls"| N_ui_viewer_bundle_cg["cg[]"]
    center -->|"calls"| N_ui_viewer_bundle_dn["Dn[]"]
    center -->|"calls"| N_ui_viewer_bundle_pg["pg[]"]
    center -->|"calls"| N_ui_viewer_bundle_hg["hg[]"]
    center -->|"calls"| N_ui_viewer_bundle_ee["ee[]"]
    center -->|"calls"| N_ui_viewer_bundle_vu["vu[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Dn()]] - `calls` [EXTRACTED]
- [[E()]] - `calls` [EXTRACTED]
- [[Yn()]] - `calls` [EXTRACTED]
- [[cg()]] - `calls` [EXTRACTED]
- [[ee()]] - `calls` [EXTRACTED]
- [[hg()]] - `calls` [EXTRACTED]
- [[ls()]] - `calls` [EXTRACTED]
- [[pg()]] - `calls` [EXTRACTED]
- [[rg()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]
- [[vu()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_g()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None