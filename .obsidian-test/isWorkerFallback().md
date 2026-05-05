---
source_file: "vendor/claude-mem/src/shared/worker-utils.ts"
type: "code"
community: "Community None"
degree: 8
location: "L370"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# isWorkerFallback()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["isWorkerFallback[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_cli_handlers_observation_ts["observation.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_handlers_file_context_ts["file-context.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_handlers_context_ts["context.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_handlers_summarize_ts["summarize.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_handlers_user_message_ts["user-message.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_handlers_file_edit_ts["file-edit.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_handlers_session_init_ts["session-init.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_shared_worker_utils_ts["worker-utils.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[context.ts]] - `imports` [EXTRACTED]
- [[file-context.ts]] - `imports` [EXTRACTED]
- [[file-edit.ts]] - `imports` [EXTRACTED]
- [[observation.ts]] - `imports` [EXTRACTED]
- [[session-init.ts]] - `imports` [EXTRACTED]
- [[summarize.ts]] - `imports` [EXTRACTED]
- [[user-message.ts]] - `imports` [EXTRACTED]
- [[worker-utils.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[isWorkerFallback()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None