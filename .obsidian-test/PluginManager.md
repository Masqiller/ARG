---
source_file: "src/plugins/plugin-manager.ts"
type: "code"
community: "Community None"
degree: 7
location: "L9"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# PluginManager

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["PluginManager"]:::centerNode
    center -->|"imports"| N_src_vibe_router_ts["vibe-router.ts"]
    center -->|"imports"| N_src_plugins_security_council_ts["security-council.ts"]
    center -->|"contains"| N_src_plugins_plugin_manager_ts["plugin-manager.ts"]
    center -->|"method"| N_plugins_plugin_manager_pluginmanager_constructor[".constructor[]"]
    center -->|"method"| N_plugins_plugin_manager_pluginmanager_registerplugin[".registerPlugin[]"]
    center -->|"method"| N_plugins_plugin_manager_pluginmanager_runplugin[".runPlugin[]"]
    center -->|"method"| N_plugins_plugin_manager_pluginmanager_listplugins[".listPlugins[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.constructor()_56]] - `method` [EXTRACTED]
- [[.listPlugins()]] - `method` [EXTRACTED]
- [[.registerPlugin()]] - `method` [EXTRACTED]
- [[.runPlugin()]] - `method` [EXTRACTED]
- [[plugin-manager.ts]] - `contains` [EXTRACTED]
- [[security-council.ts]] - `imports` [EXTRACTED]
- [[vibe-router.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[PluginManager]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None