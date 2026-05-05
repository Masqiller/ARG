---
source_file: "vendor/claude-mem/src/services/infrastructure/HealthMonitor.ts"
type: "code"
community: "Community None"
degree: 2
location: "L112"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getInstalledPluginVersion()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["getInstalledPluginVersion[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_infrastructure_healthmonitor_ts["HealthMonitor.ts"]
    center -->|"calls"| N_infrastructure_healthmonitor_checkversionmatch["checkVersionMatch[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[HealthMonitor.ts]] - `contains` [EXTRACTED]
- [[checkVersionMatch()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getInstalledPluginVersion()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None