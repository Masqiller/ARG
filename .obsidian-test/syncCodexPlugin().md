---
source_file: "vendor/claude-mem/scripts/sync-plugin-manifests.js"
type: "code"
community: "Community None"
degree: 4
location: "L22"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# syncCodexPlugin()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["syncCodexPlugin[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_scripts_sync_plugin_manifests_js["sync-plugin-manifests.js"]
    center -->|"calls"| N_scripts_sync_plugin_manifests_normalizerepositoryurl["normalizeRepositoryUrl[]"]
    center -->|"calls"| N_scripts_sync_plugin_manifests_normalizeauthorname["normalizeAuthorName[]"]
    center -->|"calls"| N_scripts_sync_plugin_manifests_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[main()_34]] - `calls` [EXTRACTED]
- [[normalizeAuthorName()]] - `calls` [EXTRACTED]
- [[normalizeRepositoryUrl()]] - `calls` [EXTRACTED]
- [[sync-plugin-manifests.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[syncCodexPlugin()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None