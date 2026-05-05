---
source_file: "vendor/claude-mem/src/cli/handlers/observation.ts"
type: "code"
community: "Community None"
degree: 12
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# observation.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 12

## Architecture Graph
```mermaid
graph LR
    center["observation.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_types_ts["types.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_worker_utils_ts["worker-utils.ts"]
    center -->|"imports"| N_shared_worker_utils_executewithworkerfallback["executeWithWorkerFallback[]"]
    center -->|"imports"| N_shared_worker_utils_isworkerfallback["isWorkerFallback[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_hook_constants_ts["hook-constants.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_should_track_project_ts["should-track-project.ts"]
    center -->|"imports"| N_shared_should_track_project_shouldtrackproject["shouldTrackProject[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_platform_source_ts["platform-source.ts"]
    center -->|"imports"| N_shared_platform_source_normalizeplatformsource["normalizePlatformSource[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_index_ts["index.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[executeWithWorkerFallback()]] - `imports` [EXTRACTED]
- [[hook-constants.ts]] - `imports_from` [EXTRACTED]
- [[index.ts_2]] - `imports_from` [EXTRACTED]
- [[isWorkerFallback()]] - `imports` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[normalizePlatformSource()]] - `imports` [EXTRACTED]
- [[platform-source.ts]] - `imports_from` [EXTRACTED]
- [[should-track-project.ts]] - `imports_from` [EXTRACTED]
- [[shouldTrackProject()]] - `imports` [EXTRACTED]
- [[types.ts]] - `imports_from` [EXTRACTED]
- [[worker-utils.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[observation.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None