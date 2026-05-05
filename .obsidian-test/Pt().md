---
source_file: "vendor/claude-mem/plugin/ui/viewer-bundle.js"
type: "code"
community: "Community None"
degree: 6
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Pt()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["Pt[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_re["Re[]"]
    center -->|"calls"| N_ui_viewer_bundle_m["$m[]"]
    center -->|"calls"| N_ui_viewer_bundle_ey["ey[]"]
    center -->|"calls"| N_ui_viewer_bundle_ty["ty[]"]
    center -->|"calls"| N_ui_viewer_bundle_bg["bg[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[$m()]] - `calls` [EXTRACTED]
- [[Re()]] - `calls` [EXTRACTED]
- [[bg()]] - `calls` [EXTRACTED]
- [[ey()]] - `calls` [EXTRACTED]
- [[ty()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Pt()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None