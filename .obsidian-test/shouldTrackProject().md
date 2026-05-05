---
source_file: "vendor/claude-mem/src/shared/should-track-project.ts"
type: "code"
community: "Community None"
degree: 8
location: "L13"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# shouldTrackProject()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["shouldTrackProject[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_cli_handlers_observation_ts["observation.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_handlers_file_context_ts["file-context.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_handlers_summarize_ts["summarize.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_handlers_session_init_ts["session-init.ts"]
    center -->|"calls"| N_shared_hook_settings_loadfromfileonce["loadFromFileOnce[]"]
    center -->|"contains"| N_vendor_claude_mem_src_shared_should_track_project_ts["should-track-project.ts"]
    center -->|"calls"| N_shared_should_track_project_iswithin["isWithin[]"]
    center -->|"calls"| N_utils_project_filter_isprojectexcluded["isProjectExcluded[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[file-context.ts]] - `imports` [EXTRACTED]
- [[isProjectExcluded()]] - `calls` [INFERRED]
- [[isWithin()]] - `calls` [EXTRACTED]
- [[loadFromFileOnce()]] - `calls` [INFERRED]
- [[observation.ts]] - `imports` [EXTRACTED]
- [[session-init.ts]] - `imports` [EXTRACTED]
- [[should-track-project.ts]] - `contains` [EXTRACTED]
- [[summarize.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[shouldTrackProject()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None