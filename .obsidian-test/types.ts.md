---
source_file: "vendor/claude-mem/src/cli/types.ts"
type: "code"
community: "Community None"
degree: 14
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# types.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 14

## Architecture Graph
```mermaid
graph LR
    center["types.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_adapters_gemini_cli_ts["gemini-cli.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_adapters_cursor_ts["cursor.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_adapters_windsurf_ts["windsurf.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_adapters_index_ts["index.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_adapters_raw_ts["raw.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_adapters_claude_code_ts["claude-code.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_observation_ts["observation.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_file_context_ts["file-context.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_context_ts["context.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_index_ts["index.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_summarize_ts["summarize.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_user_message_ts["user-message.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_file_edit_ts["file-edit.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_session_init_ts["session-init.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[claude-code.ts]] - `imports_from` [EXTRACTED]
- [[context.ts]] - `imports_from` [EXTRACTED]
- [[cursor.ts]] - `imports_from` [EXTRACTED]
- [[file-context.ts]] - `imports_from` [EXTRACTED]
- [[file-edit.ts]] - `imports_from` [EXTRACTED]
- [[gemini-cli.ts]] - `imports_from` [EXTRACTED]
- [[index.ts_1]] - `imports_from` [EXTRACTED]
- [[index.ts_2]] - `imports_from` [EXTRACTED]
- [[observation.ts]] - `imports_from` [EXTRACTED]
- [[raw.ts]] - `imports_from` [EXTRACTED]
- [[session-init.ts]] - `imports_from` [EXTRACTED]
- [[summarize.ts]] - `imports_from` [EXTRACTED]
- [[user-message.ts]] - `imports_from` [EXTRACTED]
- [[windsurf.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[types.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None