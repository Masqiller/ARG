---
source_file: "vendor/claude-mem/src/services/integrations/WindsurfHooksInstaller.ts"
type: "code"
community: "Community None"
degree: 2
location: "L343"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# removeClaudeMemHookEntries()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["removeClaudeMemHookEntries[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_windsurfhooksinstaller_ts["WindsurfHooksInstaller.ts"]
    center -->|"calls"| N_integrations_windsurfhooksinstaller_uninstallwindsurfhooks["uninstallWindsurfHooks[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[WindsurfHooksInstaller.ts]] - `contains` [EXTRACTED]
- [[uninstallWindsurfHooks()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[removeClaudeMemHookEntries()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None