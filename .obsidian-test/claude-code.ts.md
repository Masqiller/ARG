---
source_file: "vendor/claude-mem/src/cli/adapters/claude-code.ts"
type: "code"
community: "Community None"
degree: 8
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# claude-code.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["claude-code.ts"]:::centerNode
    center -->|"imports_from"| N_tests_hook_lifecycle_test_fmt["fmt[]"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_cli_adapters_claude_code_subagent_test_ts["claude-code-subagent.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_types_ts["types.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_adapters_errors_ts["errors.ts"]
    center -->|"imports"| N_adapters_errors_adapterrejectedinput["AdapterRejectedInput"]
    center -->|"imports"| N_adapters_errors_isvalidcwd["isValidCwd[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_adapters_index_ts["index.ts"]
    center -->|"contains"| N_adapters_claude_code_pickagentfield["pickAgentField[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[AdapterRejectedInput]] - `imports` [EXTRACTED]
- [[claude-code-subagent.test.ts]] - `imports_from` [EXTRACTED]
- [[errors.ts]] - `imports_from` [EXTRACTED]
- [[fmt()]] - `imports_from` [EXTRACTED]
- [[index.ts_1]] - `imports_from` [EXTRACTED]
- [[isValidCwd()]] - `imports` [EXTRACTED]
- [[pickAgentField()]] - `contains` [EXTRACTED]
- [[types.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[claude-code.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None