---
source_file: "vendor/claude-mem/tests/sdk/parser.test.ts"
type: "code"
community: "Community None"
degree: 3
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# parser.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["parser.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_sdk_parser_ts["parser.ts"]
    center -->|"imports"| N_sdk_parser_parseagentxml["parseAgentXml[]"]
    center -->|"contains"| N_sdk_parser_test_expectobservation["expectObservation[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[expectObservation()]] - `contains` [EXTRACTED]
- [[parseAgentXml()]] - `imports` [EXTRACTED]
- [[parser.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[parser.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None