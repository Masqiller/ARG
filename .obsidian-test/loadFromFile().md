---
source_file: "vendor/claude-mem/plugin/scripts/worker-cli.js"
type: "code"
community: "Community None"
degree: 7
location: "L5"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# loadFromFile()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["loadFromFile[]"]:::centerNode
    center -->|"calls"| N_ui_viewer_bundle_j["j[]"]
    center -->|"contains"| N_vendor_claude_mem_plugin_scripts_worker_cli_js["worker-cli.js"]
    center -->|"calls"| N_scripts_worker_cli_info["info[]"]
    center -->|"calls"| N_scripts_worker_cli_warn["warn[]"]
    center -->|"calls"| N_scripts_worker_cli_getalldefaults["getAllDefaults[]"]
    center -->|"calls"| N_scripts_worker_cli_getportfromsettings["getPortFromSettings[]"]
    center -->|"calls"| N_scripts_worker_cli_h["H[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[H()]] - `calls` [EXTRACTED]
- [[getAllDefaults()]] - `calls` [EXTRACTED]
- [[getPortFromSettings()]] - `calls` [EXTRACTED]
- [[info()]] - `calls` [EXTRACTED]
- [[j()]] - `calls` [INFERRED]
- [[warn()]] - `calls` [EXTRACTED]
- [[worker-cli.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[loadFromFile()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None