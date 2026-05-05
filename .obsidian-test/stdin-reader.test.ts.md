---
source_file: "vendor/claude-mem/tests/cli/stdin-reader.test.ts"
type: "code"
community: "Community None"
degree: 3
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# stdin-reader.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["stdin-reader.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_stdin_reader_ts["stdin-reader.ts"]
    center -->|"imports"| N_cli_stdin_reader_readjsonfromstdin["readJsonFromStdin[]"]
    center -->|"contains"| N_cli_stdin_reader_test_installfakestdin["installFakeStdin[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[installFakeStdin()]] - `contains` [EXTRACTED]
- [[readJsonFromStdin()]] - `imports` [EXTRACTED]
- [[stdin-reader.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[stdin-reader.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None