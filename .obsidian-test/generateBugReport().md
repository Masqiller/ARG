---
source_file: "vendor/claude-mem/scripts/bug-report/index.ts"
type: "code"
community: "Community None"
degree: 8
location: "L26"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# generateBugReport()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["generateBugReport[]"]:::centerNode
    center -->|"calls"| N_knowledge_knowledgeagent_knowledgeagent_query[".query[]"]
    center -->|"calls"| N_bug_report_collector_collectdiagnostics["collectDiagnostics[]"]
    center -->|"calls"| N_bug_report_collector_formatdiagnostics["formatDiagnostics[]"]
    center -->|"imports"| N_vendor_claude_mem_scripts_bug_report_cli_ts["cli.ts"]
    center -->|"calls"| N_bug_report_cli_main["main[]"]
    center -->|"contains"| N_vendor_claude_mem_scripts_bug_report_index_ts["index.ts"]
    center -->|"calls"| N_bug_report_index_buildprompt["buildPrompt[]"]
    center -->|"calls"| N_bug_report_index_generatetemplatefallback["generateTemplateFallback[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.query()]] - `calls` [INFERRED]
- [[buildPrompt()]] - `calls` [EXTRACTED]
- [[cli.ts_1]] - `imports` [EXTRACTED]
- [[collectDiagnostics()]] - `calls` [INFERRED]
- [[formatDiagnostics()]] - `calls` [INFERRED]
- [[generateTemplateFallback()]] - `calls` [EXTRACTED]
- [[index.ts_13]] - `contains` [EXTRACTED]
- [[main()_42]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[generateBugReport()]]
```

#graphify/code #graphify/INFERRED #community/Community_None