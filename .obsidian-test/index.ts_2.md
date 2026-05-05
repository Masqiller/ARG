---
source_file: "vendor/claude-mem/src/cli/handlers/index.ts"
type: "code"
community: "Community None"
degree: 13
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# index.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 13

## Architecture Graph
```mermaid
graph LR
    center["index.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_hook_command_ts["hook-command.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_types_ts["types.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_observation_ts["observation.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_file_context_ts["file-context.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_context_ts["context.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_hook_constants_ts["hook-constants.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_session_init_ts["session-init.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_summarize_ts["summarize.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_user_message_ts["user-message.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_file_edit_ts["file-edit.ts"]
    center -->|"contains"| N_handlers_index_geteventhandler["getEventHandler[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[context.ts]] - `imports_from` [EXTRACTED]
- [[file-context.ts]] - `imports_from` [EXTRACTED]
- [[file-edit.ts]] - `imports_from` [EXTRACTED]
- [[getEventHandler()]] - `contains` [EXTRACTED]
- [[hook-command.ts]] - `imports_from` [EXTRACTED]
- [[hook-constants.ts]] - `imports_from` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[observation.ts]] - `imports_from` [EXTRACTED]
- [[session-init.ts]] - `imports_from` [EXTRACTED]
- [[summarize.ts]] - `imports_from` [EXTRACTED]
- [[types.ts]] - `imports_from` [EXTRACTED]
- [[user-message.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[index.ts_2]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None