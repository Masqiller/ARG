---
source_file: "vendor/claude-mem/src/npx-cli/utils/bun-resolver.ts"
type: "code"
community: "Community None"
degree: 4
location: "L23"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# resolveBunBinaryPath()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["resolveBunBinaryPath[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_npx_cli_commands_runtime_ts["runtime.ts"]
    center -->|"calls"| N_commands_runtime_resolvebunorexit["resolveBunOrExit[]"]
    center -->|"contains"| N_vendor_claude_mem_src_npx_cli_utils_bun_resolver_ts["bun-resolver.ts"]
    center -->|"calls"| N_utils_bun_resolver_buncandidatepaths["bunCandidatePaths[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[bun-resolver.ts]] - `contains` [EXTRACTED]
- [[bunCandidatePaths()]] - `calls` [EXTRACTED]
- [[resolveBunOrExit()]] - `calls` [INFERRED]
- [[runtime.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[resolveBunBinaryPath()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None