---
source_file: "vendor/claude-mem/src/services/integrations/CodexCliInstaller.ts"
type: "code"
community: "Community None"
degree: 15
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# CodexCliInstaller.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 15

## Architecture Graph
```mermaid
graph LR
    center["CodexCliInstaller.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_paths_ts["paths.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_transcripts_config_ts["config.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_transcripts_types_ts["types.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_claude_md_utils_ts["claude-md-utils.ts"]
    center -->|"imports"| N_utils_claude_md_utils_replacetaggedcontent["replaceTaggedContent[]"]
    center -->|"contains"| N_integrations_codexcliinstaller_loadexistingtranscriptwatchconfig["loadExistingTranscriptWatchConfig[]"]
    center -->|"contains"| N_integrations_codexcliinstaller_mergecodexwatchconfig["mergeCodexWatchConfig[]"]
    center -->|"contains"| N_integrations_codexcliinstaller_writetranscriptwatchconfig["writeTranscriptWatchConfig[]"]
    center -->|"contains"| N_integrations_codexcliinstaller_removecodexagentsmdcontext["removeCodexAgentsMdContext[]"]
    center -->|"contains"| N_integrations_codexcliinstaller_readandstripcontexttags["readAndStripContextTags[]"]
    center -->|"contains"| N_integrations_codexcliinstaller_installcodexcli["installCodexCli[]"]
    center -->|"contains"| N_integrations_codexcliinstaller_writeconfigandshowcodexinstructions["writeConfigAndShowCodexInstructions[]"]
    center -->|"contains"| N_integrations_codexcliinstaller_uninstallcodexcli["uninstallCodexCli[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[claude-md-utils.ts]] - `imports_from` [EXTRACTED]
- [[config.ts]] - `imports_from` [EXTRACTED]
- [[installCodexCli()]] - `contains` [EXTRACTED]
- [[loadExistingTranscriptWatchConfig()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[mergeCodexWatchConfig()]] - `contains` [EXTRACTED]
- [[paths.ts]] - `imports_from` [EXTRACTED]
- [[readAndStripContextTags()]] - `contains` [EXTRACTED]
- [[removeCodexAgentsMdContext()]] - `contains` [EXTRACTED]
- [[replaceTaggedContent()]] - `imports` [EXTRACTED]
- [[types.ts_4]] - `imports_from` [EXTRACTED]
- [[uninstallCodexCli()]] - `contains` [EXTRACTED]
- [[writeConfigAndShowCodexInstructions()]] - `contains` [EXTRACTED]
- [[writeTranscriptWatchConfig()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[CodexCliInstaller.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None