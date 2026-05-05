---
source_file: "vendor/claude-mem/src/types/database.ts"
type: "code"
community: "Community None"
degree: 7
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# database.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["database.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_sessionstore_ts["SessionStore.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_sessionsearch_ts["SessionSearch.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_observations_get_ts["get.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_timeline_queries_ts["queries.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_summaries_get_ts["get.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_migrations_runner_ts["runner.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_prompts_get_ts["get.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[SessionSearch.ts]] - `imports_from` [EXTRACTED]
- [[SessionStore.ts]] - `imports_from` [EXTRACTED]
- [[get.ts]] - `imports_from` [EXTRACTED]
- [[get.ts_1]] - `imports_from` [EXTRACTED]
- [[get.ts_3]] - `imports_from` [EXTRACTED]
- [[queries.ts]] - `imports_from` [EXTRACTED]
- [[runner.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[database.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None