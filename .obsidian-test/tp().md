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

# tp()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["tp[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_ct["Ct[]"]
    center -->|"calls"| N_ui_viewer_bundle_em["Em[]"]
    center -->|"calls"| N_ui_viewer_bundle_gt["gt[]"]
    center -->|"calls"| N_ui_viewer_bundle_pv["Pv[]"]
    center -->|"calls"| N_ui_viewer_bundle_yg["yg[]"]
    center -->|"calls"| N_ui_viewer_bundle_by["by[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Ct()]] - `calls` [EXTRACTED]
- [[Em()]] - `calls` [EXTRACTED]
- [[Pv()]] - `calls` [EXTRACTED]
- [[by()]] - `calls` [EXTRACTED]
- [[gt()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]
- [[yg()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[tp()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None