---
source_file: "vendor/claude-mem/src/services/sqlite/observations/store.ts"
type: "code"
community: "Community None"
degree: 6
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# computeObservationContentHash()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["computeObservationContentHash[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_sqlite_data_integrity_test_ts["data-integrity.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_sqlite_sessionstore_ts["SessionStore.ts"]
    center -->|"calls"| N_sqlite_sessionstore_sessionstore_storeobservation[".storeObservation[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_sqlite_transactions_ts["transactions.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_sqlite_observations_store_ts["store.ts"]
    center -->|"calls"| N_observations_store_storeobservation["storeObservation[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.storeObservation()]] - `calls` [INFERRED]
- [[SessionStore.ts]] - `imports` [EXTRACTED]
- [[data-integrity.test.ts]] - `imports` [EXTRACTED]
- [[store.ts]] - `contains` [EXTRACTED]
- [[storeObservation()]] - `calls` [EXTRACTED]
- [[transactions.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[computeObservationContentHash()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None