---
source_file: "vendor/claude-mem/src/npx-cli/commands/install.ts"
type: "code"
community: "Community None"
degree: 2
location: "L323"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# detectShellConfigFile()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["detectShellConfigFile[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_npx_cli_commands_install_ts["install.ts"]
    center -->|"calls"| N_commands_install_applyclaudecodepathsetupifneeded["applyClaudeCodePathSetupIfNeeded[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[applyClaudeCodePathSetupIfNeeded()]] - `calls` [EXTRACTED]
- [[install.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[detectShellConfigFile()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None