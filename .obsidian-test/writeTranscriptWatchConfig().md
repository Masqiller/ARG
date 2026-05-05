---
source_file: "vendor/claude-mem/src/services/integrations/CodexCliInstaller.ts"
type: "code"
community: "Community None"
degree: 3
location: "L81"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# writeTranscriptWatchConfig()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["writeTranscriptWatchConfig[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_codexcliinstaller_ts["CodexCliInstaller.ts"]
    center -->|"calls"| N_integrations_codexcliinstaller_writeconfigandshowcodexinstructions["writeConfigAndShowCodexInstructions[]"]
    center -->|"calls"| N_integrations_codexcliinstaller_uninstallcodexcli["uninstallCodexCli[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CodexCliInstaller.ts]] - `contains` [EXTRACTED]
- [[uninstallCodexCli()]] - `calls` [EXTRACTED]
- [[writeConfigAndShowCodexInstructions()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[writeTranscriptWatchConfig()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None