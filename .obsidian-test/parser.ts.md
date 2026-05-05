---
source_file: "vendor/claude-mem/src/sdk/parser.ts"
type: "code"
community: "Community None"
degree: 17
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# parser.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 17

## Architecture Graph
```mermaid
graph LR
    center["parser.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_sdk_parse_summary_test_ts["parse-summary.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_sdk_parser_test_ts["parser.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_domain_modemanager_ts["ModeManager.ts"]
    center -->|"imports"| N_domain_modemanager_modemanager["ModeManager"]
    center -->|"contains"| N_sdk_parser_stripcodefences["stripCodeFences[]"]
    center -->|"contains"| N_sdk_parser_parseagentxml["parseAgentXml[]"]
    center -->|"contains"| N_sdk_parser_parseobservationblocks["parseObservationBlocks[]"]
    center -->|"contains"| N_sdk_parser_parsesummaryblock["parseSummaryBlock[]"]
    center -->|"contains"| N_sdk_parser_extractfield["extractField[]"]
    center -->|"contains"| N_sdk_parser_extractarrayelements["extractArrayElements[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_agents_responseprocessor_ts["ResponseProcessor.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_agents_types_ts["types.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_shared_ts["shared.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ChromaSync.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[ModeManager]] - `imports` [EXTRACTED]
- [[ModeManager.ts]] - `imports_from` [EXTRACTED]
- [[ResponseProcessor.ts]] - `imports_from` [EXTRACTED]
- [[TelegramNotifier.ts]] - `imports_from` [EXTRACTED]
- [[extractArrayElements()]] - `contains` [EXTRACTED]
- [[extractField()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[parse-summary.test.ts]] - `imports_from` [EXTRACTED]
- [[parseAgentXml()]] - `contains` [EXTRACTED]
- [[parseObservationBlocks()]] - `contains` [EXTRACTED]
- [[parseSummaryBlock()]] - `contains` [EXTRACTED]
- [[parser.test.ts]] - `imports_from` [EXTRACTED]
- [[shared.ts]] - `imports_from` [EXTRACTED]
- [[stripCodeFences()]] - `contains` [EXTRACTED]
- [[types.ts_1]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[parser.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None