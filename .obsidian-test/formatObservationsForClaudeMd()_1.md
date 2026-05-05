---
source_file: "vendor/claude-mem/scripts/regenerate-claude-md.ts"
type: "code"
community: "Community None"
degree: 6
location: "L193"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# formatObservationsForClaudeMd()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["formatObservationsForClaudeMd[]"]:::centerNode
    center -->|"calls"| N_shared_timeline_formatting_groupbydate["groupByDate[]"]
    center -->|"contains"| N_vendor_claude_mem_scripts_regenerate_claude_md_ts["regenerate-claude-md.ts"]
    center -->|"calls"| N_scripts_regenerate_claude_md_gettypeicon["getTypeIcon[]"]
    center -->|"calls"| N_scripts_regenerate_claude_md_estimatetokens["estimateTokens[]"]
    center -->|"calls"| N_scripts_regenerate_claude_md_extractrelevantfile["extractRelevantFile[]"]
    center -->|"calls"| N_scripts_regenerate_claude_md_regeneratefolder["regenerateFolder[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[estimateTokens()_2]] - `calls` [EXTRACTED]
- [[extractRelevantFile()_1]] - `calls` [EXTRACTED]
- [[getTypeIcon()_1]] - `calls` [EXTRACTED]
- [[groupByDate()]] - `calls` [INFERRED]
- [[regenerate-claude-md.ts]] - `contains` [EXTRACTED]
- [[regenerateFolder()_1]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[formatObservationsForClaudeMd()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None