---
source_file: "vendor/claude-mem/plugin/ui/viewer-bundle.js"
type: "code"
community: "Community None"
degree: 8
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Ar()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["Ar[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_xn["Xn[]"]
    center -->|"calls"| N_ui_viewer_bundle_fs["fs[]"]
    center -->|"calls"| N_ui_viewer_bundle_ql["Ql[]"]
    center -->|"calls"| N_ui_viewer_bundle_gu["gu[]"]
    center -->|"calls"| N_ui_viewer_bundle_zo["zo[]"]
    center -->|"calls"| N_ui_viewer_bundle_kg["kg[]"]
    center -->|"calls"| N_ui_viewer_bundle_ra["ra[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Ql()]] - `calls` [EXTRACTED]
- [[Xn()]] - `calls` [EXTRACTED]
- [[fs()]] - `calls` [EXTRACTED]
- [[gu()]] - `calls` [EXTRACTED]
- [[kg()]] - `calls` [EXTRACTED]
- [[ra()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]
- [[zo()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Ar()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None