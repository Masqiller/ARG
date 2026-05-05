---
source_file: "vendor/claude-mem/src/shared/should-track-project.ts"
type: "code"
community: "Community None"
degree: 13
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# should-track-project.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 13

## Architecture Graph
```mermaid
graph LR
    center["should-track-project.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_observation_ts["observation.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_file_context_ts["file-context.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_summarize_ts["summarize.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_session_init_ts["session-init.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_hook_settings_ts["hook-settings.ts"]
    center -->|"imports"| N_shared_hook_settings_loadfromfileonce["loadFromFileOnce[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_project_filter_ts["project-filter.ts"]
    center -->|"imports"| N_utils_project_filter_isprojectexcluded["isProjectExcluded[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_paths_ts["paths.ts"]
    center -->|"contains"| N_shared_should_track_project_iswithin["isWithin[]"]
    center -->|"contains"| N_shared_should_track_project_shouldtrackproject["shouldTrackProject[]"]
    center -->|"contains"| N_shared_should_track_project_shouldemitprojectrow["shouldEmitProjectRow[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_agents_observationbroadcaster_ts["ObservationBroadcaster.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ObservationBroadcaster.ts]] - `imports_from` [EXTRACTED]
- [[file-context.ts]] - `imports_from` [EXTRACTED]
- [[hook-settings.ts]] - `imports_from` [EXTRACTED]
- [[isProjectExcluded()]] - `imports` [EXTRACTED]
- [[isWithin()]] - `contains` [EXTRACTED]
- [[loadFromFileOnce()]] - `imports` [EXTRACTED]
- [[observation.ts]] - `imports_from` [EXTRACTED]
- [[paths.ts]] - `imports_from` [EXTRACTED]
- [[project-filter.ts]] - `imports_from` [EXTRACTED]
- [[session-init.ts]] - `imports_from` [EXTRACTED]
- [[shouldEmitProjectRow()]] - `contains` [EXTRACTED]
- [[shouldTrackProject()]] - `contains` [EXTRACTED]
- [[summarize.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[should-track-project.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None