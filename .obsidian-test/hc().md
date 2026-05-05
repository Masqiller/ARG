---
source_file: "vendor/claude-mem/plugin/ui/viewer-bundle.js"
type: "code"
community: "Community None"
degree: 9
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# hc()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["hc[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_kt["Kt[]"]
    center -->|"calls"| N_ui_viewer_bundle_oi["oi[]"]
    center -->|"calls"| N_ui_viewer_bundle_ci["ci[]"]
    center -->|"calls"| N_ui_viewer_bundle_tm["tm[]"]
    center -->|"calls"| N_ui_viewer_bundle_tc["Tc[]"]
    center -->|"calls"| N_ui_viewer_bundle_kn["Kn[]"]
    center -->|"calls"| N_ui_viewer_bundle_gt["gt[]"]
    center -->|"calls"| N_scripts_worker_cli_n["N[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Kn()]] - `calls` [EXTRACTED]
- [[Kt()]] - `calls` [EXTRACTED]
- [[N()]] - `calls` [INFERRED]
- [[Tc()]] - `calls` [EXTRACTED]
- [[ci()]] - `calls` [EXTRACTED]
- [[gt()]] - `calls` [EXTRACTED]
- [[oi()]] - `calls` [EXTRACTED]
- [[tm()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[hc()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None