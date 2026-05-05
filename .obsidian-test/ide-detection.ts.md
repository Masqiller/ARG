---
source_file: "vendor/claude-mem/src/npx-cli/commands/ide-detection.ts"
type: "code"
community: "Community None"
degree: 5
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ide-detection.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["ide-detection.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_npx_cli_utils_paths_ts["paths.ts"]
    center -->|"contains"| N_commands_ide_detection_iscommandinpath["isCommandInPath[]"]
    center -->|"contains"| N_commands_ide_detection_hasvscodeextension["hasVscodeExtension[]"]
    center -->|"contains"| N_commands_ide_detection_detectinstalledides["detectInstalledIDEs[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_npx_cli_commands_install_ts["install.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[detectInstalledIDEs()]] - `contains` [EXTRACTED]
- [[hasVscodeExtension()]] - `contains` [EXTRACTED]
- [[install.ts]] - `imports_from` [EXTRACTED]
- [[isCommandInPath()]] - `contains` [EXTRACTED]
- [[paths.ts_1]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ide-detection.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None