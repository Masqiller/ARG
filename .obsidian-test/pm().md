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

# pm()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["pm[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_vg["vg[]"]
    center -->|"calls"| N_ui_viewer_bundle_hs["hs[]"]
    center -->|"calls"| N_ui_viewer_bundle_hi["hi[]"]
    center -->|"calls"| N_ui_viewer_bundle_no["No[]"]
    center -->|"calls"| N_ui_viewer_bundle_xp["xp[]"]
    center -->|"calls"| N_ui_viewer_bundle_da["Da[]"]
    center -->|"calls"| N_ui_viewer_bundle_e0["e0[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Da()]] - `calls` [EXTRACTED]
- [[No()]] - `calls` [EXTRACTED]
- [[e0()]] - `calls` [EXTRACTED]
- [[hi()]] - `calls` [EXTRACTED]
- [[hs()]] - `calls` [EXTRACTED]
- [[vg()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]
- [[xp()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[pm()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None