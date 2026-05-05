---
source_file: "src/plugins/security-council.ts"
type: "code"
community: "Community None"
degree: 3
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# security-council.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["security-council.ts"]:::centerNode
    center -->|"imports"| N_src_arg_brain_argbrain["ARGBrain"]
    center -->|"imports"| N_plugins_plugin_manager_pluginmanager["PluginManager"]
    center -->|"contains"| N_plugins_security_council_securitycouncilplugin["SecurityCouncilPlugin"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ARGBrain]] - `imports` [EXTRACTED]
- [[PluginManager]] - `imports` [EXTRACTED]
- [[SecurityCouncilPlugin]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[security-council.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None