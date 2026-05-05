---
source_file: "src/plugins/external-loader.ts"
type: "code"
community: "Community None"
degree: 5
location: "L9"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ExternalPluginLoader

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["ExternalPluginLoader"]:::centerNode
    center -->|"imports"| N_src_vibe_router_ts["vibe-router.ts"]
    center -->|"contains"| N_src_plugins_external_loader_ts["external-loader.ts"]
    center -->|"method"| N_plugins_external_loader_externalpluginloader_constructor[".constructor[]"]
    center -->|"method"| N_plugins_external_loader_externalpluginloader_loadclaudecodeplugins[".loadClaudeCodePlugins[]"]
    center -->|"method"| N_plugins_external_loader_externalpluginloader_loadcavemanagents[".loadCavemanAgents[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.constructor()_58]] - `method` [EXTRACTED]
- [[.loadCavemanAgents()]] - `method` [EXTRACTED]
- [[.loadClaudeCodePlugins()]] - `method` [EXTRACTED]
- [[external-loader.ts]] - `contains` [EXTRACTED]
- [[vibe-router.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ExternalPluginLoader]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None