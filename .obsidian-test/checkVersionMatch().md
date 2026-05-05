---
source_file: "vendor/claude-mem/src/services/infrastructure/HealthMonitor.ts"
type: "code"
community: "Community None"
degree: 3
location: "L148"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# checkVersionMatch()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["checkVersionMatch[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_infrastructure_healthmonitor_ts["HealthMonitor.ts"]
    center -->|"calls"| N_infrastructure_healthmonitor_getinstalledpluginversion["getInstalledPluginVersion[]"]
    center -->|"calls"| N_infrastructure_healthmonitor_getrunningworkerversion["getRunningWorkerVersion[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[HealthMonitor.ts]] - `contains` [EXTRACTED]
- [[getInstalledPluginVersion()]] - `calls` [EXTRACTED]
- [[getRunningWorkerVersion()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[checkVersionMatch()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None