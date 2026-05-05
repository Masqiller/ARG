---
source_file: "vendor/claude-mem/plugin/ui/viewer-bundle.js"
type: "code"
community: "Community None"
degree: 5
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Kt()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["Kt[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_ci["ci[]"]
    center -->|"calls"| N_ui_viewer_bundle_bc["bc[]"]
    center -->|"calls"| N_ui_viewer_bundle_hc["hc[]"]
    center -->|"calls"| N_ui_viewer_bundle_cn["Cn[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Cn()]] - `calls` [EXTRACTED]
- [[bc()]] - `calls` [EXTRACTED]
- [[ci()]] - `calls` [EXTRACTED]
- [[hc()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Kt()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None