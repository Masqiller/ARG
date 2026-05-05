---
source_file: "vendor/claude-mem/plugin/scripts/worker-cli.js"
type: "code"
community: "Community None"
degree: 9
location: "L5"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# stop()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["stop[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_scripts_worker_cli_js["worker-cli.js"]
    center -->|"calls"| N_scripts_worker_cli_getpidinfo["getPidInfo[]"]
    center -->|"calls"| N_scripts_worker_cli_getportfromsettings["getPortFromSettings[]"]
    center -->|"calls"| N_scripts_worker_cli_tryhttpshutdown["tryHttpShutdown[]"]
    center -->|"calls"| N_scripts_worker_cli_removepidfile["removePidFile[]"]
    center -->|"calls"| N_scripts_worker_cli_waitforexit["waitForExit[]"]
    center -->|"calls"| N_scripts_worker_cli_isprocessalive["isProcessAlive[]"]
    center -->|"calls"| N_scripts_worker_cli_restart["restart[]"]
    center -->|"calls"| N_scripts_worker_cli_pt["pt[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[getPidInfo()]] - `calls` [EXTRACTED]
- [[getPortFromSettings()]] - `calls` [EXTRACTED]
- [[isProcessAlive()_1]] - `calls` [EXTRACTED]
- [[pt()]] - `calls` [EXTRACTED]
- [[removePidFile()_1]] - `calls` [EXTRACTED]
- [[restart()]] - `calls` [EXTRACTED]
- [[tryHttpShutdown()]] - `calls` [EXTRACTED]
- [[waitForExit()_1]] - `calls` [EXTRACTED]
- [[worker-cli.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[stop()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None