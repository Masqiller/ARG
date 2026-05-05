---
source_file: "vendor/claude-mem/src/npx-cli/install/setup-runtime.ts"
type: "code"
community: "Community None"
degree: 6
location: "L188"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ensureBun()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["ensureBun[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_npx_cli_commands_install_ts["install.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_npx_cli_install_setup_runtime_ts["setup-runtime.ts"]
    center -->|"calls"| N_install_setup_runtime_getbunpath["getBunPath[]"]
    center -->|"calls"| N_install_setup_runtime_isbuninstalled["isBunInstalled[]"]
    center -->|"calls"| N_install_setup_runtime_getbunversion["getBunVersion[]"]
    center -->|"calls"| N_install_setup_runtime_installbun["installBun[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[getBunPath()]] - `calls` [EXTRACTED]
- [[getBunVersion()]] - `calls` [EXTRACTED]
- [[install.ts]] - `imports` [EXTRACTED]
- [[installBun()]] - `calls` [EXTRACTED]
- [[isBunInstalled()]] - `calls` [EXTRACTED]
- [[setup-runtime.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ensureBun()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None