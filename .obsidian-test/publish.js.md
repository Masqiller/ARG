---
source_file: "vendor/claude-mem/scripts/publish.js"
type: "code"
community: "Community None"
degree: 4
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# publish.js

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["publish.js"]:::centerNode
    center -->|"contains"| N_scripts_publish_question["question[]"]
    center -->|"contains"| N_scripts_publish_publish["publish[]"]
    center -->|"contains"| N_scripts_publish_bumpversion["bumpVersion[]"]
    center -->|"contains"| N_scripts_publish_isvalidversion["isValidVersion[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[bumpVersion()]] - `contains` [EXTRACTED]
- [[isValidVersion()]] - `contains` [EXTRACTED]
- [[publish()]] - `contains` [EXTRACTED]
- [[question()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[publish.js]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None