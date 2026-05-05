---
source_file: "vendor/claude-mem/src/utils/claude-md-utils.ts"
type: "code"
community: "Community None"
degree: 8
location: "L55"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# replaceTaggedContent()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["replaceTaggedContent[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_utils_claude_md_utils_test_ts["claude-md-utils.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_integrations_codexcliinstaller_ts["CodexCliInstaller.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_utils_claude_md_utils_ts["claude-md-utils.ts"]
    center -->|"calls"| N_utils_claude_md_utils_writeclaudemdtofolder["writeClaudeMdToFolder[]"]
    center -->|"imports"| N_vendor_claude_mem_src_utils_agents_md_utils_ts["agents-md-utils.ts"]
    center -->|"imports"| N_vendor_claude_mem_scripts_regenerate_claude_md_ts["regenerate-claude-md.ts"]
    center -->|"calls"| N_utils_agents_md_utils_writeagentsmd["writeAgentsMd[]"]
    center -->|"calls"| N_scripts_regenerate_claude_md_writeclaudemdtofolderforregenerate["writeClaudeMdToFolderForRegenerate[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CodexCliInstaller.ts]] - `imports` [EXTRACTED]
- [[agents-md-utils.ts]] - `imports` [EXTRACTED]
- [[claude-md-utils.test.ts]] - `imports` [EXTRACTED]
- [[claude-md-utils.ts]] - `contains` [EXTRACTED]
- [[regenerate-claude-md.ts]] - `imports` [EXTRACTED]
- [[writeAgentsMd()]] - `calls` [INFERRED]
- [[writeClaudeMdToFolder()_1]] - `calls` [EXTRACTED]
- [[writeClaudeMdToFolderForRegenerate()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[replaceTaggedContent()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None