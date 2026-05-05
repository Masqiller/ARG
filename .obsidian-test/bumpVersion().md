---
source_file: "vendor/claude-mem/scripts/publish.js"
type: "code"
community: "Community None"
degree: 2
location: "L135"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# bumpVersion()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["bumpVersion[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_scripts_publish_js["publish.js"]
    center -->|"calls"| N_scripts_publish_publish["publish[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[publish()]] - `calls` [EXTRACTED]
- [[publish.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[bumpVersion()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None