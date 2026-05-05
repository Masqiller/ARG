---
source_file: "vendor/claude-mem/src/npx-cli/install/setup-runtime.ts"
type: "code"
community: "Community None"
degree: 18
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# setup-runtime.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 18

## Architecture Graph
```mermaid
graph LR
    center["setup-runtime.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_npx_cli_commands_install_ts["install.ts"]
    center -->|"contains"| N_install_setup_runtime_markerpath["markerPath[]"]
    center -->|"contains"| N_install_setup_runtime_getbunpath["getBunPath[]"]
    center -->|"contains"| N_install_setup_runtime_isbuninstalled["isBunInstalled[]"]
    center -->|"contains"| N_install_setup_runtime_getbunversion["getBunVersion[]"]
    center -->|"contains"| N_install_setup_runtime_getuvpath["getUvPath[]"]
    center -->|"contains"| N_install_setup_runtime_isuvinstalled["isUvInstalled[]"]
    center -->|"contains"| N_install_setup_runtime_getuvversion["getUvVersion[]"]
    center -->|"contains"| N_install_setup_runtime_describeexecerror["describeExecError[]"]
    center -->|"contains"| N_install_setup_runtime_installbun["installBun[]"]
    center -->|"contains"| N_install_setup_runtime_installuv["installUv[]"]
    center -->|"contains"| N_install_setup_runtime_verifycriticalmodules["verifyCriticalModules[]"]
    center -->|"contains"| N_install_setup_runtime_ensurebun["ensureBun[]"]
    center -->|"contains"| N_install_setup_runtime_ensureuv["ensureUv[]"]
    center -->|"contains"| N_install_setup_runtime_installplugindependencies["installPluginDependencies[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[describeExecError()]] - `contains` [EXTRACTED]
- [[ensureBun()]] - `contains` [EXTRACTED]
- [[ensureUv()]] - `contains` [EXTRACTED]
- [[getBunPath()]] - `contains` [EXTRACTED]
- [[getBunVersion()]] - `contains` [EXTRACTED]
- [[getUvPath()]] - `contains` [EXTRACTED]
- [[getUvVersion()]] - `contains` [EXTRACTED]
- [[install.ts]] - `imports_from` [EXTRACTED]
- [[installBun()]] - `contains` [EXTRACTED]
- [[installPluginDependencies()]] - `contains` [EXTRACTED]
- [[installUv()]] - `contains` [EXTRACTED]
- [[isBunInstalled()]] - `contains` [EXTRACTED]
- [[isInstallCurrent()]] - `contains` [EXTRACTED]
- [[isUvInstalled()]] - `contains` [EXTRACTED]
- [[markerPath()]] - `contains` [EXTRACTED]
- [[readInstallMarker()]] - `contains` [EXTRACTED]
- [[verifyCriticalModules()]] - `contains` [EXTRACTED]
- [[writeInstallMarker()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[setup-runtime.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None