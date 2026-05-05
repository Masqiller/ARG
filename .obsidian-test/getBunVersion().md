---
source_file: "vendor/claude-mem/src/npx-cli/install/setup-runtime.ts"
type: "code"
community: "Community None"
degree: 4
location: "L46"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getBunVersion()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["getBunVersion[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_npx_cli_install_setup_runtime_ts["setup-runtime.ts"]
    center -->|"calls"| N_install_setup_runtime_getbunpath["getBunPath[]"]
    center -->|"calls"| N_install_setup_runtime_ensurebun["ensureBun[]"]
    center -->|"calls"| N_install_setup_runtime_isinstallcurrent["isInstallCurrent[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ensureBun()]] - `calls` [EXTRACTED]
- [[getBunPath()]] - `calls` [EXTRACTED]
- [[isInstallCurrent()]] - `calls` [EXTRACTED]
- [[setup-runtime.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getBunVersion()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None