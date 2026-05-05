---
source_file: "vendor/external_plugins/caveman/install.ps1"
type: "code"
community: "Community None"
degree: 6
location: "L270"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Resolve-DetectSpec()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["Resolve-DetectSpec[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_install_ps1["install.ps1"]
    center -->|"calls"| N_caveman_install_has_cmd["Has-Cmd[]"]
    center -->|"calls"| N_caveman_install_test_vscodeext["Test-VscodeExt[]"]
    center -->|"calls"| N_caveman_install_test_cursorext["Test-CursorExt[]"]
    center -->|"calls"| N_caveman_install_test_jetbrainsconfig["Test-JetbrainsConfig[]"]
    center -->|"calls"| N_caveman_install_test_jetbrainsplugin["Test-JetbrainsPlugin[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Has-Cmd()]] - `calls` [EXTRACTED]
- [[Test-CursorExt()]] - `calls` [EXTRACTED]
- [[Test-JetbrainsConfig()]] - `calls` [EXTRACTED]
- [[Test-JetbrainsPlugin()]] - `calls` [EXTRACTED]
- [[Test-VscodeExt()]] - `calls` [EXTRACTED]
- [[install.ps1]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Resolve-DetectSpec()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None