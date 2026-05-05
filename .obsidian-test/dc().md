---
source_file: "vendor/claude-mem/plugin/ui/viewer-bundle.js"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# dc()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["dc[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_v1["v1[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[v1()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[dc()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None