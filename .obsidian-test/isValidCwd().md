---
source_file: "vendor/claude-mem/src/cli/adapters/errors.ts"
type: "code"
community: "Community None"
degree: 6
location: "L9"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# isValidCwd()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["isValidCwd[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_cli_adapters_gemini_cli_ts["gemini-cli.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_adapters_cursor_ts["cursor.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_cli_adapters_errors_ts["errors.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_adapters_windsurf_ts["windsurf.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_adapters_raw_ts["raw.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_adapters_claude_code_ts["claude-code.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[claude-code.ts]] - `imports` [EXTRACTED]
- [[cursor.ts]] - `imports` [EXTRACTED]
- [[errors.ts]] - `contains` [EXTRACTED]
- [[gemini-cli.ts]] - `imports` [EXTRACTED]
- [[raw.ts]] - `imports` [EXTRACTED]
- [[windsurf.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[isValidCwd()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None