---
source_file: "vendor/claude-mem/plugin/ui/viewer-bundle.js"
type: "code"
community: "Community None"
degree: 10
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ed()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["ed[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_rd["Rd[]"]
    center -->|"calls"| N_ui_viewer_bundle_ts["ts[]"]
    center -->|"calls"| N_ui_viewer_bundle_ds["ds[]"]
    center -->|"calls"| N_ui_viewer_bundle_mn["Mn[]"]
    center -->|"calls"| N_ui_viewer_bundle_zp["zp[]"]
    center -->|"calls"| N_ui_viewer_bundle_hp["Hp[]"]
    center -->|"calls"| N_ui_viewer_bundle_s["_s[]"]
    center -->|"calls"| N_ui_viewer_bundle_ye["Ye[]"]
    center -->|"calls"| N_ui_viewer_bundle_tl["Tl[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Hp()]] - `calls` [EXTRACTED]
- [[Mn()]] - `calls` [EXTRACTED]
- [[Rd()]] - `calls` [EXTRACTED]
- [[Tl()]] - `calls` [EXTRACTED]
- [[Ye()]] - `calls` [EXTRACTED]
- [[_s()]] - `calls` [EXTRACTED]
- [[ds()]] - `calls` [EXTRACTED]
- [[ts()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]
- [[zp()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ed()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None