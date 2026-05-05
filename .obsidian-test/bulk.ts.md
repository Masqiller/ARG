---
source_file: "vendor/claude-mem/src/services/sqlite/import/bulk.ts"
type: "code"
community: "Community None"
degree: 6
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# bulk.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["bulk.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"contains"| N_import_bulk_importsdksession["importSdkSession[]"]
    center -->|"contains"| N_import_bulk_importsessionsummary["importSessionSummary[]"]
    center -->|"contains"| N_import_bulk_importobservation["importObservation[]"]
    center -->|"contains"| N_import_bulk_importuserprompt["importUserPrompt[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[importObservation()]] - `contains` [EXTRACTED]
- [[importSdkSession()]] - `contains` [EXTRACTED]
- [[importSessionSummary()]] - `contains` [EXTRACTED]
- [[importUserPrompt()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[bulk.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None