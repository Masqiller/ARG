---
source_file: "vendor/claude-mem/src/cli/adapters/errors.ts"
type: "code"
community: "Community None"
degree: 8
location: "L2"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# AdapterRejectedInput

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["AdapterRejectedInput"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_cli_hook_command_ts["hook-command.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_adapters_gemini_cli_ts["gemini-cli.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_adapters_cursor_ts["cursor.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_cli_adapters_errors_ts["errors.ts"]
    center -->|"method"| N_adapters_errors_adapterrejectedinput_constructor[".constructor[]"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_adapters_windsurf_ts["windsurf.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_adapters_raw_ts["raw.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_adapters_claude_code_ts["claude-code.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.constructor()_3]] - `method` [EXTRACTED]
- [[claude-code.ts]] - `imports` [EXTRACTED]
- [[cursor.ts]] - `imports` [EXTRACTED]
- [[errors.ts]] - `contains` [EXTRACTED]
- [[gemini-cli.ts]] - `imports` [EXTRACTED]
- [[hook-command.ts]] - `imports` [EXTRACTED]
- [[raw.ts]] - `imports` [EXTRACTED]
- [[windsurf.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[AdapterRejectedInput]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None