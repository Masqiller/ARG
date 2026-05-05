---
source_file: "vendor/claude-mem/src/npx-cli/install/setup-runtime.ts"
type: "code"
community: "Community None"
degree: 5
location: "L263"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# isInstallCurrent()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["isInstallCurrent[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_setup_runtime_test_ts["setup-runtime.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_npx_cli_commands_install_ts["install.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_npx_cli_install_setup_runtime_ts["setup-runtime.ts"]
    center -->|"calls"| N_install_setup_runtime_getbunversion["getBunVersion[]"]
    center -->|"calls"| N_install_setup_runtime_readinstallmarker["readInstallMarker[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[getBunVersion()]] - `calls` [EXTRACTED]
- [[install.ts]] - `imports` [EXTRACTED]
- [[readInstallMarker()]] - `calls` [EXTRACTED]
- [[setup-runtime.test.ts]] - `imports` [EXTRACTED]
- [[setup-runtime.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[isInstallCurrent()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None