---
source_file: "vendor/claude-mem/src/services/worker/search/TimelineBuilder.ts"
type: "code"
community: "Community None"
degree: 13
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# TimelineBuilder.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 13

## Architecture Graph
```mermaid
graph LR
    center["TimelineBuilder.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_timeline_formatting_ts["timeline-formatting.ts"]
    center -->|"imports"| N_shared_timeline_formatting_formatdatetime["formatDateTime[]"]
    center -->|"imports"| N_shared_timeline_formatting_formattime["formatTime[]"]
    center -->|"imports"| N_shared_timeline_formatting_formatdate["formatDate[]"]
    center -->|"imports"| N_shared_timeline_formatting_extractfirstfile["extractFirstFile[]"]
    center -->|"imports"| N_shared_timeline_formatting_estimatetokens["estimateTokens[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_search_searchorchestrator_ts["SearchOrchestrator.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_search_types_ts["types.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_domain_modemanager_ts["ModeManager.ts"]
    center -->|"imports"| N_domain_modemanager_modemanager["ModeManager"]
    center -->|"contains"| N_search_timelinebuilder_timelinebuilder["TimelineBuilder"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[ModeManager]] - `imports` [EXTRACTED]
- [[ModeManager.ts]] - `imports_from` [EXTRACTED]
- [[SearchOrchestrator.ts]] - `imports_from` [EXTRACTED]
- [[TimelineBuilder]] - `contains` [EXTRACTED]
- [[estimateTokens()_1]] - `imports` [EXTRACTED]
- [[extractFirstFile()]] - `imports` [EXTRACTED]
- [[formatDate()_1]] - `imports` [EXTRACTED]
- [[formatDateTime()]] - `imports` [EXTRACTED]
- [[formatTime()_1]] - `imports` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[timeline-formatting.ts]] - `imports_from` [EXTRACTED]
- [[types.ts_2]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[TimelineBuilder.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None