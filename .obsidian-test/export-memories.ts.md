---
source_file: "vendor/claude-mem/scripts/export-memories.ts"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# export-memories.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["export-memories.ts"]:::centerNode
    center -->|"imports"| N_shared_settingsdefaultsmanager_settingsdefaultsmanager["SettingsDefaultsManager"]
    center -->|"contains"| N_scripts_export_memories_exportmemories["exportMemories[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[SettingsDefaultsManager]] - `imports` [EXTRACTED]
- [[exportMemories()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[export-memories.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None