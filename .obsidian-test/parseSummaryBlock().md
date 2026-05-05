---
source_file: "vendor/claude-mem/src/sdk/parser.ts"
type: "code"
community: "Community None"
degree: 3
location: "L153"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# parseSummaryBlock()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["parseSummaryBlock[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_sdk_parser_ts["parser.ts"]
    center -->|"calls"| N_sdk_parser_parseagentxml["parseAgentXml[]"]
    center -->|"calls"| N_sdk_parser_extractfield["extractField[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[extractField()]] - `calls` [EXTRACTED]
- [[parseAgentXml()]] - `calls` [EXTRACTED]
- [[parser.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[parseSummaryBlock()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None