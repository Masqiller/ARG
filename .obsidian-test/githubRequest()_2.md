---
source_file: "vendor/external_plugins/claude-code/scripts/backfill-duplicate-comments.ts"
type: "code"
community: "Community None"
degree: 3
location: "L26"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# githubRequest()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["githubRequest[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_claude_code_scripts_backfill_duplicate_comments_ts["backfill-duplicate-comments.ts"]
    center -->|"calls"| N_scripts_backfill_duplicate_comments_triggerdedupeworkflow["triggerDedupeWorkflow[]"]
    center -->|"calls"| N_scripts_backfill_duplicate_comments_backfillduplicatecomments["backfillDuplicateComments[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[backfill-duplicate-comments.ts]] - `contains` [EXTRACTED]
- [[backfillDuplicateComments()]] - `calls` [EXTRACTED]
- [[triggerDedupeWorkflow()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[githubRequest()_2]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None