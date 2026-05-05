---
source_file: "vendor/claude-mem/scripts/sync-plugin-manifests.js"
type: "code"
community: "Community None"
degree: 7
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# sync-plugin-manifests.js

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["sync-plugin-manifests.js"]:::centerNode
    center -->|"contains"| N_scripts_sync_plugin_manifests_readjson["readJson[]"]
    center -->|"contains"| N_scripts_sync_plugin_manifests_writejson["writeJson[]"]
    center -->|"contains"| N_scripts_sync_plugin_manifests_synccodexplugin["syncCodexPlugin[]"]
    center -->|"contains"| N_scripts_sync_plugin_manifests_syncclaudeplugin["syncClaudePlugin[]"]
    center -->|"contains"| N_scripts_sync_plugin_manifests_normalizeauthorname["normalizeAuthorName[]"]
    center -->|"contains"| N_scripts_sync_plugin_manifests_normalizerepositoryurl["normalizeRepositoryUrl[]"]
    center -->|"contains"| N_scripts_sync_plugin_manifests_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[main()_34]] - `contains` [EXTRACTED]
- [[normalizeAuthorName()]] - `contains` [EXTRACTED]
- [[normalizeRepositoryUrl()]] - `contains` [EXTRACTED]
- [[readJson()]] - `contains` [EXTRACTED]
- [[syncClaudePlugin()]] - `contains` [EXTRACTED]
- [[syncCodexPlugin()]] - `contains` [EXTRACTED]
- [[writeJson()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[sync-plugin-manifests.js]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None