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

# md()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["md[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_e["E[]"]
    center -->|"calls"| N_ui_viewer_bundle_ca["ca[]"]
    center -->|"calls"| N_ui_viewer_bundle_sg["Sg[]"]
    center -->|"calls"| N_ui_viewer_bundle_gy["gy[]"]
    center -->|"calls"| N_ui_viewer_bundle_hy["hy[]"]
    center -->|"calls"| N_ui_viewer_bundle_pr["pr[]"]
    center -->|"calls"| N_ui_viewer_bundle_aa["Aa[]"]
    center -->|"calls"| N_ui_viewer_bundle_qu["Qu[]"]
    center -->|"calls"| N_ui_viewer_bundle_xa["xa[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Aa()]] - `calls` [EXTRACTED]
- [[E()]] - `calls` [EXTRACTED]
- [[Qu()]] - `calls` [EXTRACTED]
- [[Sg()]] - `calls` [EXTRACTED]
- [[ca()]] - `calls` [EXTRACTED]
- [[gy()]] - `calls` [EXTRACTED]
- [[hy()]] - `calls` [EXTRACTED]
- [[pr()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]
- [[xa()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[md()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None