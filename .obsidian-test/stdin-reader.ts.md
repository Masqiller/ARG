---
source_file: "vendor/claude-mem/src/cli/stdin-reader.ts"
type: "code"
community: "Community None"
degree: 7
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# stdin-reader.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["stdin-reader.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_cli_stdin_reader_test_ts["stdin-reader.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"contains"| N_cli_stdin_reader_isstdinavailable["isStdinAvailable[]"]
    center -->|"contains"| N_cli_stdin_reader_tryparsejson["tryParseJson[]"]
    center -->|"contains"| N_cli_stdin_reader_readjsonfromstdin["readJsonFromStdin[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_hook_command_ts["hook-command.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[hook-command.ts]] - `imports_from` [EXTRACTED]
- [[isStdinAvailable()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[readJsonFromStdin()]] - `contains` [EXTRACTED]
- [[stdin-reader.test.ts]] - `imports_from` [EXTRACTED]
- [[tryParseJson()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[stdin-reader.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None