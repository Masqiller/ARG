---
source_file: "vendor/claude-mem/plugin/ui/viewer-bundle.js"
type: "code"
community: "Community None"
degree: 5
location: "L11"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ft()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["ft[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_ee["ee[]"]
    center -->|"calls"| N_ui_viewer_bundle_ah["ah[]"]
    center -->|"calls"| N_ui_viewer_bundle_je["jE[]"]
    center -->|"calls"| N_ui_viewer_bundle_nh["Nh[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Nh()]] - `calls` [EXTRACTED]
- [[ah()]] - `calls` [EXTRACTED]
- [[ee()]] - `calls` [EXTRACTED]
- [[jE()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ft()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None