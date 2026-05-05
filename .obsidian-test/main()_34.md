---
source_file: "vendor/claude-mem/scripts/sync-plugin-manifests.js"
type: "code"
community: "Community None"
degree: 5
location: "L77"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# main()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["main[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_scripts_sync_plugin_manifests_js["sync-plugin-manifests.js"]
    center -->|"calls"| N_scripts_sync_plugin_manifests_readjson["readJson[]"]
    center -->|"calls"| N_scripts_sync_plugin_manifests_writejson["writeJson[]"]
    center -->|"calls"| N_scripts_sync_plugin_manifests_synccodexplugin["syncCodexPlugin[]"]
    center -->|"calls"| N_scripts_sync_plugin_manifests_syncclaudeplugin["syncClaudePlugin[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[readJson()]] - `calls` [EXTRACTED]
- [[sync-plugin-manifests.js]] - `contains` [EXTRACTED]
- [[syncClaudePlugin()]] - `calls` [EXTRACTED]
- [[syncCodexPlugin()]] - `calls` [EXTRACTED]
- [[writeJson()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[main()_34]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None