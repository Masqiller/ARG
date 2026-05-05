---
source_file: "vendor/claude-mem/src/cli/stdin-reader.ts"
type: "code"
community: "Community None"
degree: 5
location: "L40"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# readJsonFromStdin()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["readJsonFromStdin[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_cli_stdin_reader_test_ts["stdin-reader.test.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_cli_stdin_reader_ts["stdin-reader.ts"]
    center -->|"calls"| N_cli_stdin_reader_isstdinavailable["isStdinAvailable[]"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_hook_command_ts["hook-command.ts"]
    center -->|"calls"| N_cli_hook_command_executehookpipeline["executeHookPipeline[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[executeHookPipeline()]] - `calls` [INFERRED]
- [[hook-command.ts]] - `imports` [EXTRACTED]
- [[isStdinAvailable()]] - `calls` [EXTRACTED]
- [[stdin-reader.test.ts]] - `imports` [EXTRACTED]
- [[stdin-reader.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[readJsonFromStdin()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None