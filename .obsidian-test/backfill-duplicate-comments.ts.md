---
source_file: "vendor/external_plugins/claude-code/scripts/backfill-duplicate-comments.ts"
type: "code"
community: "Community None"
degree: 3
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# backfill-duplicate-comments.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["backfill-duplicate-comments.ts"]:::centerNode
    center -->|"contains"| N_scripts_backfill_duplicate_comments_githubrequest["githubRequest[]"]
    center -->|"contains"| N_scripts_backfill_duplicate_comments_triggerdedupeworkflow["triggerDedupeWorkflow[]"]
    center -->|"contains"| N_scripts_backfill_duplicate_comments_backfillduplicatecomments["backfillDuplicateComments[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[backfillDuplicateComments()]] - `contains` [EXTRACTED]
- [[githubRequest()_2]] - `contains` [EXTRACTED]
- [[triggerDedupeWorkflow()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[backfill-duplicate-comments.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None