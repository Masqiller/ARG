---
source_file: "vendor/claude-mem/plugin/scripts/worker-cli.js"
type: "code"
community: "Community None"
degree: 9
location: "L3"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# log()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["log[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_scripts_worker_cli_js["worker-cli.js"]
    center -->|"calls"| N_scripts_worker_cli_getlevel["getLevel[]"]
    center -->|"calls"| N_scripts_worker_cli_formatdata["formatData[]"]
    center -->|"calls"| N_scripts_worker_cli_formattimestamp["formatTimestamp[]"]
    center -->|"calls"| N_scripts_worker_cli_error["error[]"]
    center -->|"calls"| N_scripts_worker_cli_debug["debug[]"]
    center -->|"calls"| N_scripts_worker_cli_info["info[]"]
    center -->|"calls"| N_scripts_worker_cli_warn["warn[]"]
    center -->|"calls"| N_scripts_worker_cli_pt["pt[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[debug()]] - `calls` [EXTRACTED]
- [[error()]] - `calls` [EXTRACTED]
- [[formatData()]] - `calls` [EXTRACTED]
- [[formatTimestamp()]] - `calls` [EXTRACTED]
- [[getLevel()]] - `calls` [EXTRACTED]
- [[info()]] - `calls` [EXTRACTED]
- [[pt()]] - `calls` [EXTRACTED]
- [[warn()]] - `calls` [EXTRACTED]
- [[worker-cli.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[log()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None