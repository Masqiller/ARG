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

# Xo()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["Xo[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_ci["ci[]"]
    center -->|"calls"| N_ui_viewer_bundle_e["E[]"]
    center -->|"calls"| N_ui_viewer_bundle_qe["qe[]"]
    center -->|"calls"| N_ui_viewer_bundle_va["va[]"]
    center -->|"calls"| N_ui_viewer_bundle_np["np[]"]
    center -->|"calls"| N_ui_viewer_bundle_k["k[]"]
    center -->|"calls"| N_ui_viewer_bundle_by["by[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[E()]] - `calls` [EXTRACTED]
- [[by()]] - `calls` [EXTRACTED]
- [[ci()]] - `calls` [EXTRACTED]
- [[k()]] - `calls` [EXTRACTED]
- [[np()]] - `calls` [EXTRACTED]
- [[qe()]] - `calls` [EXTRACTED]
- [[va()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Xo()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None