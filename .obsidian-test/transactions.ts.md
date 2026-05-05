---
source_file: "vendor/claude-mem/src/services/sqlite/transactions.ts"
type: "code"
community: "Community None"
degree: 10
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# transactions.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["transactions.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_sqlite_transactions_test_ts["transactions.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_sqlite_data_integrity_test_ts["data-integrity.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_observations_types_ts["types.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_summaries_types_ts["types.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_observations_store_ts["store.ts"]
    center -->|"imports"| N_observations_store_computeobservationcontenthash["computeObservationContentHash[]"]
    center -->|"contains"| N_sqlite_transactions_storeobservationsandmarkcomplete["storeObservationsAndMarkComplete[]"]
    center -->|"contains"| N_sqlite_transactions_storeobservations["storeObservations[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[computeObservationContentHash()]] - `imports` [EXTRACTED]
- [[data-integrity.test.ts]] - `imports_from` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[store.ts]] - `imports_from` [EXTRACTED]
- [[storeObservations()]] - `contains` [EXTRACTED]
- [[storeObservationsAndMarkComplete()]] - `contains` [EXTRACTED]
- [[transactions.test.ts]] - `imports_from` [EXTRACTED]
- [[types.ts_7]] - `imports_from` [EXTRACTED]
- [[types.ts_8]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[transactions.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None