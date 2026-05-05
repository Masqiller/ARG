---
source_file: "vendor/claude-mem/src/utils/agents-md-utils.ts"
type: "code"
community: "Community None"
degree: 6
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# agents-md-utils.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["agents-md-utils.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_transcripts_processor_ts["processor.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_claude_md_utils_ts["claude-md-utils.ts"]
    center -->|"imports"| N_utils_claude_md_utils_replacetaggedcontent["replaceTaggedContent[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"contains"| N_utils_agents_md_utils_writeagentsmd["writeAgentsMd[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[claude-md-utils.ts]] - `imports_from` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[processor.ts]] - `imports_from` [EXTRACTED]
- [[replaceTaggedContent()]] - `imports` [EXTRACTED]
- [[writeAgentsMd()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[agents-md-utils.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None