---
source_file: "vendor/external_plugins/caveman/install.ps1"
type: "code"
community: "Community None"
degree: 9
location: "L359"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Install-Claude()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["Install-Claude[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_install_ps1["install.ps1"]
    center -->|"calls"| N_caveman_install_say["Say[]"]
    center -->|"calls"| N_caveman_install_note["Note[]"]
    center -->|"calls"| N_caveman_install_warn["Warn[]"]
    center -->|"calls"| N_caveman_install_has_cmd["Has-Cmd[]"]
    center -->|"calls"| N_caveman_install_try_run["Try-Run[]"]
    center -->|"calls"| N_caveman_install_record_installed["Record-Installed[]"]
    center -->|"calls"| N_caveman_install_record_skipped["Record-Skipped[]"]
    center -->|"calls"| N_caveman_install_record_failed["Record-Failed[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Has-Cmd()]] - `calls` [EXTRACTED]
- [[Note()]] - `calls` [EXTRACTED]
- [[Record-Failed()]] - `calls` [EXTRACTED]
- [[Record-Installed()]] - `calls` [EXTRACTED]
- [[Record-Skipped()]] - `calls` [EXTRACTED]
- [[Say()]] - `calls` [EXTRACTED]
- [[Try-Run()]] - `calls` [EXTRACTED]
- [[Warn()]] - `calls` [EXTRACTED]
- [[install.ps1]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Install-Claude()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None