---
source_file: "vendor/claude-mem/src/shared/timeline-formatting.ts"
type: "code"
community: "Community None"
degree: 21
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# timeline-formatting.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 21

## Architecture Graph
```mermaid
graph LR
    center["timeline-formatting.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_shared_timeline_formatting_test_ts["timeline-formatting.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_claude_md_commands_ts["claude-md-commands.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_file_context_ts["file-context.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"contains"| N_shared_timeline_formatting_parsejsonarray["parseJsonArray[]"]
    center -->|"contains"| N_shared_timeline_formatting_formatdatetime["formatDateTime[]"]
    center -->|"contains"| N_shared_timeline_formatting_formattime["formatTime[]"]
    center -->|"contains"| N_shared_timeline_formatting_formatdate["formatDate[]"]
    center -->|"contains"| N_shared_timeline_formatting_torelativepath["toRelativePath[]"]
    center -->|"contains"| N_shared_timeline_formatting_extractfirstfile["extractFirstFile[]"]
    center -->|"contains"| N_shared_timeline_formatting_estimatetokens["estimateTokens[]"]
    center -->|"contains"| N_shared_timeline_formatting_groupbydate["groupByDate[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_searchmanager_ts["SearchManager.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_geminiprovider_ts["GeminiProvider.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[GeminiProvider.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[ResultFormatter.ts]] - `imports_from` [EXTRACTED]
- [[SearchManager.ts]] - `imports_from` [EXTRACTED]
- [[SearchRoutes.ts]] - `imports_from` [EXTRACTED]
- [[TimelineBuilder.ts]] - `imports_from` [EXTRACTED]
- [[TimelineRenderer.ts]] - `imports_from` [EXTRACTED]
- [[claude-md-commands.ts]] - `imports_from` [EXTRACTED]
- [[claude-md-utils.ts]] - `imports_from` [EXTRACTED]
- [[estimateTokens()_1]] - `contains` [EXTRACTED]
- [[extractFirstFile()]] - `contains` [EXTRACTED]
- [[file-context.ts]] - `imports_from` [EXTRACTED]
- [[formatDate()_1]] - `contains` [EXTRACTED]
- [[formatDateTime()]] - `contains` [EXTRACTED]
- [[formatTime()_1]] - `contains` [EXTRACTED]
- [[groupByDate()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[parseJsonArray()]] - `contains` [EXTRACTED]
- [[regenerate-claude-md.ts]] - `imports_from` [EXTRACTED]
- [[timeline-formatting.test.ts]] - `imports_from` [EXTRACTED]
- [[toRelativePath()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[timeline-formatting.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None