---
source_file: "vendor/external_plugins/caveman/install.ps1"
type: "code"
community: "Community None"
degree: 6
location: "L179"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Try-Run()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["Try-Run[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_install_ps1["install.ps1"]
    center -->|"calls"| N_caveman_install_note["Note[]"]
    center -->|"calls"| N_caveman_install_install_claude["Install-Claude[]"]
    center -->|"calls"| N_caveman_install_install_gemini["Install-Gemini[]"]
    center -->|"calls"| N_caveman_install_install_viaskills["Install-ViaSkills[]"]
    center -->|"calls"| N_caveman_install_run_init["Run-Init[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Install-Claude()]] - `calls` [EXTRACTED]
- [[Install-Gemini()]] - `calls` [EXTRACTED]
- [[Install-ViaSkills()]] - `calls` [EXTRACTED]
- [[Note()]] - `calls` [EXTRACTED]
- [[Run-Init()]] - `calls` [EXTRACTED]
- [[install.ps1]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Try-Run()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None