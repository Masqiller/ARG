---
source_file: "vendor/claude-mem/src/utils/claude-md-utils.ts"
type: "code"
community: "Community None"
degree: 25
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# claude-md-utils.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 25

## Architecture Graph
```mermaid
graph LR
    center["claude-md-utils.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_utils_claude_md_utils_test_ts["claude-md-utils.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_timeline_formatting_ts["timeline-formatting.ts"]
    center -->|"imports"| N_shared_timeline_formatting_formatdate["formatDate[]"]
    center -->|"imports"| N_shared_timeline_formatting_groupbydate["groupByDate[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_worker_utils_ts["worker-utils.ts"]
    center -->|"imports"| N_shared_worker_utils_workerhttprequest["workerHttpRequest[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_paths_ts["paths.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_settingsdefaultsmanager_ts["SettingsDefaultsManager.ts"]
    center -->|"imports"| N_shared_settingsdefaultsmanager_settingsdefaultsmanager["SettingsDefaultsManager"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_agents_responseprocessor_ts["ResponseProcessor.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_integrations_codexcliinstaller_ts["CodexCliInstaller.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"contains"| N_utils_claude_md_utils_gettargetfilename["getTargetFilename[]"]
    center -->|"contains"| N_utils_claude_md_utils_hasconsecutiveduplicatesegments["hasConsecutiveDuplicateSegments[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CodexCliInstaller.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[ResponseProcessor.ts]] - `imports_from` [EXTRACTED]
- [[SettingsDefaultsManager]] - `imports` [EXTRACTED]
- [[SettingsDefaultsManager.ts]] - `imports_from` [EXTRACTED]
- [[agents-md-utils.ts]] - `imports_from` [EXTRACTED]
- [[claude-md-utils.test.ts]] - `imports_from` [EXTRACTED]
- [[formatDate()_1]] - `imports` [EXTRACTED]
- [[formatTimelineForClaudeMd()]] - `contains` [EXTRACTED]
- [[getTargetFilename()]] - `contains` [EXTRACTED]
- [[groupByDate()]] - `imports` [EXTRACTED]
- [[hasConsecutiveDuplicateSegments()]] - `contains` [EXTRACTED]
- [[isExcludedFolder()]] - `contains` [EXTRACTED]
- [[isExcludedUnsafeDirectory()]] - `contains` [EXTRACTED]
- [[isProjectRoot()]] - `contains` [EXTRACTED]
- [[isValidPathForClaudeMd()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[paths.ts]] - `imports_from` [EXTRACTED]
- [[regenerate-claude-md.ts]] - `imports_from` [EXTRACTED]
- [[replaceTaggedContent()]] - `contains` [EXTRACTED]
- [[timeline-formatting.ts]] - `imports_from` [EXTRACTED]
- [[updateFolderClaudeMdFiles()]] - `contains` [EXTRACTED]
- [[worker-utils.ts]] - `imports_from` [EXTRACTED]
- [[workerHttpRequest()]] - `imports` [EXTRACTED]
- [[writeClaudeMdToFolder()_1]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[claude-md-utils.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None