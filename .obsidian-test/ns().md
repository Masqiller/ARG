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

# ns()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["ns[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_wp["wp[]"]
    center -->|"calls"| N_ui_viewer_bundle_dr["Dr[]"]
    center -->|"calls"| N_ui_viewer_bundle_dg["dg[]"]
    center -->|"calls"| N_ui_viewer_bundle_zo["zo[]"]
    center -->|"calls"| N_ui_viewer_bundle_su["Su[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Dr()]] - `calls` [EXTRACTED]
- [[Su()]] - `calls` [EXTRACTED]
- [[dg()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]
- [[wp()]] - `calls` [EXTRACTED]
- [[zo()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ns()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None