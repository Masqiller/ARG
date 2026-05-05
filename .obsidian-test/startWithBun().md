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

# startWithBun()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["startWithBun[]"]:::centerNode
    center -->|"calls"| N_ui_viewer_bundle_ot["ot[]"]
    center -->|"calls"| N_ui_viewer_bundle_it["It[]"]
    center -->|"calls"| N_ui_viewer_bundle_at["at[]"]
    center -->|"contains"| N_vendor_claude_mem_plugin_scripts_worker_cli_js["worker-cli.js"]
    center -->|"calls"| N_scripts_worker_cli_r["R[]"]
    center -->|"calls"| N_scripts_worker_cli_start["start[]"]
    center -->|"calls"| N_scripts_worker_cli_escapepowershellstring["escapePowerShellString[]"]
    center -->|"calls"| N_scripts_worker_cli_writepidfile["writePidFile[]"]
    center -->|"calls"| N_scripts_worker_cli_waitforhealth["waitForHealth[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[It()]] - `calls` [INFERRED]
- [[R()]] - `calls` [EXTRACTED]
- [[at()]] - `calls` [INFERRED]
- [[escapePowerShellString()]] - `calls` [EXTRACTED]
- [[ot()]] - `calls` [INFERRED]
- [[start()]] - `calls` [EXTRACTED]
- [[waitForHealth()_2]] - `calls` [EXTRACTED]
- [[worker-cli.js]] - `contains` [EXTRACTED]
- [[writePidFile()_1]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[startWithBun()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None