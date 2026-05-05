---
source_file: "vendor/claude-mem/plugin/ui/viewer-bundle.js"
type: "code"
community: "Community None"
degree: 6
location: "L9"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ki()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["ki[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_io["io[]"]
    center -->|"calls"| N_ui_viewer_bundle_na["Na[]"]
    center -->|"calls"| N_ui_viewer_bundle_fy["fy[]"]
    center -->|"calls"| N_ui_viewer_bundle_v0["v0[]"]
    center -->|"calls"| N_ui_viewer_bundle_xd["xd[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Na()]] - `calls` [EXTRACTED]
- [[fy()]] - `calls` [EXTRACTED]
- [[io()]] - `calls` [EXTRACTED]
- [[v0()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]
- [[xd()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ki()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None