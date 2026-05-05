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

# St()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["St[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_ui_viewer_bundle_js["viewer-bundle.js"]
    center -->|"calls"| N_ui_viewer_bundle_fd["Fd[]"]
    center -->|"calls"| N_ui_viewer_bundle_tg["tg[]"]
    center -->|"calls"| N_ui_viewer_bundle_ng["ng[]"]
    center -->|"calls"| N_ui_viewer_bundle_fv["Fv[]"]
    center -->|"calls"| N_ui_viewer_bundle_iv["Iv[]"]
    center -->|"calls"| N_ui_viewer_bundle_ig["ig[]"]
    center -->|"calls"| N_ui_viewer_bundle_ld["ld[]"]
    center -->|"calls"| N_ui_viewer_bundle_js["js[]"]
    center -->|"calls"| N_scripts_worker_cli_removepidfile["removePidFile[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Fd()]] - `calls` [EXTRACTED]
- [[Fv()]] - `calls` [EXTRACTED]
- [[Iv()]] - `calls` [EXTRACTED]
- [[ig()]] - `calls` [EXTRACTED]
- [[js()]] - `calls` [EXTRACTED]
- [[ld()]] - `calls` [EXTRACTED]
- [[ng()]] - `calls` [EXTRACTED]
- [[removePidFile()_1]] - `calls` [INFERRED]
- [[tg()]] - `calls` [EXTRACTED]
- [[viewer-bundle.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[St()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None