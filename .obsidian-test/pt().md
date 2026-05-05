---
source_file: "vendor/claude-mem/plugin/scripts/worker-cli.js"
type: "code"
community: "Community None"
degree: 7
location: "L19"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# pt()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["pt[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_scripts_worker_cli_js["worker-cli.js"]
    center -->|"calls"| N_scripts_worker_cli_log["log[]"]
    center -->|"calls"| N_scripts_worker_cli_error["error[]"]
    center -->|"calls"| N_scripts_worker_cli_start["start[]"]
    center -->|"calls"| N_scripts_worker_cli_stop["stop[]"]
    center -->|"calls"| N_scripts_worker_cli_restart["restart[]"]
    center -->|"calls"| N_scripts_worker_cli_status["status[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[error()]] - `calls` [EXTRACTED]
- [[log()]] - `calls` [EXTRACTED]
- [[restart()]] - `calls` [EXTRACTED]
- [[start()]] - `calls` [EXTRACTED]
- [[status()_1]] - `calls` [EXTRACTED]
- [[stop()]] - `calls` [EXTRACTED]
- [[worker-cli.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[pt()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None