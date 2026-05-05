---
source_file: "vendor/claude-mem/tests/services/sqlite/schema-repair.test.ts"
type: "code"
community: "Community None"
degree: 8
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# schema-repair.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["schema-repair.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_database_ts["Database.ts"]
    center -->|"imports"| N_sqlite_database_claudememdatabase["ClaudeMemDatabase"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_migrations_runner_ts["runner.ts"]
    center -->|"imports"| N_migrations_runner_migrationrunner["MigrationRunner"]
    center -->|"contains"| N_sqlite_schema_repair_test_tempdbpath["tempDbPath[]"]
    center -->|"contains"| N_sqlite_schema_repair_test_cleanup["cleanup[]"]
    center -->|"contains"| N_sqlite_schema_repair_test_haspython["hasPython[]"]
    center -->|"contains"| N_sqlite_schema_repair_test_corruptdbviapython["corruptDbViaPython[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ClaudeMemDatabase]] - `imports` [EXTRACTED]
- [[Database.ts]] - `imports_from` [EXTRACTED]
- [[MigrationRunner]] - `imports` [EXTRACTED]
- [[cleanup()_1]] - `contains` [EXTRACTED]
- [[corruptDbViaPython()]] - `contains` [EXTRACTED]
- [[hasPython()]] - `contains` [EXTRACTED]
- [[runner.ts]] - `imports_from` [EXTRACTED]
- [[tempDbPath()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[schema-repair.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None