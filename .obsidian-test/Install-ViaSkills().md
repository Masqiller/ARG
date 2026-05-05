---
source_file: "vendor/external_plugins/caveman/install.ps1"
type: "code"
community: "Community None"
degree: 6
location: "L505"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Install-ViaSkills()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["Install-ViaSkills[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_install_ps1["install.ps1"]
    center -->|"calls"| N_caveman_install_say["Say[]"]
    center -->|"calls"| N_caveman_install_try_run["Try-Run[]"]
    center -->|"calls"| N_caveman_install_record_installed["Record-Installed[]"]
    center -->|"calls"| N_caveman_install_record_failed["Record-Failed[]"]
    center -->|"calls"| N_caveman_install_ensure_node["Ensure-Node[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Ensure-Node()]] - `calls` [EXTRACTED]
- [[Record-Failed()]] - `calls` [EXTRACTED]
- [[Record-Installed()]] - `calls` [EXTRACTED]
- [[Say()]] - `calls` [EXTRACTED]
- [[Try-Run()]] - `calls` [EXTRACTED]
- [[install.ps1]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Install-ViaSkills()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None