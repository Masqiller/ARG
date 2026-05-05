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

# getPidInfo()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["getPidInfo[]"]:::centerNode
    center -->|"calls"| N_ui_viewer_bundle_rt["rt[]"]
    center -->|"contains"| N_vendor_claude_mem_plugin_scripts_worker_cli_js["worker-cli.js"]
    center -->|"calls"| N_scripts_worker_cli_warn["warn[]"]
    center -->|"calls"| N_scripts_worker_cli_start["start[]"]
    center -->|"calls"| N_scripts_worker_cli_stop["stop[]"]
    center -->|"calls"| N_scripts_worker_cli_status["status[]"]
    center -->|"calls"| N_scripts_worker_cli_isrunning["isRunning[]"]
    center -->|"calls"| N_scripts_worker_cli_w["W[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[W()]] - `calls` [EXTRACTED]
- [[isRunning()]] - `calls` [EXTRACTED]
- [[rt()]] - `calls` [INFERRED]
- [[start()]] - `calls` [EXTRACTED]
- [[status()_1]] - `calls` [EXTRACTED]
- [[stop()]] - `calls` [EXTRACTED]
- [[warn()]] - `calls` [EXTRACTED]
- [[worker-cli.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getPidInfo()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None