---
source_file: "vendor/claude-mem/src/npx-cli/commands/install.ts"
type: "code"
community: "Community None"
degree: 4
location: "L128"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# enablePluginInClaudeSettings()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["enablePluginInClaudeSettings[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_npx_cli_commands_install_ts["install.ts"]
    center -->|"calls"| N_utils_json_utils_readjsonsafe["readJsonSafe[]"]
    center -->|"calls"| N_utils_paths_claudesettingspath["claudeSettingsPath[]"]
    center -->|"calls"| N_utils_paths_writejsonfileatomic["writeJsonFileAtomic[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[claudeSettingsPath()]] - `calls` [INFERRED]
- [[install.ts]] - `contains` [EXTRACTED]
- [[readJsonSafe()]] - `calls` [INFERRED]
- [[writeJsonFileAtomic()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[enablePluginInClaudeSettings()]]
```

#graphify/code #graphify/INFERRED #community/Community_None