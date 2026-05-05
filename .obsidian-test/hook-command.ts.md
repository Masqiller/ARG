---
source_file: "vendor/claude-mem/src/cli/hook-command.ts"
type: "code"
community: "Community None"
degree: 16
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# hook-command.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 16

## Architecture Graph
```mermaid
graph LR
    center["hook-command.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_hook_command_test_ts["hook-command.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_stdin_reader_ts["stdin-reader.ts"]
    center -->|"imports"| N_cli_stdin_reader_readjsonfromstdin["readJsonFromStdin[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_adapters_index_ts["index.ts"]
    center -->|"imports"| N_adapters_index_getplatformadapter["getPlatformAdapter[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_adapters_errors_ts["errors.ts"]
    center -->|"imports"| N_adapters_errors_adapterrejectedinput["AdapterRejectedInput"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_index_ts["index.ts"]
    center -->|"imports"| N_handlers_index_geteventhandler["getEventHandler[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_hook_constants_ts["hook-constants.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"contains"| N_cli_hook_command_isworkerunavailableerror["isWorkerUnavailableError[]"]
    center -->|"contains"| N_cli_hook_command_executehookpipeline["executeHookPipeline[]"]
    center -->|"contains"| N_cli_hook_command_hookcommand["hookCommand[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[AdapterRejectedInput]] - `imports` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[errors.ts]] - `imports_from` [EXTRACTED]
- [[executeHookPipeline()]] - `contains` [EXTRACTED]
- [[getEventHandler()]] - `imports` [EXTRACTED]
- [[getPlatformAdapter()]] - `imports` [EXTRACTED]
- [[hook-command.test.ts]] - `imports_from` [EXTRACTED]
- [[hook-constants.ts]] - `imports_from` [EXTRACTED]
- [[hookCommand()]] - `contains` [EXTRACTED]
- [[index.ts_1]] - `imports_from` [EXTRACTED]
- [[index.ts_2]] - `imports_from` [EXTRACTED]
- [[isWorkerUnavailableError()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[main()_22]] - `imports_from` [EXTRACTED]
- [[readJsonFromStdin()]] - `imports` [EXTRACTED]
- [[stdin-reader.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[hook-command.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None