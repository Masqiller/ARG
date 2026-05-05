---
source_file: "vendor/external_plugins/claude-code/scripts/auto-close-duplicates.ts"
type: "code"
community: "Community None"
degree: 4
location: "L99"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# autoCloseDuplicates()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["autoCloseDuplicates[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_claude_code_scripts_auto_close_duplicates_ts["auto-close-duplicates.ts"]
    center -->|"calls"| N_scripts_auto_close_duplicates_githubrequest["githubRequest[]"]
    center -->|"calls"| N_scripts_auto_close_duplicates_extractduplicateissuenumber["extractDuplicateIssueNumber[]"]
    center -->|"calls"| N_scripts_auto_close_duplicates_closeissueasduplicate["closeIssueAsDuplicate[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[auto-close-duplicates.ts]] - `contains` [EXTRACTED]
- [[closeIssueAsDuplicate()]] - `calls` [EXTRACTED]
- [[extractDuplicateIssueNumber()]] - `calls` [EXTRACTED]
- [[githubRequest()_1]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[autoCloseDuplicates()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None