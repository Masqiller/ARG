---
source_file: "vendor/claude-mem/plugin/scripts/worker-cli.js"
type: "code"
community: "Community None"
degree: 6
location: "L5"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# get()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["get[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_scripts_worker_cli_js["worker-cli.js"]
    center -->|"calls"| N_scripts_worker_cli_getlevel["getLevel[]"]
    center -->|"calls"| N_scripts_worker_cli_getint["getInt[]"]
    center -->|"calls"| N_scripts_worker_cli_getbool["getBool[]"]
    center -->|"calls"| N_scripts_worker_cli_getportfromsettings["getPortFromSettings[]"]
    center -->|"calls"| N_scripts_worker_cli_h["H[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[H()]] - `calls` [EXTRACTED]
- [[getBool()]] - `calls` [EXTRACTED]
- [[getInt()]] - `calls` [EXTRACTED]
- [[getLevel()]] - `calls` [EXTRACTED]
- [[getPortFromSettings()]] - `calls` [EXTRACTED]
- [[worker-cli.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[get()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None