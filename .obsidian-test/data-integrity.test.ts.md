---
source_file: "vendor/claude-mem/tests/sqlite/data-integrity.test.ts"
type: "code"
community: "Community None"
degree: 13
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# data-integrity.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 13

## Architecture Graph
```mermaid
graph LR
    center["data-integrity.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_database_ts["Database.ts"]
    center -->|"imports"| N_sqlite_database_claudememdatabase["ClaudeMemDatabase"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_observations_store_ts["store.ts"]
    center -->|"imports"| N_observations_store_storeobservation["storeObservation[]"]
    center -->|"imports"| N_observations_store_computeobservationcontenthash["computeObservationContentHash[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_sessions_ts["Sessions.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_transactions_ts["transactions.ts"]
    center -->|"imports"| N_sqlite_transactions_storeobservations["storeObservations[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_pendingmessagestore_ts["PendingMessageStore.ts"]
    center -->|"imports"| N_sqlite_pendingmessagestore_pendingmessagestore["PendingMessageStore"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_observations_types_ts["types.ts"]
    center -->|"contains"| N_sqlite_data_integrity_test_createobservationinput["createObservationInput[]"]
    center -->|"contains"| N_sqlite_data_integrity_test_createsessionwithmemoryid["createSessionWithMemoryId[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ClaudeMemDatabase]] - `imports` [EXTRACTED]
- [[Database.ts]] - `imports_from` [EXTRACTED]
- [[PendingMessageStore]] - `imports` [EXTRACTED]
- [[PendingMessageStore.ts]] - `imports_from` [EXTRACTED]
- [[Sessions.ts]] - `imports_from` [EXTRACTED]
- [[computeObservationContentHash()]] - `imports` [EXTRACTED]
- [[createObservationInput()_1]] - `contains` [EXTRACTED]
- [[createSessionWithMemoryId()_1]] - `contains` [EXTRACTED]
- [[store.ts]] - `imports_from` [EXTRACTED]
- [[storeObservation()]] - `imports` [EXTRACTED]
- [[storeObservations()]] - `imports` [EXTRACTED]
- [[transactions.ts]] - `imports_from` [EXTRACTED]
- [[types.ts_7]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[data-integrity.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None