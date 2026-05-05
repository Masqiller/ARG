---
source_file: "vendor/claude-mem/src/utils/claude-md-utils.ts"
type: "code"
community: "Community None"
degree: 12
location: "L223"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# updateFolderClaudeMdFiles()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 12

## Architecture Graph
```mermaid
graph LR
    center["updateFolderClaudeMdFiles[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_utils_claude_md_utils_test_ts["claude-md-utils.test.ts"]
    center -->|"calls"| N_shared_worker_utils_workerhttprequest["workerHttpRequest[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_agents_responseprocessor_ts["ResponseProcessor.ts"]
    center -->|"calls"| N_agents_responseprocessor_syncandbroadcastobservations["syncAndBroadcastObservations[]"]
    center -->|"contains"| N_vendor_claude_mem_src_utils_claude_md_utils_ts["claude-md-utils.ts"]
    center -->|"calls"| N_utils_claude_md_utils_gettargetfilename["getTargetFilename[]"]
    center -->|"calls"| N_utils_claude_md_utils_isvalidpathforclaudemd["isValidPathForClaudeMd[]"]
    center -->|"calls"| N_utils_claude_md_utils_writeclaudemdtofolder["writeClaudeMdToFolder[]"]
    center -->|"calls"| N_utils_claude_md_utils_formattimelineforclaudemd["formatTimelineForClaudeMd[]"]
    center -->|"calls"| N_utils_claude_md_utils_isexcludedunsafedirectory["isExcludedUnsafeDirectory[]"]
    center -->|"calls"| N_utils_claude_md_utils_isprojectroot["isProjectRoot[]"]
    center -->|"calls"| N_utils_claude_md_utils_isexcludedfolder["isExcludedFolder[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ResponseProcessor.ts]] - `imports` [EXTRACTED]
- [[claude-md-utils.test.ts]] - `imports` [EXTRACTED]
- [[claude-md-utils.ts]] - `contains` [EXTRACTED]
- [[formatTimelineForClaudeMd()]] - `calls` [EXTRACTED]
- [[getTargetFilename()]] - `calls` [EXTRACTED]
- [[isExcludedFolder()]] - `calls` [EXTRACTED]
- [[isExcludedUnsafeDirectory()]] - `calls` [EXTRACTED]
- [[isProjectRoot()]] - `calls` [EXTRACTED]
- [[isValidPathForClaudeMd()]] - `calls` [EXTRACTED]
- [[syncAndBroadcastObservations()]] - `calls` [INFERRED]
- [[workerHttpRequest()]] - `calls` [INFERRED]
- [[writeClaudeMdToFolder()_1]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[updateFolderClaudeMdFiles()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None