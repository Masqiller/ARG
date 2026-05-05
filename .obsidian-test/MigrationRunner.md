---
source_file: "vendor/claude-mem/src/services/sqlite/migrations/runner.ts"
type: "code"
community: "Community None"
degree: 31
location: "L11"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# MigrationRunner

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 31

## Architecture Graph
```mermaid
graph LR
    center["MigrationRunner"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_services_sqlite_migration_runner_test_ts["migration-runner.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_tests_services_sqlite_schema_repair_test_ts["schema-repair.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_sqlite_database_ts["Database.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_sqlite_migrations_runner_ts["runner.ts"]
    center -->|"method"| N_migrations_runner_migrationrunner_constructor[".constructor[]"]
    center -->|"method"| N_migrations_runner_migrationrunner_runallmigrations[".runAllMigrations[]"]
    center -->|"method"| N_migrations_runner_migrationrunner_initializeschema[".initializeSchema[]"]
    center -->|"method"| N_migrations_runner_migrationrunner_ensureworkerportcolumn[".ensureWorkerPortColumn[]"]
    center -->|"method"| N_migrations_runner_migrationrunner_ensureprompttrackingcolumns[".ensurePromptTrackingColumns[]"]
    center -->|"method"| N_migrations_runner_migrationrunner_removesessionsummariesuniqueconstraint[".removeSessionSummariesUniqueConstraint[]"]
    center -->|"method"| N_migrations_runner_migrationrunner_addobservationhierarchicalfields[".addObservationHierarchicalFields[]"]
    center -->|"method"| N_migrations_runner_migrationrunner_makeobservationstextnullable[".makeObservationsTextNullable[]"]
    center -->|"method"| N_migrations_runner_migrationrunner_createuserpromptstable[".createUserPromptsTable[]"]
    center -->|"method"| N_migrations_runner_migrationrunner_createuserpromptsfts[".createUserPromptsFTS[]"]
    center -->|"method"| N_migrations_runner_migrationrunner_ensurediscoverytokenscolumn[".ensureDiscoveryTokensColumn[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.addFailedAtEpochColumn()_1]] - `method` [EXTRACTED]
- [[.addObservationContentHashColumn()_1]] - `method` [EXTRACTED]
- [[.addObservationHierarchicalFields()_1]] - `method` [EXTRACTED]
- [[.addObservationSubagentColumns()_1]] - `method` [EXTRACTED]
- [[.addObservationsMetadataColumn()_1]] - `method` [EXTRACTED]
- [[.addObservationsUniqueContentHashIndex()_1]] - `method` [EXTRACTED]
- [[.addOnUpdateCascadeToForeignKeys()_1]] - `method` [EXTRACTED]
- [[.addSessionCustomTitleColumn()_1]] - `method` [EXTRACTED]
- [[.addSessionPlatformSourceColumn()_1]] - `method` [EXTRACTED]
- [[.constructor()_39]] - `method` [EXTRACTED]
- [[.createObservationFeedbackTable()]] - `method` [EXTRACTED]
- [[.createPendingMessagesTable()_1]] - `method` [EXTRACTED]
- [[.createUserPromptsFTS()]] - `method` [EXTRACTED]
- [[.createUserPromptsTable()_1]] - `method` [EXTRACTED]
- [[.dropDeadPendingMessagesColumns()_1]] - `method` [EXTRACTED]
- [[.ensureDiscoveryTokensColumn()_1]] - `method` [EXTRACTED]
- [[.ensureMergedIntoProjectColumns()_1]] - `method` [EXTRACTED]
- [[.ensurePromptTrackingColumns()_1]] - `method` [EXTRACTED]
- [[.ensureWorkerPortColumn()_1]] - `method` [EXTRACTED]
- [[.initializeSchema()_1]] - `method` [EXTRACTED]
- [[.makeObservationsTextNullable()_1]] - `method` [EXTRACTED]
- [[.rebuildPendingMessagesForSelfHealingClaim()]] - `method` [EXTRACTED]
- [[.recreateObservationsWithUpdateCascade()]] - `method` [EXTRACTED]
- [[.recreateSessionSummariesWithUpdateCascade()]] - `method` [EXTRACTED]
- [[.removeSessionSummariesUniqueConstraint()_1]] - `method` [EXTRACTED]
- [[.renameSessionIdColumns()_1]] - `method` [EXTRACTED]
- [[.runAllMigrations()]] - `method` [EXTRACTED]
- [[Database.ts]] - `imports` [EXTRACTED]
- [[migration-runner.test.ts]] - `imports` [EXTRACTED]
- [[runner.ts]] - `contains` [EXTRACTED]
- [[schema-repair.test.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[MigrationRunner]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None