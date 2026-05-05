---
source_file: "vendor/claude-mem/src/shared/hook-settings.ts"
type: "code"
community: "Community None"
degree: 7
location: "L10"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# loadFromFileOnce()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["loadFromFileOnce[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_cli_handlers_context_ts["context.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_handlers_session_init_ts["session-init.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_shared_hook_settings_ts["hook-settings.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_shared_should_track_project_ts["should-track-project.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_shared_worker_utils_ts["worker-utils.ts"]
    center -->|"calls"| N_shared_should_track_project_shouldtrackproject["shouldTrackProject[]"]
    center -->|"calls"| N_shared_worker_utils_getfailloudthreshold["getFailLoudThreshold[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[context.ts]] - `imports` [EXTRACTED]
- [[getFailLoudThreshold()]] - `calls` [INFERRED]
- [[hook-settings.ts]] - `contains` [EXTRACTED]
- [[session-init.ts]] - `imports` [EXTRACTED]
- [[should-track-project.ts]] - `imports` [EXTRACTED]
- [[shouldTrackProject()]] - `calls` [INFERRED]
- [[worker-utils.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[loadFromFileOnce()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None