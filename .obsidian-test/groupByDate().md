---
source_file: "vendor/claude-mem/src/shared/timeline-formatting.ts"
type: "code"
community: "Community None"
degree: 14
location: "L79"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# groupByDate()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 14

## Architecture Graph
```mermaid
graph LR
    center["groupByDate[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_shared_timeline_formatting_test_ts["timeline-formatting.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_claude_md_commands_ts["claude-md-commands.ts"]
    center -->|"calls"| N_cli_claude_md_commands_formatobservationsforclaudemd["formatObservationsForClaudeMd[]"]
    center -->|"contains"| N_vendor_claude_mem_src_shared_timeline_formatting_ts["timeline-formatting.ts"]
    center -->|"calls"| N_shared_timeline_formatting_formatdate["formatDate[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_searchmanager_ts["SearchManager.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_search_resultformatter_ts["ResultFormatter.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_searchroutes_ts["SearchRoutes.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_utils_claude_md_utils_ts["claude-md-utils.ts"]
    center -->|"imports"| N_vendor_claude_mem_scripts_regenerate_claude_md_ts["regenerate-claude-md.ts"]
    center -->|"calls"| N_worker_searchmanager_searchmanager_search[".search[]"]
    center -->|"calls"| N_search_resultformatter_resultformatter_formatsearchresults[".formatSearchResults[]"]
    center -->|"calls"| N_utils_claude_md_utils_formattimelineforclaudemd["formatTimelineForClaudeMd[]"]
    center -->|"calls"| N_scripts_regenerate_claude_md_formatobservationsforclaudemd["formatObservationsForClaudeMd[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.formatSearchResults()]] - `calls` [INFERRED]
- [[.search()]] - `calls` [INFERRED]
- [[ResultFormatter.ts]] - `imports` [EXTRACTED]
- [[SearchManager.ts]] - `imports` [EXTRACTED]
- [[SearchRoutes.ts]] - `imports` [EXTRACTED]
- [[claude-md-commands.ts]] - `imports` [EXTRACTED]
- [[claude-md-utils.ts]] - `imports` [EXTRACTED]
- [[formatDate()_1]] - `calls` [EXTRACTED]
- [[formatObservationsForClaudeMd()]] - `calls` [INFERRED]
- [[formatObservationsForClaudeMd()_1]] - `calls` [INFERRED]
- [[formatTimelineForClaudeMd()]] - `calls` [INFERRED]
- [[regenerate-claude-md.ts]] - `imports` [EXTRACTED]
- [[timeline-formatting.test.ts]] - `imports` [EXTRACTED]
- [[timeline-formatting.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[groupByDate()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None