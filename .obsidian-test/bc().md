---
source_file: "vendor/claude-mem/plugin/ui/viewer-bundle.js"
type: "code"
community: "Community None"
degree: 7
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# bc()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["bc[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_kt["Kt[]"]
    center -->|"calls"| N_ui_viewer_bundle_ci["ci[]"]
    center -->|"calls"| N_ui_viewer_bundle_kn["Kn[]"]
    center -->|"calls"| N_ui_viewer_bundle_tc["Tc[]"]
    center -->|"calls"| N_ui_viewer_bundle_te["Te[]"]
    center -->|"calls"| N_ui_viewer_bundle_e["E[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[E()]] - `calls` [EXTRACTED]
- [[Kn()]] - `calls` [EXTRACTED]
- [[Kt()]] - `calls` [EXTRACTED]
- [[Tc()]] - `calls` [EXTRACTED]
- [[Te()]] - `calls` [EXTRACTED]
- [[ci()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[bc()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None