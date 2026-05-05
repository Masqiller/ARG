---
source_file: "vendor/claude-mem/src/utils/tag-stripping.ts"
type: "code"
community: "Community None"
degree: 13
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# tag-stripping.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 13

## Architecture Graph
```mermaid
graph LR
    center["tag-stripping.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_utils_tag_stripping_test_ts["tag-stripping.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_summarize_ts["summarize.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_session_init_ts["session-init.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_transcript_parser_ts["transcript-parser.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_shared_ts["shared.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_routes_sessionroutes_ts["SessionRoutes.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_context_observationcompiler_ts["ObservationCompiler.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"contains"| N_utils_tag_stripping_striptags["stripTags[]"]
    center -->|"contains"| N_utils_tag_stripping_stripmemorytagsfromjson["stripMemoryTagsFromJson[]"]
    center -->|"contains"| N_utils_tag_stripping_stripmemorytagsfromprompt["stripMemoryTagsFromPrompt[]"]
    center -->|"contains"| N_utils_tag_stripping_isinternalprotocolpayload["isInternalProtocolPayload[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[ObservationCompiler.ts]] - `imports_from` [EXTRACTED]
- [[SessionRoutes.ts]] - `imports_from` [EXTRACTED]
- [[isInternalProtocolPayload()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[session-init.ts]] - `imports_from` [EXTRACTED]
- [[shared.ts]] - `imports_from` [EXTRACTED]
- [[stripMemoryTagsFromJson()]] - `contains` [EXTRACTED]
- [[stripMemoryTagsFromPrompt()]] - `contains` [EXTRACTED]
- [[stripTags()]] - `contains` [EXTRACTED]
- [[summarize.ts]] - `imports_from` [EXTRACTED]
- [[tag-stripping.test.ts]] - `imports_from` [EXTRACTED]
- [[transcript-parser.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[tag-stripping.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None