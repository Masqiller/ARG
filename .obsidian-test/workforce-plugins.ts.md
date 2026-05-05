---
source_file: "src/plugins/workforce-plugins.ts"
type: "code"
community: "Community None"
degree: 3
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# workforce-plugins.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["workforce-plugins.ts"]:::centerNode
    center -->|"contains"| N_plugins_workforce_plugins_frontenddesignplugin["FrontendDesignPlugin"]
    center -->|"contains"| N_plugins_workforce_plugins_codereviewplugin["CodeReviewPlugin"]
    center -->|"contains"| N_plugins_workforce_plugins_securityreviewplugin["SecurityReviewPlugin"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CodeReviewPlugin]] - `contains` [EXTRACTED]
- [[FrontendDesignPlugin]] - `contains` [EXTRACTED]
- [[SecurityReviewPlugin]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[workforce-plugins.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None