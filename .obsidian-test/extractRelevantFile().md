---
source_file: "vendor/claude-mem/src/cli/claude-md-commands.ts"
type: "code"
community: "Community None"
degree: 3
location: "L153"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# extractRelevantFile()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["extractRelevantFile[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_cli_claude_md_commands_ts["claude-md-commands.ts"]
    center -->|"calls"| N_cli_claude_md_commands_formatobservationsforclaudemd["formatObservationsForClaudeMd[]"]
    center -->|"calls"| N_shared_path_utils_isdirectchild["isDirectChild[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[claude-md-commands.ts]] - `contains` [EXTRACTED]
- [[formatObservationsForClaudeMd()]] - `calls` [EXTRACTED]
- [[isDirectChild()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extractRelevantFile()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None