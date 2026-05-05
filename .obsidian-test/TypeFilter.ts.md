---
source_file: "vendor/claude-mem/src/services/worker/search/filters/TypeFilter.ts"
type: "code"
community: "Community None"
degree: 6
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# TypeFilter.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["TypeFilter.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"contains"| N_filters_typefilter_normalizetype["normalizeType[]"]
    center -->|"contains"| N_filters_typefilter_matchestype["matchesType[]"]
    center -->|"contains"| N_filters_typefilter_filterobservationsbytype["filterObservationsByType[]"]
    center -->|"contains"| N_filters_typefilter_parsetypestring["parseTypeString[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[filterObservationsByType()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[matchesType()]] - `contains` [EXTRACTED]
- [[normalizeType()]] - `contains` [EXTRACTED]
- [[parseTypeString()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[TypeFilter.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None