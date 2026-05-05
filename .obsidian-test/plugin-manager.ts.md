---
source_file: "src/plugins/plugin-manager.ts"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# plugin-manager.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["plugin-manager.ts"]:::centerNode
    center -->|"imports"| N_src_arg_brain_argbrain["ARGBrain"]
    center -->|"contains"| N_plugins_plugin_manager_pluginmanager["PluginManager"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ARGBrain]] - `imports` [EXTRACTED]
- [[PluginManager]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[plugin-manager.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None