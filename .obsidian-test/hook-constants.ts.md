---
source_file: "vendor/claude-mem/src/shared/hook-constants.ts"
type: "code"
community: "Community None"
degree: 15
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# hook-constants.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 15

## Architecture Graph
```mermaid
graph LR
    center["hook-constants.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_hook_constants_test_ts["hook-constants.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_hook_command_ts["hook-command.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_observation_ts["observation.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_context_ts["context.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_index_ts["index.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_summarize_ts["summarize.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_user_message_ts["user-message.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_file_edit_ts["file-edit.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_session_init_ts["session-init.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_worker_utils_ts["worker-utils.ts"]
    center -->|"contains"| N_shared_hook_constants_gettimeout["getTimeout[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_spawner_ts["worker-spawner.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_infrastructure_processmanager_ts["ProcessManager.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_supervisor_shutdown_ts["shutdown.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ProcessManager.ts]] - `imports_from` [EXTRACTED]
- [[context.ts]] - `imports_from` [EXTRACTED]
- [[file-edit.ts]] - `imports_from` [EXTRACTED]
- [[getTimeout()]] - `contains` [EXTRACTED]
- [[hook-command.ts]] - `imports_from` [EXTRACTED]
- [[hook-constants.test.ts]] - `imports_from` [EXTRACTED]
- [[index.ts_2]] - `imports_from` [EXTRACTED]
- [[observation.ts]] - `imports_from` [EXTRACTED]
- [[session-init.ts]] - `imports_from` [EXTRACTED]
- [[shutdown.ts]] - `imports_from` [EXTRACTED]
- [[summarize.ts]] - `imports_from` [EXTRACTED]
- [[user-message.ts]] - `imports_from` [EXTRACTED]
- [[worker-service.ts]] - `imports_from` [EXTRACTED]
- [[worker-spawner.ts]] - `imports_from` [EXTRACTED]
- [[worker-utils.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[hook-constants.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None