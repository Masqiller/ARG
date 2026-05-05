---
source_file: "vendor/claude-mem/plugin/ui/viewer-bundle.js"
type: "code"
community: "Community None"
degree: 10
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Rd()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["Rd[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_cy["cy[]"]
    center -->|"calls"| N_ui_viewer_bundle_ed["ed[]"]
    center -->|"calls"| N_ui_viewer_bundle_as["as[]"]
    center -->|"calls"| N_ui_viewer_bundle_bg["bg[]"]
    center -->|"calls"| N_ui_viewer_bundle_bp["bp[]"]
    center -->|"calls"| N_ui_viewer_bundle_sg["Sg[]"]
    center -->|"calls"| N_ui_viewer_bundle_xr["xr[]"]
    center -->|"calls"| N_ui_viewer_bundle_zs["Zs[]"]
    center -->|"calls"| N_ui_viewer_bundle_e0["e0[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Sg()]] - `calls` [EXTRACTED]
- [[Zs()]] - `calls` [EXTRACTED]
- [[as()]] - `calls` [EXTRACTED]
- [[bg()]] - `calls` [EXTRACTED]
- [[bp()]] - `calls` [EXTRACTED]
- [[cy()]] - `calls` [EXTRACTED]
- [[e0()]] - `calls` [EXTRACTED]
- [[ed()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]
- [[xr()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Rd()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None