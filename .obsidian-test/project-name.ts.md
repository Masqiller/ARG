---
source_file: "vendor/claude-mem/src/utils/project-name.ts"
type: "code"
community: "Community None"
degree: 19
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# project-name.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 19

## Architecture Graph
```mermaid
graph LR
    center["project-name.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_utils_project_name_test_ts["project-name.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_utils_project_name_isolation_test_ts["project-name-isolation.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_file_context_ts["file-context.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_context_ts["context.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_session_init_ts["session-init.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_searchmanager_ts["SearchManager.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_shared_ts["shared.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_routes_sessionroutes_ts["SessionRoutes.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_transcripts_processor_ts["processor.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_observations_store_ts["store.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_infrastructure_worktreeadoption_ts["WorktreeAdoption.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_context_contextbuilder_ts["ContextBuilder.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_worktree_ts["worktree.ts"]
    center -->|"imports"| N_utils_worktree_detectworktree["detectWorktree[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ContextBuilder.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[SearchManager.ts]] - `imports_from` [EXTRACTED]
- [[SessionRoutes.ts]] - `imports_from` [EXTRACTED]
- [[WorktreeAdoption.ts]] - `imports_from` [EXTRACTED]
- [[context.ts]] - `imports_from` [EXTRACTED]
- [[detectWorktree()]] - `imports` [EXTRACTED]
- [[expandTilde()]] - `contains` [EXTRACTED]
- [[file-context.ts]] - `imports_from` [EXTRACTED]
- [[getProjectContext()]] - `contains` [EXTRACTED]
- [[getProjectName()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[processor.ts]] - `imports_from` [EXTRACTED]
- [[project-name-isolation.test.ts]] - `imports_from` [EXTRACTED]
- [[project-name.test.ts]] - `imports_from` [EXTRACTED]
- [[session-init.ts]] - `imports_from` [EXTRACTED]
- [[shared.ts]] - `imports_from` [EXTRACTED]
- [[store.ts]] - `imports_from` [EXTRACTED]
- [[worktree.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[project-name.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None