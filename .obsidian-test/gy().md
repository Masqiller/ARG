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

# gy()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["gy[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_qe["qe[]"]
    center -->|"calls"| N_ui_viewer_bundle_es["Es[]"]
    center -->|"calls"| N_ui_viewer_bundle_my["my[]"]
    center -->|"calls"| N_ui_viewer_bundle_t["$t[]"]
    center -->|"calls"| N_ui_viewer_bundle_t0["t0[]"]
    center -->|"calls"| N_ui_viewer_bundle_md["md[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[$t()]] - `calls` [EXTRACTED]
- [[Es()]] - `calls` [EXTRACTED]
- [[md()]] - `calls` [EXTRACTED]
- [[my()]] - `calls` [EXTRACTED]
- [[qe()]] - `calls` [EXTRACTED]
- [[t0()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[gy()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None