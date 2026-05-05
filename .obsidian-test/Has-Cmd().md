---
source_file: "vendor/external_plugins/caveman/install.ps1"
type: "code"
community: "Community None"
degree: 5
location: "L156"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Has-Cmd()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["Has-Cmd[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_install_ps1["install.ps1"]
    center -->|"calls"| N_caveman_install_ensure_node["Ensure-Node[]"]
    center -->|"calls"| N_caveman_install_resolve_detectspec["Resolve-DetectSpec[]"]
    center -->|"calls"| N_caveman_install_install_claude["Install-Claude[]"]
    center -->|"calls"| N_caveman_install_run_init["Run-Init[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Ensure-Node()]] - `calls` [EXTRACTED]
- [[Install-Claude()]] - `calls` [EXTRACTED]
- [[Resolve-DetectSpec()]] - `calls` [EXTRACTED]
- [[Run-Init()]] - `calls` [EXTRACTED]
- [[install.ps1]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Has-Cmd()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None