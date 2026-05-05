---
source_file: "vendor/claude-mem/tests/hooks/file-context.test.ts"
type: "code"
community: "Community None"
degree: 4
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# file-context.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["file-context.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_file_context_ts["file-context.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"contains"| N_hooks_file_context_test_makeobservationsresponse["makeObservationsResponse[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[file-context.ts]] - `imports_from` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[makeObservationsResponse()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[file-context.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None