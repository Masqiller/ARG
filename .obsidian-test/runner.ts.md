---
source_file: "vendor/claude-mem/src/services/sqlite/migrations/runner.ts"
type: "code"
community: "Community None"
degree: 8
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# runner.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["runner.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_services_sqlite_migration_runner_test_ts["migration-runner.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_services_sqlite_schema_repair_test_ts["schema-repair.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_platform_source_ts["platform-source.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_types_database_ts["database.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_database_ts["Database.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"contains"| N_migrations_runner_migrationrunner["MigrationRunner"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Database.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[MigrationRunner]] - `contains` [EXTRACTED]
- [[database.ts]] - `imports_from` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[migration-runner.test.ts]] - `imports_from` [EXTRACTED]
- [[platform-source.ts]] - `imports_from` [EXTRACTED]
- [[schema-repair.test.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[runner.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None