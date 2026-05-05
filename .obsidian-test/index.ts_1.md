---
source_file: "vendor/claude-mem/src/cli/adapters/index.ts"
type: "code"
community: "Community None"
degree: 8
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
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["index.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_hook_command_ts["hook-command.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_types_ts["types.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_adapters_gemini_cli_ts["gemini-cli.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_adapters_cursor_ts["cursor.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_adapters_windsurf_ts["windsurf.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_adapters_claude_code_ts["claude-code.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_adapters_raw_ts["raw.ts"]
    center -->|"contains"| N_adapters_index_getplatformadapter["getPlatformAdapter[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[claude-code.ts]] - `imports_from` [EXTRACTED]
- [[cursor.ts]] - `imports_from` [EXTRACTED]
- [[gemini-cli.ts]] - `imports_from` [EXTRACTED]
- [[getPlatformAdapter()]] - `contains` [EXTRACTED]
- [[hook-command.ts]] - `imports_from` [EXTRACTED]
- [[raw.ts]] - `imports_from` [EXTRACTED]
- [[types.ts]] - `imports_from` [EXTRACTED]
- [[windsurf.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[index.ts_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None