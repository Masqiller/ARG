---
source_file: "vendor/claude-mem/src/cli/adapters/windsurf.ts"
type: "code"
community: "Community None"
degree: 5
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# windsurf.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["windsurf.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_types_ts["types.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_adapters_errors_ts["errors.ts"]
    center -->|"imports"| N_adapters_errors_adapterrejectedinput["AdapterRejectedInput"]
    center -->|"imports"| N_adapters_errors_isvalidcwd["isValidCwd[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_adapters_index_ts["index.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[AdapterRejectedInput]] - `imports` [EXTRACTED]
- [[errors.ts]] - `imports_from` [EXTRACTED]
- [[index.ts_1]] - `imports_from` [EXTRACTED]
- [[isValidCwd()]] - `imports` [EXTRACTED]
- [[types.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[windsurf.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None