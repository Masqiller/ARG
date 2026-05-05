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

# Yu()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["Yu[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_ws["ws[]"]
    center -->|"calls"| N_ui_viewer_bundle_qs["qs[]"]
    center -->|"calls"| N_ui_viewer_bundle_hg["hg[]"]
    center -->|"calls"| N_ui_viewer_bundle_bg["bg[]"]
    center -->|"calls"| N_ui_viewer_bundle_pg["pg[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[bg()]] - `calls` [EXTRACTED]
- [[hg()]] - `calls` [EXTRACTED]
- [[pg()]] - `calls` [EXTRACTED]
- [[qs()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]
- [[ws()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Yu()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None