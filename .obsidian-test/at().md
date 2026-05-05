---
source_file: "vendor/claude-mem/plugin/ui/viewer-bundle.js"
type: "code"
community: "Community None"
degree: 10
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# at()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["at[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_e["E[]"]
    center -->|"calls"| N_ui_viewer_bundle_va["va[]"]
    center -->|"calls"| N_ui_viewer_bundle_mg["mg[]"]
    center -->|"calls"| N_ui_viewer_bundle_kc["kc[]"]
    center -->|"calls"| N_ui_viewer_bundle_qo["qo[]"]
    center -->|"calls"| N_ui_viewer_bundle_ir["ir[]"]
    center -->|"calls"| N_ui_viewer_bundle_xg["xg[]"]
    center -->|"calls"| N_ui_viewer_bundle_ee["ee[]"]
    center -->|"calls"| N_scripts_worker_cli_startwithbun["startWithBun[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[E()]] - `calls` [EXTRACTED]
- [[ee()]] - `calls` [EXTRACTED]
- [[ir()]] - `calls` [EXTRACTED]
- [[kc()]] - `calls` [EXTRACTED]
- [[mg()]] - `calls` [EXTRACTED]
- [[qo()]] - `calls` [EXTRACTED]
- [[startWithBun()]] - `calls` [INFERRED]
- [[va()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]
- [[xg()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[at()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None