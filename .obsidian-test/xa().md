---
source_file: "vendor/claude-mem/plugin/ui/viewer-bundle.js"
type: "code"
community: "Community None"
degree: 8
location: "L9"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# xa()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["xa[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_xt["xt[]"]
    center -->|"calls"| N_ui_viewer_bundle_ry["ry[]"]
    center -->|"calls"| N_ui_viewer_bundle_od["od[]"]
    center -->|"calls"| N_ui_viewer_bundle_md["md[]"]
    center -->|"calls"| N_ui_viewer_bundle_hy["hy[]"]
    center -->|"calls"| N_ui_viewer_bundle_by["by[]"]
    center -->|"calls"| N_ui_viewer_bundle_wy["wy[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[by()]] - `calls` [EXTRACTED]
- [[hy()]] - `calls` [EXTRACTED]
- [[md()]] - `calls` [EXTRACTED]
- [[od()]] - `calls` [EXTRACTED]
- [[ry()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]
- [[wy()]] - `calls` [EXTRACTED]
- [[xt()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[xa()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None