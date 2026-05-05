---
source_file: "vendor/claude-mem/plugin/ui/viewer-bundle.js"
type: "code"
community: "Community None"
degree: 9
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Or()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["Or[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_ms["ms[]"]
    center -->|"calls"| N_ui_viewer_bundle_qp["qp[]"]
    center -->|"calls"| N_ui_viewer_bundle_sa["Sa[]"]
    center -->|"calls"| N_ui_viewer_bundle_kv["Kv[]"]
    center -->|"calls"| N_ui_viewer_bundle_wv["Wv[]"]
    center -->|"calls"| N_ui_viewer_bundle_pv["Pv[]"]
    center -->|"calls"| N_ui_viewer_bundle_yg["yg[]"]
    center -->|"calls"| N_ui_viewer_bundle_jl["jl[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Kv()]] - `calls` [EXTRACTED]
- [[Pv()]] - `calls` [EXTRACTED]
- [[Sa()]] - `calls` [EXTRACTED]
- [[Wv()]] - `calls` [EXTRACTED]
- [[jl()]] - `calls` [EXTRACTED]
- [[ms()]] - `calls` [EXTRACTED]
- [[qp()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]
- [[yg()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Or()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None