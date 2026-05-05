---
source_file: "vendor/external_plugins/caveman/install.ps1"
type: "code"
community: "Community None"
degree: 21
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# install.ps1

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 21

## Architecture Graph
```mermaid
graph LR
    center["install.ps1"]:::centerNode
    center -->|"contains"| N_caveman_install_say["Say[]"]
    center -->|"contains"| N_caveman_install_note["Note[]"]
    center -->|"contains"| N_caveman_install_warn["Warn[]"]
    center -->|"contains"| N_caveman_install_ok["Ok[]"]
    center -->|"contains"| N_caveman_install_want["Want[]"]
    center -->|"contains"| N_caveman_install_has_cmd["Has-Cmd[]"]
    center -->|"contains"| N_caveman_install_get_reporoot["Get-RepoRoot[]"]
    center -->|"contains"| N_caveman_install_try_run["Try-Run[]"]
    center -->|"contains"| N_caveman_install_record_installed["Record-Installed[]"]
    center -->|"contains"| N_caveman_install_record_skipped["Record-Skipped[]"]
    center -->|"contains"| N_caveman_install_record_failed["Record-Failed[]"]
    center -->|"contains"| N_caveman_install_ensure_node["Ensure-Node[]"]
    center -->|"contains"| N_caveman_install_test_vscodeext["Test-VscodeExt[]"]
    center -->|"contains"| N_caveman_install_test_cursorext["Test-CursorExt[]"]
    center -->|"contains"| N_caveman_install_test_jetbrainsconfig["Test-JetbrainsConfig[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Ensure-Node()]] - `contains` [EXTRACTED]
- [[Get-RepoRoot()]] - `contains` [EXTRACTED]
- [[Has-Cmd()]] - `contains` [EXTRACTED]
- [[Install-Claude()]] - `contains` [EXTRACTED]
- [[Install-Gemini()]] - `contains` [EXTRACTED]
- [[Install-ViaSkills()]] - `contains` [EXTRACTED]
- [[Note()]] - `contains` [EXTRACTED]
- [[Ok()]] - `contains` [EXTRACTED]
- [[Record-Failed()]] - `contains` [EXTRACTED]
- [[Record-Installed()]] - `contains` [EXTRACTED]
- [[Record-Skipped()]] - `contains` [EXTRACTED]
- [[Resolve-DetectSpec()]] - `contains` [EXTRACTED]
- [[Run-Init()]] - `contains` [EXTRACTED]
- [[Say()]] - `contains` [EXTRACTED]
- [[Test-CursorExt()]] - `contains` [EXTRACTED]
- [[Test-JetbrainsConfig()]] - `contains` [EXTRACTED]
- [[Test-JetbrainsPlugin()]] - `contains` [EXTRACTED]
- [[Test-VscodeExt()]] - `contains` [EXTRACTED]
- [[Try-Run()]] - `contains` [EXTRACTED]
- [[Want()]] - `contains` [EXTRACTED]
- [[Warn()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[install.ps1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None