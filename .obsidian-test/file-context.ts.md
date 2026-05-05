---
source_file: "vendor/claude-mem/src/cli/handlers/file-context.ts"
type: "code"
community: "Community None"
degree: 19
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# file-context.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 19

## Architecture Graph
```mermaid
graph LR
    center["file-context.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_hooks_file_context_test_ts["file-context.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_types_ts["types.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_worker_utils_ts["worker-utils.ts"]
    center -->|"imports"| N_shared_worker_utils_executewithworkerfallback["executeWithWorkerFallback[]"]
    center -->|"imports"| N_shared_worker_utils_isworkerfallback["isWorkerFallback[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_timeline_formatting_ts["timeline-formatting.ts"]
    center -->|"imports"| N_shared_timeline_formatting_parsejsonarray["parseJsonArray[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_should_track_project_ts["should-track-project.ts"]
    center -->|"imports"| N_shared_should_track_project_shouldtrackproject["shouldTrackProject[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_project_name_ts["project-name.ts"]
    center -->|"imports"| N_utils_project_name_getprojectcontext["getProjectContext[]"]
    center -->|"contains"| N_handlers_file_context_compacttime["compactTime[]"]
    center -->|"contains"| N_handlers_file_context_formattime["formatTime[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[compactTime()]] - `contains` [EXTRACTED]
- [[deduplicateObservations()]] - `contains` [EXTRACTED]
- [[executeWithWorkerFallback()]] - `imports` [EXTRACTED]
- [[file-context.test.ts]] - `imports_from` [EXTRACTED]
- [[formatDate()]] - `contains` [EXTRACTED]
- [[formatFileTimeline()]] - `contains` [EXTRACTED]
- [[formatTime()]] - `contains` [EXTRACTED]
- [[getProjectContext()]] - `imports` [EXTRACTED]
- [[index.ts_2]] - `imports_from` [EXTRACTED]
- [[isWorkerFallback()]] - `imports` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[parseJsonArray()]] - `imports` [EXTRACTED]
- [[project-name.ts]] - `imports_from` [EXTRACTED]
- [[should-track-project.ts]] - `imports_from` [EXTRACTED]
- [[shouldTrackProject()]] - `imports` [EXTRACTED]
- [[timeline-formatting.ts]] - `imports_from` [EXTRACTED]
- [[types.ts]] - `imports_from` [EXTRACTED]
- [[worker-utils.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[file-context.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None