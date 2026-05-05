---
source_file: "vendor/claude-mem/src/cli/claude-md-commands.ts"
type: "code"
community: "Community None"
degree: 26
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# claude-md-commands.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 26

## Architecture Graph
```mermaid
graph LR
    center["claude-md-commands.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_settingsdefaultsmanager_ts["SettingsDefaultsManager.ts"]
    center -->|"imports"| N_shared_settingsdefaultsmanager_settingsdefaultsmanager["SettingsDefaultsManager"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_timeline_formatting_ts["timeline-formatting.ts"]
    center -->|"imports"| N_shared_timeline_formatting_formattime["formatTime[]"]
    center -->|"imports"| N_shared_timeline_formatting_groupbydate["groupByDate[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_path_utils_ts["path-utils.ts"]
    center -->|"imports"| N_shared_path_utils_isdirectchild["isDirectChild[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_paths_ts["paths.ts"]
    center -->|"contains"| N_cli_claude_md_commands_gettypeicon["getTypeIcon[]"]
    center -->|"contains"| N_cli_claude_md_commands_estimatetokens["estimateTokens[]"]
    center -->|"contains"| N_cli_claude_md_commands_gettrackedfolders["getTrackedFolders[]"]
    center -->|"contains"| N_cli_claude_md_commands_walkdirectorieswithignore["walkDirectoriesWithIgnore[]"]
    center -->|"contains"| N_cli_claude_md_commands_hasdirectchildfile["hasDirectChildFile[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[SettingsDefaultsManager]] - `imports` [EXTRACTED]
- [[SettingsDefaultsManager.ts]] - `imports_from` [EXTRACTED]
- [[cleanClaudeMd()]] - `contains` [EXTRACTED]
- [[cleanSingleFile()]] - `contains` [EXTRACTED]
- [[estimateTokens()]] - `contains` [EXTRACTED]
- [[extractRelevantFile()]] - `contains` [EXTRACTED]
- [[findObservationsByFolder()]] - `contains` [EXTRACTED]
- [[formatObservationsForClaudeMd()]] - `contains` [EXTRACTED]
- [[formatTime()_1]] - `imports` [EXTRACTED]
- [[generateClaudeMd()]] - `contains` [EXTRACTED]
- [[getTrackedFolders()]] - `contains` [EXTRACTED]
- [[getTypeIcon()]] - `contains` [EXTRACTED]
- [[groupByDate()]] - `imports` [EXTRACTED]
- [[hasDirectChildFile()]] - `contains` [EXTRACTED]
- [[isDirectChild()]] - `imports` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[main()_22]] - `imports_from` [EXTRACTED]
- [[path-utils.ts]] - `imports_from` [EXTRACTED]
- [[paths.ts]] - `imports_from` [EXTRACTED]
- [[processAllFoldersForGeneration()]] - `contains` [EXTRACTED]
- [[processFilesForCleanup()]] - `contains` [EXTRACTED]
- [[regenerateFolder()]] - `contains` [EXTRACTED]
- [[timeline-formatting.ts]] - `imports_from` [EXTRACTED]
- [[walkDirectoriesWithIgnore()]] - `contains` [EXTRACTED]
- [[writeClaudeMdToFolder()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[claude-md-commands.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None