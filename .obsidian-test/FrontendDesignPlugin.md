---
source_file: "src/plugins/workforce-plugins.ts"
type: "code"
community: "Community None"
degree: 3
location: "L7"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# FrontendDesignPlugin

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["FrontendDesignPlugin"]:::centerNode
    center -->|"imports"| N_src_vibe_router_ts["vibe-router.ts"]
    center -->|"contains"| N_src_plugins_workforce_plugins_ts["workforce-plugins.ts"]
    center -->|"method"| N_plugins_workforce_plugins_frontenddesignplugin_execute[".execute[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.execute()_3]] - `method` [EXTRACTED]
- [[vibe-router.ts]] - `imports` [EXTRACTED]
- [[workforce-plugins.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[FrontendDesignPlugin]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None