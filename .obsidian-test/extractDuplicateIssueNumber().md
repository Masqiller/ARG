---
source_file: "vendor/external_plugins/claude-code/scripts/auto-close-duplicates.ts"
type: "code"
community: "Community None"
degree: 2
location: "L49"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# extractDuplicateIssueNumber()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["extractDuplicateIssueNumber[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_claude_code_scripts_auto_close_duplicates_ts["auto-close-duplicates.ts"]
    center -->|"calls"| N_scripts_auto_close_duplicates_autocloseduplicates["autoCloseDuplicates[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[auto-close-duplicates.ts]] - `contains` [EXTRACTED]
- [[autoCloseDuplicates()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extractDuplicateIssueNumber()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None