---
source_file: "vendor/claude-mem/src/npx-cli/install/setup-runtime.ts"
type: "code"
community: "Community None"
degree: 4
location: "L77"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# isUvInstalled()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["isUvInstalled[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_npx_cli_install_setup_runtime_ts["setup-runtime.ts"]
    center -->|"calls"| N_install_setup_runtime_getuvpath["getUvPath[]"]
    center -->|"calls"| N_install_setup_runtime_installuv["installUv[]"]
    center -->|"calls"| N_install_setup_runtime_ensureuv["ensureUv[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ensureUv()]] - `calls` [EXTRACTED]
- [[getUvPath()]] - `calls` [EXTRACTED]
- [[installUv()]] - `calls` [EXTRACTED]
- [[setup-runtime.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[isUvInstalled()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None