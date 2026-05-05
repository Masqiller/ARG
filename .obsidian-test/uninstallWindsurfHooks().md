---
source_file: "vendor/claude-mem/src/services/integrations/WindsurfHooksInstaller.ts"
type: "code"
community: "Community None"
degree: 4
location: "L313"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# uninstallWindsurfHooks()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["uninstallWindsurfHooks[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_windsurfhooksinstaller_ts["WindsurfHooksInstaller.ts"]
    center -->|"calls"| N_integrations_windsurfhooksinstaller_removeclaudememhookentries["removeClaudeMemHookEntries[]"]
    center -->|"calls"| N_integrations_windsurfhooksinstaller_removewindsurfcontextandunregister["removeWindsurfContextAndUnregister[]"]
    center -->|"calls"| N_integrations_windsurfhooksinstaller_handlewindsurfcommand["handleWindsurfCommand[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[WindsurfHooksInstaller.ts]] - `contains` [EXTRACTED]
- [[handleWindsurfCommand()]] - `calls` [EXTRACTED]
- [[removeClaudeMemHookEntries()]] - `calls` [EXTRACTED]
- [[removeWindsurfContextAndUnregister()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[uninstallWindsurfHooks()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None