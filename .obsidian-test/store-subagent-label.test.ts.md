---
source_file: "vendor/claude-mem/tests/services/sqlite/observations/store-subagent-label.test.ts"
type: "code"
community: "Community None"
degree: 7
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# store-subagent-label.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["store-subagent-label.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_database_ts["Database.ts"]
    center -->|"imports"| N_sqlite_database_claudememdatabase["ClaudeMemDatabase"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_observations_ts["Observations.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_sessions_ts["Sessions.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_observations_types_ts["types.ts"]
    center -->|"contains"| N_observations_store_subagent_label_test_createobservationinput["createObservationInput[]"]
    center -->|"contains"| N_observations_store_subagent_label_test_createsessionwithmemoryid["createSessionWithMemoryId[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ClaudeMemDatabase]] - `imports` [EXTRACTED]
- [[Database.ts]] - `imports_from` [EXTRACTED]
- [[Observations.ts]] - `imports_from` [EXTRACTED]
- [[Sessions.ts]] - `imports_from` [EXTRACTED]
- [[createObservationInput()_3]] - `contains` [EXTRACTED]
- [[createSessionWithMemoryId()_4]] - `contains` [EXTRACTED]
- [[types.ts_7]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[store-subagent-label.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None