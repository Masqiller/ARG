---
source_file: "vendor/claude-mem/src/npx-cli/commands/ide-detection.ts"
type: "code"
community: "Community None"
degree: 7
location: "L40"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# detectInstalledIDEs()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["detectInstalledIDEs[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_npx_cli_commands_ide_detection_ts["ide-detection.ts"]
    center -->|"calls"| N_commands_ide_detection_iscommandinpath["isCommandInPath[]"]
    center -->|"calls"| N_commands_ide_detection_hasvscodeextension["hasVscodeExtension[]"]
    center -->|"imports"| N_vendor_claude_mem_src_npx_cli_commands_install_ts["install.ts"]
    center -->|"calls"| N_commands_install_makeidetask["makeIDETask[]"]
    center -->|"calls"| N_commands_install_promptforideselection["promptForIDESelection[]"]
    center -->|"calls"| N_commands_install_runinstallcommand["runInstallCommand[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[hasVscodeExtension()]] - `calls` [EXTRACTED]
- [[ide-detection.ts]] - `contains` [EXTRACTED]
- [[install.ts]] - `imports` [EXTRACTED]
- [[isCommandInPath()]] - `calls` [EXTRACTED]
- [[makeIDETask()]] - `calls` [INFERRED]
- [[promptForIDESelection()]] - `calls` [INFERRED]
- [[runInstallCommand()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[detectInstalledIDEs()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None