---
source_file: "vendor/claude-mem/src/services/sqlite/Database.ts"
type: "code"
community: "Community None"
degree: 10
location: "L43"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# DatabaseManager

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["DatabaseManager"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_sqlite_database_ts["Database.ts"]
    center -->|"method"| N_sqlite_database_databasemanager_getinstance[".getInstance[]"]
    center -->|"method"| N_sqlite_database_databasemanager_registermigration[".registerMigration[]"]
    center -->|"method"| N_sqlite_database_databasemanager_initialize[".initialize[]"]
    center -->|"method"| N_sqlite_database_databasemanager_getconnection[".getConnection[]"]
    center -->|"method"| N_sqlite_database_databasemanager_withtransaction[".withTransaction[]"]
    center -->|"method"| N_sqlite_database_databasemanager_close[".close[]"]
    center -->|"method"| N_sqlite_database_databasemanager_initializeschemaversions[".initializeSchemaVersions[]"]
    center -->|"method"| N_sqlite_database_databasemanager_runmigrations[".runMigrations[]"]
    center -->|"method"| N_sqlite_database_databasemanager_getcurrentversion[".getCurrentVersion[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.close()_8]] - `method` [EXTRACTED]
- [[.getConnection()]] - `method` [EXTRACTED]
- [[.getCurrentVersion()]] - `method` [EXTRACTED]
- [[.getInstance()_1]] - `method` [EXTRACTED]
- [[.initialize()_2]] - `method` [EXTRACTED]
- [[.initializeSchemaVersions()]] - `method` [EXTRACTED]
- [[.registerMigration()]] - `method` [EXTRACTED]
- [[.runMigrations()]] - `method` [EXTRACTED]
- [[.withTransaction()]] - `method` [EXTRACTED]
- [[Database.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[DatabaseManager_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None