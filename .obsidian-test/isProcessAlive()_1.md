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

# isProcessAlive()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["isProcessAlive[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_scripts_worker_cli_js["worker-cli.js"]
    center -->|"calls"| N_scripts_worker_cli_stop["stop[]"]
    center -->|"calls"| N_scripts_worker_cli_status["status[]"]
    center -->|"calls"| N_scripts_worker_cli_isrunning["isRunning[]"]
    center -->|"calls"| N_scripts_worker_cli_waitforhealth["waitForHealth[]"]
    center -->|"calls"| N_scripts_worker_cli_waitforexit["waitForExit[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[isRunning()]] - `calls` [EXTRACTED]
- [[status()_1]] - `calls` [EXTRACTED]
- [[stop()]] - `calls` [EXTRACTED]
- [[waitForExit()_1]] - `calls` [EXTRACTED]
- [[waitForHealth()_2]] - `calls` [EXTRACTED]
- [[worker-cli.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[isProcessAlive()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None