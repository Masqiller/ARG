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

# It()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["It[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_yn["Yn[]"]
    center -->|"calls"| N_ui_viewer_bundle_cg["cg[]"]
    center -->|"calls"| N_ui_viewer_bundle_ee["ee[]"]
    center -->|"calls"| N_ui_viewer_bundle_xg["xg[]"]
    center -->|"calls"| N_scripts_worker_cli_n["N[]"]
    center -->|"calls"| N_scripts_worker_cli_startwithbun["startWithBun[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[N()]] - `calls` [INFERRED]
- [[Yn()]] - `calls` [EXTRACTED]
- [[cg()]] - `calls` [EXTRACTED]
- [[ee()]] - `calls` [EXTRACTED]
- [[startWithBun()]] - `calls` [INFERRED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]
- [[xg()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[It()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None