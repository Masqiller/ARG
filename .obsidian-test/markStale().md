---
source_file: "vendor/external_plugins/claude-code/scripts/sweep.ts"
type: "code"
community: "Community None"
degree: 2
location: "L45"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# markStale()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["markStale[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_claude_code_scripts_sweep_ts["sweep.ts"]
    center -->|"calls"| N_scripts_sweep_githubrequest["githubRequest[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[githubRequest()]] - `calls` [EXTRACTED]
- [[sweep.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[markStale()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None