---
source_file: "vendor/external_plugins/claude-code/scripts/sweep.ts"
type: "code"
community: "Community None"
degree: 5
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# sweep.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["sweep.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_external_plugins_claude_code_scripts_issue_lifecycle_ts["issue-lifecycle.ts"]
    center -->|"contains"| N_scripts_sweep_close_message["CLOSE_MESSAGE[]"]
    center -->|"contains"| N_scripts_sweep_githubrequest["githubRequest[]"]
    center -->|"contains"| N_scripts_sweep_markstale["markStale[]"]
    center -->|"contains"| N_scripts_sweep_closeexpired["closeExpired[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CLOSE_MESSAGE()]] - `contains` [EXTRACTED]
- [[closeExpired()]] - `contains` [EXTRACTED]
- [[githubRequest()]] - `contains` [EXTRACTED]
- [[issue-lifecycle.ts]] - `imports_from` [EXTRACTED]
- [[markStale()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[sweep.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None