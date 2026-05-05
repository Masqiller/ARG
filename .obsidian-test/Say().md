---
source_file: "vendor/external_plugins/caveman/install.ps1"
type: "code"
community: "Community None"
degree: 4
location: "L114"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Say()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["Say[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_install_ps1["install.ps1"]
    center -->|"calls"| N_caveman_install_install_claude["Install-Claude[]"]
    center -->|"calls"| N_caveman_install_install_gemini["Install-Gemini[]"]
    center -->|"calls"| N_caveman_install_install_viaskills["Install-ViaSkills[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Install-Claude()]] - `calls` [EXTRACTED]
- [[Install-Gemini()]] - `calls` [EXTRACTED]
- [[Install-ViaSkills()]] - `calls` [EXTRACTED]
- [[install.ps1]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Say()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None