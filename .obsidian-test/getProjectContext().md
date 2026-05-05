---
source_file: "vendor/claude-mem/src/utils/project-name.ts"
type: "code"
community: "Community None"
degree: 24
location: "L48"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getProjectContext()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 24

## Architecture Graph
```mermaid
graph LR
    center["getProjectContext[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_utils_project_name_test_ts["project-name.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_handlers_file_context_ts["file-context.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_handlers_context_ts["context.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_handlers_session_init_ts["session-init.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_searchmanager_ts["SearchManager.ts"]
    center -->|"calls"| N_worker_searchmanager_searchmanager_getrecentcontext[".getRecentContext[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_shared_ts["shared.ts"]
    center -->|"calls"| N_http_shared_ingestobservation["ingestObservation[]"]
    center -->|"calls"| N_http_shared_ingestprompt["ingestPrompt[]"]
    center -->|"calls"| N_http_shared_ingestsummary["ingestSummary[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_sessionroutes_ts["SessionRoutes.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_transcripts_processor_ts["processor.ts"]
    center -->|"calls"| N_transcripts_processor_transcripteventprocessor_resolveproject[".resolveProject[]"]
    center -->|"calls"| N_transcripts_processor_transcripteventprocessor_updatecontext[".updateContext[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_sqlite_observations_store_ts["store.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.getRecentContext()]] - `calls` [INFERRED]
- [[.resolveProject()]] - `calls` [INFERRED]
- [[.updateContext()]] - `calls` [INFERRED]
- [[ContextBuilder.ts]] - `imports` [EXTRACTED]
- [[SearchManager.ts]] - `imports` [EXTRACTED]
- [[SessionRoutes.ts]] - `imports` [EXTRACTED]
- [[WorktreeAdoption.ts]] - `imports` [EXTRACTED]
- [[adoptMergedWorktrees()]] - `calls` [INFERRED]
- [[context.ts]] - `imports` [EXTRACTED]
- [[detectWorktree()]] - `calls` [INFERRED]
- [[expandTilde()]] - `calls` [EXTRACTED]
- [[file-context.ts]] - `imports` [EXTRACTED]
- [[generateContext()]] - `calls` [INFERRED]
- [[getProjectName()]] - `calls` [EXTRACTED]
- [[ingestObservation()]] - `calls` [INFERRED]
- [[ingestPrompt()]] - `calls` [INFERRED]
- [[ingestSummary()]] - `calls` [INFERRED]
- [[processor.ts]] - `imports` [EXTRACTED]
- [[project-name.test.ts]] - `imports` [EXTRACTED]
- [[project-name.ts]] - `contains` [EXTRACTED]
- [[session-init.ts]] - `imports` [EXTRACTED]
- [[shared.ts]] - `imports` [EXTRACTED]
- [[store.ts]] - `imports` [EXTRACTED]
- [[storeObservation()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getProjectContext()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None