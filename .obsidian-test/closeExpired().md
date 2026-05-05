---
source_file: "vendor/external_plugins/claude-code/scripts/sweep.ts"
type: "code"
community: "Community None"
degree: 3
location: "L92"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# closeExpired()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["closeExpired[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_claude_code_scripts_sweep_ts["sweep.ts"]
    center -->|"calls"| N_scripts_sweep_close_message["CLOSE_MESSAGE[]"]
    center -->|"calls"| N_scripts_sweep_githubrequest["githubRequest[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CLOSE_MESSAGE()]] - `calls` [EXTRACTED]
- [[githubRequest()]] - `calls` [EXTRACTED]
- [[sweep.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[closeExpired()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None