---
source_file: "vendor/claude-mem/plugin/scripts/worker-cli.js"
type: "code"
community: "Community None"
degree: 5
location: "L4"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# warn()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["warn[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_plugin_scripts_worker_cli_js["worker-cli.js"]
    center -->|"calls"| N_scripts_worker_cli_log["log[]"]
    center -->|"calls"| N_scripts_worker_cli_happypatherror["happyPathError[]"]
    center -->|"calls"| N_scripts_worker_cli_loadfromfile["loadFromFile[]"]
    center -->|"calls"| N_scripts_worker_cli_getpidinfo["getPidInfo[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[getPidInfo()]] - `calls` [EXTRACTED]
- [[happyPathError()]] - `calls` [EXTRACTED]
- [[loadFromFile()]] - `calls` [EXTRACTED]
- [[log()]] - `calls` [EXTRACTED]
- [[worker-cli.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[warn()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None