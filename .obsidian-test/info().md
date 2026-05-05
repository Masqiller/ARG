---
source_file: "vendor/claude-mem/plugin/scripts/worker-cli.js"
type: "code"
community: "Community None"
degree: 7
location: "L4"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# info()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["info[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_scripts_worker_cli_js["worker-cli.js"]
    center -->|"calls"| N_scripts_worker_cli_log["log[]"]
    center -->|"calls"| N_scripts_worker_cli_datain["dataIn[]"]
    center -->|"calls"| N_scripts_worker_cli_dataout["dataOut[]"]
    center -->|"calls"| N_scripts_worker_cli_success["success[]"]
    center -->|"calls"| N_scripts_worker_cli_timing["timing[]"]
    center -->|"calls"| N_scripts_worker_cli_loadfromfile["loadFromFile[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[dataIn()]] - `calls` [EXTRACTED]
- [[dataOut()]] - `calls` [EXTRACTED]
- [[loadFromFile()]] - `calls` [EXTRACTED]
- [[log()]] - `calls` [EXTRACTED]
- [[success()]] - `calls` [EXTRACTED]
- [[timing()]] - `calls` [EXTRACTED]
- [[worker-cli.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[info()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None