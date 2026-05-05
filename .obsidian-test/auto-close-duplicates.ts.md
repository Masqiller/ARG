---
source_file: "vendor/external_plugins/claude-code/scripts/auto-close-duplicates.ts"
type: "code"
community: "Community None"
degree: 4
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# auto-close-duplicates.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["auto-close-duplicates.ts"]:::centerNode
    center -->|"contains"| N_scripts_auto_close_duplicates_githubrequest["githubRequest[]"]
    center -->|"contains"| N_scripts_auto_close_duplicates_extractduplicateissuenumber["extractDuplicateIssueNumber[]"]
    center -->|"contains"| N_scripts_auto_close_duplicates_closeissueasduplicate["closeIssueAsDuplicate[]"]
    center -->|"contains"| N_scripts_auto_close_duplicates_autocloseduplicates["autoCloseDuplicates[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[autoCloseDuplicates()]] - `contains` [EXTRACTED]
- [[closeIssueAsDuplicate()]] - `contains` [EXTRACTED]
- [[extractDuplicateIssueNumber()]] - `contains` [EXTRACTED]
- [[githubRequest()_1]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[auto-close-duplicates.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None