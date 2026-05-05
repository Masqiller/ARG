---
source_file: "vendor/claude-mem/plugin/scripts/worker-cli.js"
type: "code"
community: "Community None"
degree: 5
location: "L5"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# status()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["status[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_scripts_worker_cli_js["worker-cli.js"]
    center -->|"calls"| N_scripts_worker_cli_getpidinfo["getPidInfo[]"]
    center -->|"calls"| N_scripts_worker_cli_isprocessalive["isProcessAlive[]"]
    center -->|"calls"| N_scripts_worker_cli_formatuptime["formatUptime[]"]
    center -->|"calls"| N_scripts_worker_cli_pt["pt[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[formatUptime()_1]] - `calls` [EXTRACTED]
- [[getPidInfo()]] - `calls` [EXTRACTED]
- [[isProcessAlive()_1]] - `calls` [EXTRACTED]
- [[pt()]] - `calls` [EXTRACTED]
- [[worker-cli.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[status()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None