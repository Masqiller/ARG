---
source_file: "vendor/claude-mem/plugin/scripts/worker-cli.js"
type: "code"
community: "Community None"
degree: 4
location: "L2"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getLevel()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["getLevel[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_scripts_worker_cli_js["worker-cli.js"]
    center -->|"calls"| N_scripts_worker_cli_get["get[]"]
    center -->|"calls"| N_scripts_worker_cli_formatdata["formatData[]"]
    center -->|"calls"| N_scripts_worker_cli_log["log[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[formatData()]] - `calls` [EXTRACTED]
- [[get()]] - `calls` [EXTRACTED]
- [[log()]] - `calls` [EXTRACTED]
- [[worker-cli.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getLevel()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None