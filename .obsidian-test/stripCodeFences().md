---
source_file: "vendor/claude-mem/src/sdk/parser.ts"
type: "code"
community: "Community None"
degree: 2
location: "L10"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# stripCodeFences()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["stripCodeFences[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_sdk_parser_ts["parser.ts"]
    center -->|"calls"| N_sdk_parser_parseagentxml["parseAgentXml[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[parseAgentXml()]] - `calls` [EXTRACTED]
- [[parser.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[stripCodeFences()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None