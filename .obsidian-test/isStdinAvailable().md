---
source_file: "vendor/claude-mem/src/cli/stdin-reader.ts"
type: "code"
community: "Community None"
degree: 2
location: "L4"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# isStdinAvailable()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["isStdinAvailable[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_cli_stdin_reader_ts["stdin-reader.ts"]
    center -->|"calls"| N_cli_stdin_reader_readjsonfromstdin["readJsonFromStdin[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[readJsonFromStdin()]] - `calls` [EXTRACTED]
- [[stdin-reader.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[isStdinAvailable()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None