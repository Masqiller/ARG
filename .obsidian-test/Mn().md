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

# Mn()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["Mn[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_ei["Ei[]"]
    center -->|"calls"| N_ui_viewer_bundle_im["Im[]"]
    center -->|"calls"| N_ui_viewer_bundle_ho["Ho[]"]
    center -->|"calls"| N_ui_viewer_bundle_ed["ed[]"]
    center -->|"calls"| N_ui_viewer_bundle_td["td[]"]
    center -->|"calls"| N_ui_viewer_bundle_sg["Sg[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Ei()]] - `calls` [EXTRACTED]
- [[Ho()]] - `calls` [EXTRACTED]
- [[Im()]] - `calls` [EXTRACTED]
- [[Sg()]] - `calls` [EXTRACTED]
- [[ed()]] - `calls` [EXTRACTED]
- [[td()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Mn()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None