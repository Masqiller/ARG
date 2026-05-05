---
source_file: "vendor/claude-mem/src/cli/adapters/cursor.ts"
type: "code"
community: "Community None"
degree: 7
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# cursor.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["cursor.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_transcripts_cursor_extraction_test_ts["cursor-extraction.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_types_ts["types.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_adapters_errors_ts["errors.ts"]
    center -->|"imports"| N_adapters_errors_adapterrejectedinput["AdapterRejectedInput"]
    center -->|"imports"| N_adapters_errors_isvalidcwd["isValidCwd[]"]
    center -->|"contains"| N_adapters_cursor_derivecursortranscriptpath["deriveCursorTranscriptPath[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_adapters_index_ts["index.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[AdapterRejectedInput]] - `imports` [EXTRACTED]
- [[cursor-extraction.test.ts]] - `imports_from` [EXTRACTED]
- [[deriveCursorTranscriptPath()]] - `contains` [EXTRACTED]
- [[errors.ts]] - `imports_from` [EXTRACTED]
- [[index.ts_1]] - `imports_from` [EXTRACTED]
- [[isValidCwd()]] - `imports` [EXTRACTED]
- [[types.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[cursor.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None