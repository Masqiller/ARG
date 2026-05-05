---
source_file: "vendor/claude-mem/tests/services/sqlite/migration-runner.test.ts"
type: "code"
community: "Community None"
degree: 6
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# migration-runner.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["migration-runner.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_migrations_runner_ts["runner.ts"]
    center -->|"imports"| N_migrations_runner_migrationrunner["MigrationRunner"]
    center -->|"contains"| N_sqlite_migration_runner_test_gettablenames["getTableNames[]"]
    center -->|"contains"| N_sqlite_migration_runner_test_getcolumns["getColumns[]"]
    center -->|"contains"| N_sqlite_migration_runner_test_getschemaversions["getSchemaVersions[]"]
    center -->|"contains"| N_sqlite_migration_runner_test_getindexnames["getIndexNames[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[MigrationRunner]] - `imports` [EXTRACTED]
- [[getColumns()]] - `contains` [EXTRACTED]
- [[getIndexNames()]] - `contains` [EXTRACTED]
- [[getSchemaVersions()]] - `contains` [EXTRACTED]
- [[getTableNames()]] - `contains` [EXTRACTED]
- [[runner.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[migration-runner.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None