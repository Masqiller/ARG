---
source_file: "vendor/claude-mem/src/npx-cli/commands/install.ts"
type: "code"
community: "Community None"
degree: 4
location: "L438"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# promptForIDESelection()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["promptForIDESelection[]"]:::centerNode
    center -->|"calls"| N_commands_ide_detection_detectinstalledides["detectInstalledIDEs[]"]
    center -->|"contains"| N_vendor_claude_mem_src_npx_cli_commands_install_ts["install.ts"]
    center -->|"calls"| N_commands_install_installclaudecode["installClaudeCode[]"]
    center -->|"calls"| N_commands_install_runinstallcommand["runInstallCommand[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[detectInstalledIDEs()]] - `calls` [INFERRED]
- [[install.ts]] - `contains` [EXTRACTED]
- [[installClaudeCode()]] - `calls` [EXTRACTED]
- [[runInstallCommand()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[promptForIDESelection()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None