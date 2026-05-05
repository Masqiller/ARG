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

# Iv()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["Iv[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_fs["fs[]"]
    center -->|"calls"| N_ui_viewer_bundle_st["St[]"]
    center -->|"calls"| N_ui_viewer_bundle_cr["Cr[]"]
    center -->|"calls"| N_ui_viewer_bundle_rg["rg[]"]
    center -->|"calls"| N_ui_viewer_bundle_rt["rt[]"]
    center -->|"calls"| N_ui_viewer_bundle_cg["cg[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Cr()]] - `calls` [EXTRACTED]
- [[St()]] - `calls` [EXTRACTED]
- [[cg()]] - `calls` [EXTRACTED]
- [[fs()]] - `calls` [EXTRACTED]
- [[rg()]] - `calls` [EXTRACTED]
- [[rt()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Iv()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None