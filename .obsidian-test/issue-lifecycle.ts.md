---
source_file: "vendor/external_plugins/claude-code/scripts/issue-lifecycle.ts"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# issue-lifecycle.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["issue-lifecycle.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_external_plugins_claude_code_scripts_sweep_ts["sweep.ts"]
    center -->|"imports_from"| N_vendor_external_plugins_claude_code_scripts_lifecycle_comment_ts["lifecycle-comment.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[lifecycle-comment.ts]] - `imports_from` [EXTRACTED]
- [[sweep.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[issue-lifecycle.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None