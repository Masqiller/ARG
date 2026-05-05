---
source_file: "vendor/claude-mem/plugin/scripts/worker-cli.js"
type: "code"
community: "Community None"
degree: 8
location: "L5"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# start()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["start[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_scripts_worker_cli_js["worker-cli.js"]
    center -->|"calls"| N_scripts_worker_cli_isrunning["isRunning[]"]
    center -->|"calls"| N_scripts_worker_cli_getpidinfo["getPidInfo[]"]
    center -->|"calls"| N_scripts_worker_cli_w["W[]"]
    center -->|"calls"| N_scripts_worker_cli_getlogfilepath["getLogFilePath[]"]
    center -->|"calls"| N_scripts_worker_cli_startwithbun["startWithBun[]"]
    center -->|"calls"| N_scripts_worker_cli_restart["restart[]"]
    center -->|"calls"| N_scripts_worker_cli_pt["pt[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[W()]] - `calls` [EXTRACTED]
- [[getLogFilePath()]] - `calls` [EXTRACTED]
- [[getPidInfo()]] - `calls` [EXTRACTED]
- [[isRunning()]] - `calls` [EXTRACTED]
- [[pt()]] - `calls` [EXTRACTED]
- [[restart()]] - `calls` [EXTRACTED]
- [[startWithBun()]] - `calls` [EXTRACTED]
- [[worker-cli.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[start()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None