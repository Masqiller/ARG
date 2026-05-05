---
source_file: "vendor/claude-mem/src/sdk/parser.ts"
type: "code"
community: "Community None"
degree: 9
location: "L41"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# parseAgentXml()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["parseAgentXml[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_sdk_parse_summary_test_ts["parse-summary.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_tests_sdk_parser_test_ts["parser.test.ts"]
    center -->|"calls"| N_sdk_parser_test_expectobservation["expectObservation[]"]
    center -->|"contains"| N_vendor_claude_mem_src_sdk_parser_ts["parser.ts"]
    center -->|"calls"| N_sdk_parser_stripcodefences["stripCodeFences[]"]
    center -->|"calls"| N_sdk_parser_parseobservationblocks["parseObservationBlocks[]"]
    center -->|"calls"| N_sdk_parser_parsesummaryblock["parseSummaryBlock[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_agents_responseprocessor_ts["ResponseProcessor.ts"]
    center -->|"calls"| N_agents_responseprocessor_processagentresponse["processAgentResponse[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ResponseProcessor.ts]] - `imports` [EXTRACTED]
- [[expectObservation()]] - `calls` [INFERRED]
- [[parse-summary.test.ts]] - `imports` [EXTRACTED]
- [[parseObservationBlocks()]] - `calls` [EXTRACTED]
- [[parseSummaryBlock()]] - `calls` [EXTRACTED]
- [[parser.test.ts]] - `imports` [EXTRACTED]
- [[parser.ts]] - `contains` [EXTRACTED]
- [[processAgentResponse()]] - `calls` [INFERRED]
- [[stripCodeFences()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[parseAgentXml()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None