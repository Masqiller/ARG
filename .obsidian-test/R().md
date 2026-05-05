---
source_file: "vendor/claude-mem/plugin/scripts/worker-cli.js"
type: "code"
community: "Community None"
degree: 4
location: "L5"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# R()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["R[]"]:::centerNode
    center -->|"calls"| N_ui_viewer_bundle_hg["hg[]"]
    center -->|"contains"| N_vendor_claude_mem_plugin_scripts_worker_cli_js["worker-cli.js"]
    center -->|"calls"| N_scripts_worker_cli_n["N[]"]
    center -->|"calls"| N_scripts_worker_cli_startwithbun["startWithBun[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[N()]] - `calls` [EXTRACTED]
- [[hg()]] - `calls` [INFERRED]
- [[startWithBun()]] - `calls` [EXTRACTED]
- [[worker-cli.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[R()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None