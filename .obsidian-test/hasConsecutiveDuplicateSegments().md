---
source_file: "vendor/claude-mem/src/utils/claude-md-utils.ts"
type: "code"
community: "Community None"
degree: 2
location: "L21"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# hasConsecutiveDuplicateSegments()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["hasConsecutiveDuplicateSegments[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_utils_claude_md_utils_ts["claude-md-utils.ts"]
    center -->|"calls"| N_utils_claude_md_utils_isvalidpathforclaudemd["isValidPathForClaudeMd[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[claude-md-utils.ts]] - `contains` [EXTRACTED]
- [[isValidPathForClaudeMd()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[hasConsecutiveDuplicateSegments()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None