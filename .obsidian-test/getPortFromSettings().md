---
source_file: "vendor/claude-mem/plugin/scripts/worker-cli.js"
type: "code"
community: "Community None"
degree: 4
location: "L5"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getPortFromSettings()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["getPortFromSettings[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_scripts_worker_cli_js["worker-cli.js"]
    center -->|"calls"| N_scripts_worker_cli_get["get[]"]
    center -->|"calls"| N_scripts_worker_cli_loadfromfile["loadFromFile[]"]
    center -->|"calls"| N_scripts_worker_cli_stop["stop[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[get()]] - `calls` [EXTRACTED]
- [[loadFromFile()]] - `calls` [EXTRACTED]
- [[stop()]] - `calls` [EXTRACTED]
- [[worker-cli.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getPortFromSettings()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None