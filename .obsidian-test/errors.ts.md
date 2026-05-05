---
source_file: "vendor/claude-mem/src/cli/adapters/errors.ts"
type: "code"
community: "Community None"
degree: 8
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# errors.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["errors.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_hook_command_ts["hook-command.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_adapters_gemini_cli_ts["gemini-cli.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_adapters_cursor_ts["cursor.ts"]
    center -->|"contains"| N_adapters_errors_adapterrejectedinput["AdapterRejectedInput"]
    center -->|"contains"| N_adapters_errors_isvalidcwd["isValidCwd[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_adapters_windsurf_ts["windsurf.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_adapters_raw_ts["raw.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_adapters_claude_code_ts["claude-code.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[AdapterRejectedInput]] - `contains` [EXTRACTED]
- [[claude-code.ts]] - `imports_from` [EXTRACTED]
- [[cursor.ts]] - `imports_from` [EXTRACTED]
- [[gemini-cli.ts]] - `imports_from` [EXTRACTED]
- [[hook-command.ts]] - `imports_from` [EXTRACTED]
- [[isValidCwd()]] - `contains` [EXTRACTED]
- [[raw.ts]] - `imports_from` [EXTRACTED]
- [[windsurf.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[errors.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None