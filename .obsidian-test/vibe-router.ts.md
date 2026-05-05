---
source_file: "src/vibe-router.ts"
type: "code"
community: "Community None"
degree: 13
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# vibe-router.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 13

## Architecture Graph
```mermaid
graph LR
    center["vibe-router.ts"]:::centerNode
    center -->|"imports_from"| N_src_mcp_server_ts["mcp-server.ts"]
    center -->|"imports"| N_src_usb_manager_universalsessionbridge["UniversalSessionBridge"]
    center -->|"imports"| N_src_arg_brain_argbrain["ARGBrain"]
    center -->|"imports"| N_src_skill_mapper_recommendskillsfortask["recommendSkillsForTask[]"]
    center -->|"imports"| N_plugins_plugin_manager_pluginmanager["PluginManager"]
    center -->|"imports"| N_plugins_external_loader_externalpluginloader["ExternalPluginLoader"]
    center -->|"imports"| N_plugins_workforce_plugins_frontenddesignplugin["FrontendDesignPlugin"]
    center -->|"imports"| N_plugins_workforce_plugins_codereviewplugin["CodeReviewPlugin"]
    center -->|"imports"| N_plugins_workforce_plugins_securityreviewplugin["SecurityReviewPlugin"]
    center -->|"imports"| N_plugins_security_council_securitycouncilplugin["SecurityCouncilPlugin"]
    center -->|"imports"| N_plugins_n8n_bridge_n8nbridgeplugin["N8NBridgePlugin"]
    center -->|"imports"| N_plugins_vibe_harden_vibehardenplugin["VibeHardenPlugin"]
    center -->|"contains"| N_src_vibe_router_viberouter["VibeRouter"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ARGBrain]] - `imports` [EXTRACTED]
- [[CodeReviewPlugin]] - `imports` [EXTRACTED]
- [[ExternalPluginLoader]] - `imports` [EXTRACTED]
- [[FrontendDesignPlugin]] - `imports` [EXTRACTED]
- [[N8NBridgePlugin]] - `imports` [EXTRACTED]
- [[PluginManager]] - `imports` [EXTRACTED]
- [[SecurityCouncilPlugin]] - `imports` [EXTRACTED]
- [[SecurityReviewPlugin]] - `imports` [EXTRACTED]
- [[UniversalSessionBridge]] - `imports` [EXTRACTED]
- [[VibeHardenPlugin]] - `imports` [EXTRACTED]
- [[VibeRouter]] - `contains` [EXTRACTED]
- [[mcp-server.ts_1]] - `imports_from` [EXTRACTED]
- [[recommendSkillsForTask()]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[vibe-router.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None