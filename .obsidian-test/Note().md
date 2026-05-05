---
source_file: "vendor/external_plugins/caveman/install.ps1"
type: "code"
community: "Community None"
degree: 5
location: "L118"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Note()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["Note[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_install_ps1["install.ps1"]
    center -->|"calls"| N_caveman_install_try_run["Try-Run[]"]
    center -->|"calls"| N_caveman_install_install_claude["Install-Claude[]"]
    center -->|"calls"| N_caveman_install_install_gemini["Install-Gemini[]"]
    center -->|"calls"| N_caveman_install_run_init["Run-Init[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Install-Claude()]] - `calls` [EXTRACTED]
- [[Install-Gemini()]] - `calls` [EXTRACTED]
- [[Run-Init()]] - `calls` [EXTRACTED]
- [[Try-Run()]] - `calls` [EXTRACTED]
- [[install.ps1]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Note()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None