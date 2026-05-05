---
source_file: "vendor/claude-mem/src/npx-cli/commands/ide-detection.ts"
type: "code"
community: "Community None"
degree: 2
location: "L15"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# isCommandInPath()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["isCommandInPath[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_npx_cli_commands_ide_detection_ts["ide-detection.ts"]
    center -->|"calls"| N_commands_ide_detection_detectinstalledides["detectInstalledIDEs[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[detectInstalledIDEs()]] - `calls` [EXTRACTED]
- [[ide-detection.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[isCommandInPath()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None