---
source_file: "vendor/claude-mem/src/services/sqlite/Observations.ts"
type: "code"
community: "Community None"
degree: 5
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Observations.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["Observations.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_sqlite_transactions_test_ts["transactions.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_sqlite_observations_test_ts["observations.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_services_sqlite_observations_store_subagent_label_test_ts["store-subagent-label.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[observations.test.ts]] - `imports_from` [EXTRACTED]
- [[store-subagent-label.test.ts]] - `imports_from` [EXTRACTED]
- [[transactions.test.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Observations.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None