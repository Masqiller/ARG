---
source_file: "vendor/claude-mem/plugin/ui/viewer-bundle.js"
type: "code"
community: "Community None"
degree: 7
location: "L13"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Vh()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["Vh[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_ye["Ye[]"]
    center -->|"calls"| N_ui_viewer_bundle_rh["rh[]"]
    center -->|"calls"| N_ui_viewer_bundle_qh["qh[]"]
    center -->|"calls"| N_ui_viewer_bundle_bh["Bh[]"]
    center -->|"calls"| N_ui_viewer_bundle_gh["Gh[]"]
    center -->|"calls"| N_ui_viewer_bundle_kh["kh[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Bh()]] - `calls` [EXTRACTED]
- [[Gh()]] - `calls` [EXTRACTED]
- [[Ye()]] - `calls` [EXTRACTED]
- [[kh()]] - `calls` [EXTRACTED]
- [[qh()]] - `calls` [EXTRACTED]
- [[rh()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Vh()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None