---
source_file: "vendor/claude-mem/plugin/ui/viewer-bundle.js"
type: "code"
community: "Community None"
degree: 6
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Ru()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["Ru[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_xg["xg[]"]
    center -->|"calls"| N_ui_viewer_bundle_a["$a[]"]
    center -->|"calls"| N_ui_viewer_bundle_cy["cy[]"]
    center -->|"calls"| N_ui_viewer_bundle_vu["vu[]"]
    center -->|"calls"| N_ui_viewer_bundle_l0["l0[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[$a()]] - `calls` [EXTRACTED]
- [[cy()]] - `calls` [EXTRACTED]
- [[l0()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]
- [[vu()]] - `calls` [EXTRACTED]
- [[xg()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Ru()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None