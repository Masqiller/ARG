---
source_file: "vendor/claude-mem/src/shared/worker-utils.ts"
type: "code"
community: "Community None"
degree: 12
location: "L380"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# executeWithWorkerFallback()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 12

## Architecture Graph
```mermaid
graph LR
    center["executeWithWorkerFallback[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_cli_handlers_observation_ts["observation.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_handlers_file_context_ts["file-context.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_handlers_context_ts["context.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_handlers_summarize_ts["summarize.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_handlers_user_message_ts["user-message.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_handlers_file_edit_ts["file-edit.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_handlers_session_init_ts["session-init.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_shared_worker_utils_ts["worker-utils.ts"]
    center -->|"calls"| N_shared_worker_utils_workerhttprequest["workerHttpRequest[]"]
    center -->|"calls"| N_shared_worker_utils_ensureworkeraliveonce["ensureWorkerAliveOnce[]"]
    center -->|"calls"| N_shared_worker_utils_recordworkerunreachable["recordWorkerUnreachable[]"]
    center -->|"calls"| N_shared_worker_utils_resetworkerfailurecounter["resetWorkerFailureCounter[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[context.ts]] - `imports` [EXTRACTED]
- [[ensureWorkerAliveOnce()]] - `calls` [EXTRACTED]
- [[file-context.ts]] - `imports` [EXTRACTED]
- [[file-edit.ts]] - `imports` [EXTRACTED]
- [[observation.ts]] - `imports` [EXTRACTED]
- [[recordWorkerUnreachable()]] - `calls` [EXTRACTED]
- [[resetWorkerFailureCounter()]] - `calls` [EXTRACTED]
- [[session-init.ts]] - `imports` [EXTRACTED]
- [[summarize.ts]] - `imports` [EXTRACTED]
- [[user-message.ts]] - `imports` [EXTRACTED]
- [[worker-utils.ts]] - `contains` [EXTRACTED]
- [[workerHttpRequest()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[executeWithWorkerFallback()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None