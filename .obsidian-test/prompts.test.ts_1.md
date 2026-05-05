---
source_file: "vendor/claude-mem/tests/sqlite/prompts.test.ts"
type: "code"
community: "Community None"
degree: 5
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# prompts.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["prompts.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_database_ts["Database.ts"]
    center -->|"imports"| N_sqlite_database_claudememdatabase["ClaudeMemDatabase"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_prompts_ts["Prompts.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_sessions_ts["Sessions.ts"]
    center -->|"contains"| N_sqlite_prompts_test_createsession["createSession[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ClaudeMemDatabase]] - `imports` [EXTRACTED]
- [[Database.ts]] - `imports_from` [EXTRACTED]
- [[Prompts.ts]] - `imports_from` [EXTRACTED]
- [[Sessions.ts]] - `imports_from` [EXTRACTED]
- [[createSession()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[prompts.test.ts_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None