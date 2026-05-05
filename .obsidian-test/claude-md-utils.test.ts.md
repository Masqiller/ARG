---
source_file: "vendor/claude-mem/tests/utils/claude-md-utils.test.ts"
type: "code"
community: "Community None"
degree: 6
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# claude-md-utils.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["claude-md-utils.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_claude_md_utils_ts["claude-md-utils.ts"]
    center -->|"imports"| N_utils_claude_md_utils_replacetaggedcontent["replaceTaggedContent[]"]
    center -->|"imports"| N_utils_claude_md_utils_formattimelineforclaudemd["formatTimelineForClaudeMd[]"]
    center -->|"imports"| N_utils_claude_md_utils_writeclaudemdtofolder["writeClaudeMdToFolder[]"]
    center -->|"imports"| N_utils_claude_md_utils_updatefolderclaudemdfiles["updateFolderClaudeMdFiles[]"]
    center -->|"imports"| N_utils_claude_md_utils_gettargetfilename["getTargetFilename[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[claude-md-utils.ts]] - `imports_from` [EXTRACTED]
- [[formatTimelineForClaudeMd()]] - `imports` [EXTRACTED]
- [[getTargetFilename()]] - `imports` [EXTRACTED]
- [[replaceTaggedContent()]] - `imports` [EXTRACTED]
- [[updateFolderClaudeMdFiles()]] - `imports` [EXTRACTED]
- [[writeClaudeMdToFolder()_1]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[claude-md-utils.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None