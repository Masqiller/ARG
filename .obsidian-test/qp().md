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

# qp()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["qp[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_os["os[]"]
    center -->|"calls"| N_ui_viewer_bundle_te["Te[]"]
    center -->|"calls"| N_ui_viewer_bundle_or["Or[]"]
    center -->|"calls"| N_ui_viewer_bundle_xu["Xu[]"]
    center -->|"calls"| N_ui_viewer_bundle_wi["wi[]"]
    center -->|"calls"| N_ui_viewer_bundle_wp["wp[]"]
    center -->|"calls"| N_ui_viewer_bundle_vm["Vm[]"]
    center -->|"calls"| N_ui_viewer_bundle_sa["Sa[]"]
    center -->|"calls"| N_ui_viewer_bundle_qm["Qm[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Or()]] - `calls` [EXTRACTED]
- [[Qm()]] - `calls` [EXTRACTED]
- [[Sa()]] - `calls` [EXTRACTED]
- [[Te()]] - `calls` [EXTRACTED]
- [[Vm()]] - `calls` [EXTRACTED]
- [[Xu()]] - `calls` [EXTRACTED]
- [[os()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]
- [[wi()]] - `calls` [EXTRACTED]
- [[wp()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[qp()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None