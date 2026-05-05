---
source_file: "vendor/claude-mem/tests/sdk/parser.test.ts"
type: "code"
community: "Community None"
degree: 2
location: "L15"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# expectObservation()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["expectObservation[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_tests_sdk_parser_test_ts["parser.test.ts"]
    center -->|"calls"| N_sdk_parser_parseagentxml["parseAgentXml[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[parseAgentXml()]] - `calls` [INFERRED]
- [[parser.test.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[expectObservation()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None