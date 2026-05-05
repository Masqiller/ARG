---
source_file: "vendor/claude-mem/plugin/ui/viewer-bundle.js"
type: "code"
community: "Community None"
degree: 4
location: "L3"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Mc()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["Mc[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_e["E[]"]
    center -->|"calls"| N_ui_viewer_bundle_gn["gn[]"]
    center -->|"calls"| N_ui_viewer_bundle_u1["U1[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[E()]] - `calls` [EXTRACTED]
- [[U1()]] - `calls` [EXTRACTED]
- [[gn()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Mc()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None